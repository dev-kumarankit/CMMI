import { useState } from "react";
import { executeTicketWorkflow, transformTickets } from "./ticketStatusUtils";
const finalTicketData = [

    {
        "id": "6990408f6d174547a38b5dfb",
        "isDeleted": false,
        "createdBy": "69204f4a3a253639ce7c4dfa",
        "createdDate": "2025-07-14T09:00:52+05:30",
        "projectId": "6900a7fe4c730b135c512784",
        "consumedHours": null,
        "issueType": "Bug",
        "rca": "64870ad8178369e21d38713a",
        "summary": "User session expires immediately after login",
        "ticketNumber": "AM-303",
        "sprintId": "695766652b0e8848bdce5d7a",
        "sprintName": null,
        "storyPoint": null,
        "estimatedHours": null,
        "estimatedHoursQA": null,
        "userIds": [
            "6954e6955207f172a03786bb"
        ],
        "assigneeUserNames": [
            "Akashdeep  Singh"
        ],
        "status": "Sprint Backlog",
        "severity": "Medium",
        "priority": "High",
        "label": "691aac9ff205413eb68752d7",
        "labelName": "Requirement",
        "isParentTicket": false,
        "epicId": null,
        "order": 2,
        "orderDate": "0001-01-01T00:00:00Z"
    },
    {
        "id": "699043b16d174547a38b5e2a",
        "isDeleted": false,
        "createdBy": "69204f4a3a253639ce7c4dfa",
        "createdDate": "2025-07-10T09:30:30+05:30",
        "projectId": "6900a7fe4c730b135c512784",
        "consumedHours": null,
        "issueType": "Bug",
        "rca": "64870ad8178369e21d38713a",
        "summary": "Error message not displayed for invalid password\n",
        "ticketNumber": "AM-304",
        "sprintId": "695766652b0e8848bdce5d7a",
        "sprintName": null,
        "storyPoint": null,
        "estimatedHours": null,
        "estimatedHoursQA": null,
        "userIds": [
            "6954e6955207f172a03786bb"
        ],
        "assigneeUserNames": [
            "Akashdeep  Singh"
        ],
        "status": "Sprint Backlog",
        "severity": "Medium",
        "priority": "Medium",
        "label": "691aac9ff205413eb68752d7",
        "labelName": "Requirement",
        "isParentTicket": false,
        "epicId": null,
        "order": 2,
        "orderDate": "0001-01-01T00:00:00Z"
    },
    {
        "id": "699044766d174547a38b5e3c",
        "isDeleted": false,
        "createdBy": "69204f4a3a253639ce7c4dfa",
        "createdDate": "2025-07-14T09:08:20+05:30",
        "projectId": "6900a7fe4c730b135c512784",
        "consumedHours": null,
        "issueType": "Bug",
        "rca": "64870ad8178369e21d38713a",
        "summary": "Incorrect candidate count displayed",
        "ticketNumber": "AM-305",
        "sprintId": "695766652b0e8848bdce5d7a",
        "sprintName": null,
        "storyPoint": null,
        "estimatedHours": null,
        "estimatedHoursQA": null,
        "userIds": [
            "6954e6955207f172a03786bb"
        ],
        "assigneeUserNames": [
            "Akashdeep  Singh"
        ],
        "status": "Sprint Backlog",
        "severity": "Medium",
        "priority": "Medium",
        "label": "691aac9ff205413eb68752d7",
        "labelName": "Requirement",
        "isParentTicket": false,
        "epicId": null,
        "order": 2,
        "orderDate": "0001-01-01T00:00:00Z"
    },
    {
        "id": "699048a96d174547a38b5e7b",
        "isDeleted": false,
        "createdBy": "69204f4a3a253639ce7c4dfa",
        "createdDate": "2025-07-14T10:59:17+05:30",
        "projectId": "6900a7fe4c730b135c512784",
        "consumedHours": null,
        "issueType": "Bug",
        "rca": "64870ad8178369e21d38713a",
        "summary": "Submission status not updating in real time\n",
        "ticketNumber": "AM-306",
        "sprintId": "695766652b0e8848bdce5d7a",
        "sprintName": null,
        "storyPoint": null,
        "estimatedHours": null,
        "estimatedHoursQA": null,
        "userIds": [
            "6954e6955207f172a03786bb"
        ],
        "assigneeUserNames": [
            "Akashdeep  Singh"
        ],
        "status": "Sprint Backlog",
        "severity": "Medium",
        "priority": "Medium",
        "label": "691aac9ff205413eb68752d7",
        "labelName": "Requirement",
        "isParentTicket": false,
        "epicId": null,
        "order": 2,
        "orderDate": "0001-01-01T00:00:00Z"
    },
    {
        "id": "69904a6a6d174547a38b5eac",
        "isDeleted": false,
        "createdBy": "69204f4a3a253639ce7c4dfa",
        "createdDate": "2025-07-14T09:24:54+05:30",
        "projectId": "6900a7fe4c730b135c512784",
        "consumedHours": null,
        "issueType": "Bug",
        "rca": "64870ad8178369e21d38713a",
        "summary": "Candidate data not saved on first attempt\n",
        "ticketNumber": "AM-308",
        "sprintId": "695766652b0e8848bdce5d7a",
        "sprintName": null,
        "storyPoint": null,
        "estimatedHours": null,
        "estimatedHoursQA": null,
        "userIds": [
            "6954e6955207f172a03786bb"
        ],
        "assigneeUserNames": [
            "Akashdeep  Singh"
        ],
        "status": "Sprint Backlog",
        "severity": "Medium",
        "priority": "High",
        "label": "691aac9ff205413eb68752d7",
        "labelName": "Requirement",
        "isParentTicket": false,
        "epicId": null,
        "order": 2,
        "orderDate": "0001-01-01T00:00:00Z"
    },
    {
        "id": "69904bad6d174547a38b5ec5",
        "isDeleted": false,
        "createdBy": "69204f4a3a253639ce7c4dfa",
        "createdDate": "2025-07-14T09:36:28+05:30",
        "projectId": "6900a7fe4c730b135c512784",
        "consumedHours": null,
        "issueType": "Bug",
        "rca": "64870ad8178369e21d38713a",
        "summary": "Filter by date returns incorrect results\n",
        "ticketNumber": "AM-309",
        "sprintId": "695766652b0e8848bdce5d7a",
        "sprintName": null,
        "storyPoint": null,
        "estimatedHours": null,
        "estimatedHoursQA": null,
        "userIds": [
            "6954e6955207f172a03786bb"
        ],
        "assigneeUserNames": [
            "Akashdeep  Singh"
        ],
        "status": "Sprint Backlog",
        "severity": "Medium",
        "priority": "Medium",
        "label": "691aac9ff205413eb68752d7",
        "labelName": "Requirement",
        "isParentTicket": false,
        "epicId": null,
        "order": 2,
        "orderDate": "0001-01-01T00:00:00Z"
    },
    {
        "id": "69904fdb6d174547a38b5f2a",
        "isDeleted": false,
        "createdBy": "69204f4a3a253639ce7c4dfa",
        "createdDate": "2025-07-14T11:47:53+05:30",
        "projectId": "6900a7fe4c730b135c512784",
        "consumedHours": null,
        "issueType": "Bug",
        "rca": "64870ad8178369e21d38713a",
        "summary": "UI overlap on dashboard widgets\n",
        "ticketNumber": "AM-313",
        "sprintId": "695766652b0e8848bdce5d7a",
        "sprintName": null,
        "storyPoint": null,
        "estimatedHours": null,
        "estimatedHoursQA": null,
        "userIds": [
            "6954e6955207f172a03786bb"
        ],
        "assigneeUserNames": [
            "Akashdeep  Singh"
        ],
        "status": "Sprint Backlog",
        "severity": "Medium",
        "priority": "High",
        "label": "691aac9ff205413eb68752d7",
        "labelName": "Requirement",
        "isParentTicket": false,
        "epicId": null,
        "order": 2,
        "orderDate": "0001-01-01T00:00:00Z"
    },
    {
        "id": "699050836d174547a38b5f3f",
        "isDeleted": false,
        "createdBy": "69204f4a3a253639ce7c4dfa",
        "createdDate": "2025-07-14T11:00:54+05:30",
        "projectId": "6900a7fe4c730b135c512784",
        "consumedHours": null,
        "issueType": "Bug",
        "rca": "64870ad8178369e21d38713a",
        "summary": "Font and spacing mismatch with approved design\n",
        "ticketNumber": "AM-314",
        "sprintId": "695766652b0e8848bdce5d7a",
        "sprintName": null,
        "storyPoint": null,
        "estimatedHours": null,
        "estimatedHoursQA": null,
        "userIds": [
            "6954e6955207f172a03786bb"
        ],
        "assigneeUserNames": [
            "Akashdeep  Singh"
        ],
        "status": "Sprint Backlog",
        "severity": "Medium",
        "priority": "High",
        "label": "691aac9ff205413eb68752d7",
        "labelName": "Requirement",
        "isParentTicket": false,
        "epicId": null,
        "order": 2,
        "orderDate": "0001-01-01T00:00:00Z"
    },
    {
        "id": "699050d66d174547a38b5f4f",
        "isDeleted": false,
        "createdBy": "69204f4a3a253639ce7c4dfa",
        "createdDate": "2025-07-14T11:54:38+05:30",
        "projectId": "6900a7fe4c730b135c512784",
        "consumedHours": null,
        "issueType": "Bug",
        "rca": "64870ad8178369e21d38713a",
        "summary": "High response time during peak load\n",
        "ticketNumber": "AM-315",
        "sprintId": "695766652b0e8848bdce5d7a",
        "sprintName": null,
        "storyPoint": null,
        "estimatedHours": null,
        "estimatedHoursQA": null,
        "userIds": [
            "6954e6955207f172a03786bb"
        ],
        "assigneeUserNames": [
            "Akashdeep  Singh"
        ],
        "status": "Sprint Backlog",
        "severity": "Medium",
        "priority": "High",
        "label": "691aac9ff205413eb68752d7",
        "labelName": "Requirement",
        "isParentTicket": false,
        "epicId": null,
        "order": 2,
        "orderDate": "0001-01-01T00:00:00Z"
    },
    {
        "id": "6990510b6d174547a38b5f55",
        "isDeleted": false,
        "createdBy": "69204f4a3a253639ce7c4dfa",
        "createdDate": "2025-07-14T13:05:01+05:30",
        "projectId": "6900a7fe4c730b135c512784",
        "consumedHours": null,
        "issueType": "Bug",
        "rca": "64870ad8178369e21d38713a",
        "summary": "Account lock not triggered after multiple failed attempts\n",
        "ticketNumber": "AM-316",
        "sprintId": "695766652b0e8848bdce5d7a",
        "sprintName": null,
        "storyPoint": null,
        "estimatedHours": null,
        "estimatedHoursQA": null,
        "userIds": [
            "6954e6955207f172a03786bb"
        ],
        "assigneeUserNames": [
            "Akashdeep  Singh"
        ],
        "status": "Sprint Backlog",
        "severity": "Critical",
        "priority": "High",
        "label": "691aac9ff205413eb68752d7",
        "labelName": "Requirement",
        "isParentTicket": false,
        "epicId": null,
        "order": 2,
        "orderDate": "0001-01-01T00:00:00Z"
    }

]
// const finalTicketData1 = [
//     {
//         "status": "Sprint Backlog",
//         "summary": "Signup API allows duplicate email registration",
//         "ticketId": "6989b256a354c8444b0e586f",
//         "InprogressDate":"2026-02-18 11:56:48",
//         "InprogressComment":"<p>I am reviewing the issue and investigating the root cause. Will share an update soon.</p>",
//         "ResolvedDate":"2026-02-19 11:56:48",
//         "ResolvedComment":"<p>I have completed the analysis and implemented the fix. The changes are deployed. Please proceed with testing and share your feedback.</p>",
//         "QaDate":"2026-02-19 11:56:48",
//         "QAAssign":true,
//         "qaUserId":""
//     },
   
