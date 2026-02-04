import { useState } from "react";
import axios from "axios";


// Design Review - milestone 1
const initialTickets = [  {
 "ticketId": "69579af75e0304eaf54b0023",
    "description": "<ul><li>The Payment Management will be reviewed to ensure full compliance with the approved Requirement Analysis (RA)</li>\n  <li>All functional requirements, business rules, and workflows defined in the RA will be validated against the implementation</li>\n  <li>User journeys and process flows will be verified to ensure alignment with RA expectations</li>\n  <li>Data fields, validations, and business constraints will be checked as per RA specifications</li>\n  <li>API behaviors and integrations will be reviewed to ensure they meet RA-defined scenarios</li>\n  <li>Error scenarios and edge cases outlined in the RA will be validated</li>\n  <li>Any gaps, deviations, or ambiguities from the RA will be identified and documented</li>\n  <li>Review findings will be shared with stakeholders and tracked to closure for final approval</li>\n</ul>\n",
"updatedDate": "2025-08-01 9:10:37"
},  {
 "ticketId": "69579af75e0304eaf54b0021",
     "description": "<ul><li>The Review Management will be reviewed to ensure full compliance with the approved Requirement Analysis (RA)</li>\n  <li>All functional requirements, business rules, and workflows defined in the RA will be validated against the implementation</li>\n  <li>User journeys and process flows will be verified to ensure alignment with RA expectations</li>\n  <li>Data fields, validations, and business constraints will be checked as per RA specifications</li>\n  <li>API behaviors and integrations will be reviewed to ensure they meet RA-defined scenarios</li>\n  <li>Error scenarios and edge cases outlined in the RA will be validated</li>\n  <li>Any gaps, deviations, or ambiguities from the RA will be identified and documented</li>\n  <li>Review findings will be shared with stakeholders and tracked to closure for final approval</li>\n</ul>\n",
"updatedDate": "2025-08-01 10:12:37"
},  {
 "ticketId": "69579af75e0304eaf54b001f",
     "description": "<ul><li>The Admission Collection Flow will be reviewed to ensure full compliance with the approved Requirement Analysis (RA)</li>\n  <li>All functional requirements, business rules, and workflows defined in the RA will be validated against the implementation</li>\n  <li>User journeys and process flows will be verified to ensure alignment with RA expectations</li>\n  <li>Data fields, validations, and business constraints will be checked as per RA specifications</li>\n  <li>API behaviors and integrations will be reviewed to ensure they meet RA-defined scenarios</li>\n  <li>Error scenarios and edge cases outlined in the RA will be validated</li>\n  <li>Any gaps, deviations, or ambiguities from the RA will be identified and documented</li>\n  <li>Review findings will be shared with stakeholders and tracked to closure for final approval</li>\n</ul>\n",
"updatedDate": "2025-08-01 11:12:37"
},{
 "ticketId": "6957a8c75e0304eaf54b0215",
    "description": "<ul><li>The Reports Module will be reviewed to ensure full compliance with the approved Requirement Analysis (RA)</li>\n  <li>All functional requirements, business rules, and workflows defined in the RA will be validated against the implementation</li>\n  <li>User journeys and process flows will be verified to ensure alignment with RA expectations</li>\n  <li>Data fields, validations, and business constraints will be checked as per RA specifications</li>\n  <li>API behaviors and integrations will be reviewed to ensure they meet RA-defined scenarios</li>\n  <li>Error scenarios and edge cases outlined in the RA will be validated</li>\n  <li>Any gaps, deviations, or ambiguities from the RA will be identified and documented</li>\n  <li>Review findings will be shared with stakeholders and tracked to closure for final approval</li>\n</ul>\n",
"updatedDate": "2025-08-01 9:10:37"
},  {
 "ticketId": "6957a9155e0304eaf54b022d",
     "description": "<ul><li>The Dashboard Module will be reviewed to ensure full compliance with the approved Requirement Analysis (RA)</li>\n  <li>All functional requirements, business rules, and workflows defined in the RA will be validated against the implementation</li>\n  <li>User journeys and process flows will be verified to ensure alignment with RA expectations</li>\n  <li>Data fields, validations, and business constraints will be checked as per RA specifications</li>\n  <li>API behaviors and integrations will be reviewed to ensure they meet RA-defined scenarios</li>\n  <li>Error scenarios and edge cases outlined in the RA will be validated</li>\n  <li>Any gaps, deviations, or ambiguities from the RA will be identified and documented</li>\n  <li>Review findings will be shared with stakeholders and tracked to closure for final approval</li>\n</ul>\n",
"updatedDate": "2025-08-01 10:12:37"
},  {
 "ticketId": "6957a9ee5e0304eaf54b0266",
     "description": "<ul><li>The Reports Module Flow will be reviewed to ensure full compliance with the approved Requirement Analysis (RA)</li>\n  <li>All functional requirements, business rules, and workflows defined in the RA will be validated against the implementation</li>\n  <li>User journeys and process flows will be verified to ensure alignment with RA expectations</li>\n  <li>Data fields, validations, and business constraints will be checked as per RA specifications</li>\n  <li>API behaviors and integrations will be reviewed to ensure they meet RA-defined scenarios</li>\n  <li>Error scenarios and edge cases outlined in the RA will be validated</li>\n  <li>Any gaps, deviations, or ambiguities from the RA will be identified and documented</li>\n  <li>Review findings will be shared with stakeholders and tracked to closure for final approval</li>\n</ul>\n",
"updatedDate": "2025-08-01 11:12:37"
},  {
 "ticketId": "6957a8905e0304eaf54b0201",
     "description": "<ul><li>The Admission Collection Flow will be reviewed to ensure full compliance with the approved Requirement Analysis (RA)</li>\n  <li>All functional requirements, business rules, and workflows defined in the RA will be validated against the implementation</li>\n  <li>User journeys and process flows will be verified to ensure alignment with RA expectations</li>\n  <li>Data fields, validations, and business constraints will be checked as per RA specifications</li>\n  <li>API behaviors and integrations will be reviewed to ensure they meet RA-defined scenarios</li>\n  <li>Error scenarios and edge cases outlined in the RA will be validated</li>\n  <li>Any gaps, deviations, or ambiguities from the RA will be identified and documented</li>\n  <li>Review findings will be shared with stakeholders and tracked to closure for final approval</li>\n</ul>\n",
"updatedDate": "2025-08-01 11:12:37"
},{
 "ticketId": "6957a8c75e0304eaf54b0215",
    "description": "<ul><li>The Reports Module will be reviewed to ensure full compliance with the approved Requirement Analysis (RA)</li>\n  <li>All functional requirements, business rules, and workflows defined in the RA will be validated against the implementation</li>\n  <li>User journeys and process flows will be verified to ensure alignment with RA expectations</li>\n  <li>Data fields, validations, and business constraints will be checked as per RA specifications</li>\n  <li>API behaviors and integrations will be reviewed to ensure they meet RA-defined scenarios</li>\n  <li>Error scenarios and edge cases outlined in the RA will be validated</li>\n  <li>Any gaps, deviations, or ambiguities from the RA will be identified and documented</li>\n  <li>Review findings will be shared with stakeholders and tracked to closure for final approval</li>\n</ul>\n",
"updatedDate": "2025-08-01 9:10:37"
},  {
 "ticketId": "6957a9155e0304eaf54b022d",
     "description": "<ul><li>The Dashboard Module will be reviewed to ensure full compliance with the approved Requirement Analysis (RA)</li>\n  <li>All functional requirements, business rules, and workflows defined in the RA will be validated against the implementation</li>\n  <li>User journeys and process flows will be verified to ensure alignment with RA expectations</li>\n  <li>Data fields, validations, and business constraints will be checked as per RA specifications</li>\n  <li>API behaviors and integrations will be reviewed to ensure they meet RA-defined scenarios</li>\n  <li>Error scenarios and edge cases outlined in the RA will be validated</li>\n  <li>Any gaps, deviations, or ambiguities from the RA will be identified and documented</li>\n  <li>Review findings will be shared with stakeholders and tracked to closure for final approval</li>\n</ul>\n",
"updatedDate": "2025-08-01 10:12:37"
},  {
 "ticketId": "6957a9ee5e0304eaf54b0266",
     "description": "<ul><li>The Reports Module Flow will be reviewed to ensure full compliance with the approved Requirement Analysis (RA)</li>\n  <li>All functional requirements, business rules, and workflows defined in the RA will be validated against the implementation</li>\n  <li>User journeys and process flows will be verified to ensure alignment with RA expectations</li>\n  <li>Data fields, validations, and business constraints will be checked as per RA specifications</li>\n  <li>API behaviors and integrations will be reviewed to ensure they meet RA-defined scenarios</li>\n  <li>Error scenarios and edge cases outlined in the RA will be validated</li>\n  <li>Any gaps, deviations, or ambiguities from the RA will be identified and documented</li>\n  <li>Review findings will be shared with stakeholders and tracked to closure for final approval</li>\n</ul>\n",
"updatedDate": "2025-08-01 11:12:37"
}
];

