import axios from "axios";
import dayjs, { Dayjs } from "dayjs";
import { codeReviewApprovedComments, codeReviewChangesRequestedComments, codeReviewInProgressComments, designInProgressComments, designResolvedComments, designReviewComments, inProgressComments, raComments, raInProgressComments, raQaReviewComments, raResolvedComments, resolvedComments } from "./commentsStatus";
const UPDATE_STATUS='http://seasiaprojectmgt.com/api/v1/Ticket/UpdateStatus'
const ADD_COMMENTS='http://seasiaprojectmgt.com/api/v1/Ticket/AddTicketComment'
// Working hours
const WORK_START = 9;   // 9 AM
const WORK_END = 20;    // 8 PM

const formatDateTime = (date: Dayjs) =>
  date.format("YYYY-MM-DD HH:mm:ss");
export const COMMENT_LIBRARY = {
  normal: {
    inProgress: inProgressComments,
    resolved: resolvedComments,
  },
  ra: {
    inProgress: raInProgressComments,
    resolved: raResolvedComments,
    review: raQaReviewComments,
  },
  design: {
    inProgress: designInProgressComments,
    resolved: designResolvedComments,
    review: designReviewComments,
  },
  codeReview: {
    inProgress: codeReviewInProgressComments,
    changesRequested: codeReviewChangesRequestedComments,
    approved: codeReviewApprovedComments,
  },
};
// Generate random time between two dayjs objects
const getRandomBetween = (start: Dayjs, end: Dayjs): Dayjs => {
  const diff = end.diff(start, "minute");
  const randomMinutes = Math.floor(Math.random() * diff);
  return start.add(randomMinutes, "minute");
};

// Ensure time stays within working hours
const clampToWorkingHours = (date: Dayjs): Dayjs => {
  const startOfWork = date.hour(WORK_START).minute(0).second(0);
  const endOfWork = date.hour(WORK_END).minute(0).second(0);

  if (date.isBefore(startOfWork)) return startOfWork;
  if (date.isAfter(endOfWork)) return endOfWork;

  return date;
};
export const getRandomComment = (comments: string[]): string => {
  const index = Math.floor(Math.random() * comments.length);
  return comments[index];
};
type TicketType = keyof typeof COMMENT_LIBRARY;
export const getCommentByIndex = (
  type: TicketType,
  stage: string,
  index: number
): string => {
  const module = COMMENT_LIBRARY[type] as any;

  if (!module || !module[stage]) {
    return "<p>Invalid comment type or stage.</p>";
  }

  const comments = module[stage];

  if (index < 0 || index >= comments.length) {
    return comments[0]; // fallback
  }

  return comments[index];
};
export const getStageComment = (
  module: keyof typeof COMMENT_LIBRARY,
  type: string
): string => {
  const moduleComments = COMMENT_LIBRARY[module] as any;

  if (!moduleComments || !moduleComments[type]) {
    return "<p>Comment not configured for this stage.</p>";
  }

  return getRandomComment(moduleComments[type]);
};
export const transformTickets = (data: any[], qaUserId: string) => {
  return data.map((item,index) => {
    const createdDate=dayjs(item.createdDate).add(1, "day")
    const baseDay = dayjs(createdDate)
      .hour(WORK_START)
      .minute(0)
      .second(0);

    const endOfDay = baseDay.hour(WORK_END);

    // 1️⃣ In Progress (random between 9 AM - 8 PM)
    const inProgressDate = getRandomBetween(baseDay, endOfDay);

    // 2️⃣ Resolved (after Inprogress, before 8 PM)
    const resolvedDate = getRandomBetween(
      inProgressDate.add(5, "minute"), // at least +5 mins
      endOfDay
    );

    // 3️⃣ QA (after Resolved, before 8 PM)
    const qaDate = getRandomBetween(
      resolvedDate.add(5, "minute"),
      endOfDay
    );

    return {
      ticketId: item?.id,
      summary: item?.summary,
      status: item?.status,

      InprogressDate: formatDateTime(
        clampToWorkingHours(inProgressDate)
      ),

      ResolvedDate: formatDateTime(
        clampToWorkingHours(resolvedDate)
      ),

      QaDate: formatDateTime(
        clampToWorkingHours(qaDate)
      ),

      InprogressComment:getCommentByIndex("normal", "inProgress", index),

      ResolvedComment:getCommentByIndex("normal", "resolved", index),
      qaUserId: qaUserId || item.userIds?.[0] || "",
    };
  });
};

export const executeTicketWorkflow = async ({
    finalTicketData,
    userToken
}: any
) => {
    const QAAssign=true;
    const finalDefectsData=transformTickets(finalTicketData,userToken)
    console.log(finalDefectsData,"finalDefectsData")
    try {
        for (const ticket of finalDefectsData) {
            const {
                ticketId,
                InprogressDate,
                InprogressComment,
                ResolvedDate,
                ResolvedComment,
                QaDate,
                // QAAssign,
                // qaUserId
            } = ticket;
            if(!ticket.ticketId||!ticket.status||!ticket.summary){
                return
            }
            console.log(`🚀 Processing Ticket: ${ticketId}`);

            // 1️⃣ Move to IN_PROGRESS
            await axios.put(
               UPDATE_STATUS,
                {
                    ticketId,
                    status: "In Progress",
                    updatedDate: InprogressDate,
                },
                { headers: { Authorization: `Bearer ${userToken}` } }
            );

            // 2️⃣ Add In Progress Comment
            await axios.post(
                ADD_COMMENTS,
                {
                    ticketId,
                    description: InprogressComment,
                    createdDate: InprogressDate,
                },
                { headers: { Authorization: `Bearer ${userToken}` } }
            );

            // 3️⃣ Move to RESOLVED
            await axios.put(
                UPDATE_STATUS,
                {
                    ticketId,
                    status: "Resolved",
                    updatedDate: ResolvedDate,
                },
                { headers: { Authorization: `Bearer ${userToken}` } }
            );

            // 4️⃣ Add Resolution Comment
            await axios.post(
                ADD_COMMENTS,
                {
                    ticketId,
                    description: ResolvedComment,
                    createdDate: ResolvedDate,
                },
                { headers: { Authorization: `Bearer ${userToken}` } }
            );

            // 5️⃣ Move to QA (if enabled)
             if (QAAssign) {
                await axios.put(
                  UPDATE_STATUS,
                  {
                    ticketId,
                    status: "QA",
                    // assignTo: qaUserId,
                    updatedDate: QaDate,
                  },
                  { headers: { Authorization: `Bearer ${userToken}` } }
                );
              }

            console.log(`✅ Ticket ${ticketId} completed successfully`);
        }

        return { success: true };

    } catch (error: any) {
        console.error(
            "❌ Workflow stopped due to failure:",
            error?.response?.data || error.message
        );
        throw error;
    }
};