// ]
const TicketStatus = () => {
    const [loading, setLoading] = useState(false);


    const ishaTicketARA='4Qw8CbN6g4yXq8Tvz5cam2hQ4+w8bcxtzd6urPhTQXmxNjwhtS1muNIkkQNaUxbJ1E7+9AovpZ3cbVJK5fkS4d7u2A/kYsIskqEhxkaTxkO74au6qK7rUSGP2WjX1zhgUO/VbI1QSekDASaA+arj41tbGfUEuE5qejYo2PEvgolo7VlfYt/hr2g41H5Iz6bHE6a3Ut+i+w+mQBWqGFefDkFVH/G5WeWZj5GT7ut30czaAcyJ/4V0g3Z9reozxDtGCa9NtwFFMoY4AxPeinkty6KEForw8CBwomrCKdDDZ9yBICK206jE3QVHpZpPHnEa5A3pq8k6EZnviIZ1hQdDoSmKHGnltmFOpTinNeeR+Os4YcoloDkBSTwvMOnFtK0QqNDkpmkwxBLu8uS2ltNbQuhkODyTduSrQGCj6IoJnSBIQmqrGzbpnZLX1FPyRUz2wzN8wVMgcMtUMM+wVr7b66C+yF/mhylEKu+m9V+NlZvIFoWHBcTX8fHv54Rdn77Q+tkWAAUcCXDC87889gp7iVRksNLImjVphMcLJMgWme8='
    const akashdeep1ARA='4Qw8CbN6g4yXq8Tvz5cam2hQ4+w8bcxtzd6urPhTQXmxNjwhtS1muNIkkQNaUxbJzIOZAe4yKKqw1JhTkI5mv1OEgI44h+bSPqf9317dZtxcSI2TNYlZOGxJ0n1IxVIcvNYaDlxVk5w40TPXHbP6T8CrwmnMhelmZF5FGu7ltr/06tAwgYprIliYi3ybBw8eNgZbAda6hcBIAfyxcdX111DiW9oCgy6Qxibxs6qc82aUspsrQQyFQ0Cd+PaHLH7FgbXAKilOx2gxcZY3wAZdD6uCv62oSYOGJ6rx3eL705woeWyByLcZytn+hmECMQ8s7Rv1+y9am++yTUOpivkl7n8hOoB+Nl3l6LgHjT0YM8xC7ksIVHgvEwTSyglqr9jw1E8hwDML296wquPHmyLIKmUgn+vR1c9qaUSy+A+RJX5HRmiswOjAF+OC1PPLj5Ej8yW3AO3XXBVz/xA4G68z6AUnnjl9BSU0EKTJv4W5BXVEpztzwRCm2hUadlVwTI9ZArFZ5wfsJxw0RKpH1ArJMfWSuePg5CA27jYMvRk+kmE='
    const userToken = akashdeep1ARA
    const [tasks] = useState(finalTicketData);
    console.log("Initial Tasks:", tasks, finalTicketData);

  const submitAll = async () => {
  setLoading(true);

  try {

        await executeTicketWorkflow({
        finalTicketData: tasks,
        userToken
        });

    alert("All workflows completed successfully!");
  } catch (error) {
    console.log(error,"errorerror")
    alert("Workflow stopped due to failure. Check logs.");
  } finally {
    setLoading(false);
  }
};
    return (<>
    
               <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Task Estimation
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-4 py-3 text-gray-600 font-semibold">Ticket ID</th>
                <th className="text-left px-4 py-3 text-gray-600 font-semibold">status</th>
                <th className="text-left px-4 py-3 text-gray-600 font-semibold">assigneeUserNames</th>
              </tr>
            </thead>

 <tbody>
  {transformTickets(tasks, userToken).map((item:any) => (
    <tr key={item.ticketId} className="border-t">
      <td className="px-4 py-3 text-gray-700 font-medium">
        {item.ticketId}
      </td>
      <td className="px-4 py-3 text-gray-700 font-medium">
        {item.status}
      </td>
      <td className="px-4 py-3 text-gray-700 font-medium">
        {item.assigneeUserNames?.[0]||""}
      </td>
    </tr>
  ))}
</tbody>
</table>
        </div>
    
           <button
                onClick={submitAll}
                disabled={loading}
                className={`px-6 py-2 rounded-lg text-white font-medium transition-all
              ${loading
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-blue-600 hover:bg-blue-700 active:scale-95"
                    }
            `}
            >
                {loading ? "Submitting..." : "Submit All"}
            </button></>
    )
}

export default TicketStatus;