const CodeReviewSubmit = () => {
  const [tickets] = useState(initialTickets);
  const [loading, setLoading] = useState(false);

  const submitAll = async () => {
    setLoading(true);

    for (const item of tickets) {
      const payload = {
        ticketId: item.ticketId,
        description: item.description,
        updatedDate: item.updatedDate
      };

    const token="4Qw8CbN6g4yXq8Tvz5cam2hQ4+w8bcxtzd6urPhTQXmxNjwhtS1muNIkkQNaUxbJkjC0WaFWRnA5zVsKB9c/ai5Zjtv3sWqFGNrQvz/OQQnxSpA73750fLzWR1+NZMtqGk15Ck0o6o6+wLw7AfzgBoeu1PnIILJQ0Z1guriH+q4n4taGiAJ1QjQLWDTxUp+VFqrTcf14myI+QH3yNi3DAGGbBUqsRgXqEBJZZIPeR1HNzWngAAz4tvTTOwr1Ceaid35BmlsCmOsXbAj99y617968qsQVMatV46GosProe3MBjcuXh4c1kWeF5zSiKU0pfm1wM75EPgKYB92wD9Z0uPENmTQuj/zkfqCBZMZskytE+BKu8f+DJzcJyb18s0LFSe6ciS/hvtw5rzXK5q3h85SC+5+smn79hGGSlophV5+xY+04gLAlFfIg7Fg0jU10MvTjYPwhH2uwMkOvifa4Nj5ZsVH21Wyr5xjoyhJINccz5n/UV4RrbSpFvZ/1AfMVf2k2aiVwSJFhZO5wkbjFmZ7LAixkdiOmLuGhJua/cKk="
      try {
        await axios.put("http://seasiaprojectmgt.com/api/v1/Ticket/UpdateDescription", payload,{
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        });

        // optional delay
        await new Promise((res) => setTimeout(res, 500));
      } catch (error: any) {
        alert(`Failed to submit Ticket ID: ${item.ticketId}`);
        setLoading(false);
        return;
      }
    }

    alert("All descriptions submitted successfully 🎉");
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Code Review Descriptions
        </h2>

        <table className="w-full border border-gray-200 rounded-lg overflow-hidden mb-6">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left px-4 py-3 text-gray-600 font-semibold">
                Ticket ID
              </th>
              <th className="text-left px-4 py-3 text-gray-600 font-semibold">
                Updated Date
              </th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((item) => (
              <tr key={item.ticketId} className="border-t">
                <td className="px-4 py-3 text-gray-700">{item.ticketId}</td>
                <td className="px-4 py-3 text-gray-700">{item.updatedDate}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-end">
          <button
            onClick={submitAll}
            disabled={loading}
            className={`px-6 py-3 rounded-lg text-white font-medium transition-all
              ${loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 active:scale-95"
              }`}
          >
            {loading ? "Submitting..." : "Submit All"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CodeReviewSubmit;
