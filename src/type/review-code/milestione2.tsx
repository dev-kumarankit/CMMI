import { useState } from "react";
import axios from "axios";


// Design Review - milestone 1
const initialTickets = [  {
 "ticketId": "6922a7325f3631ebb9780016",
    "description": "<ul><li>Reviewed microservices architecture for scalability, resiliency, and alignment with business requirements</li><li>Validated service boundaries, inter-service communication, and API contracts</li><li>Assessed data ownership, database-per-service design, and consistency strategies</li><li>Reviewed security architecture including authentication, authorization, and service-to-service communication</li><li>Identified risks, bottlenecks, and deployment considerations; shared updates and obtained stakeholder approval</li></ul>",
"updatedDate": "2025-08-04 10:10:37"
},  {
 "ticketId": "6922a77d5f3631ebb978002e",
     "description": "<ul><li>Reviewed microservices architecture for scalability, resiliency, and alignment with business requirements</li><li>Validated service boundaries, inter-service communication, and API contracts</li><li>Assessed data ownership, database-per-service design, and consistency strategies</li><li>Reviewed security architecture including authentication, authorization, and service-to-service communication</li><li>Identified risks, bottlenecks, and deployment considerations; shared updates and obtained stakeholder approval</li></ul>",
"updatedDate": "2025-08-04 11:12:37"
},{
 "ticketId": "6922a7ca5f3631ebb9780048",
    "description": "<ul><li>Reviewed microservices architecture for scalability, resiliency, and alignment with business requirements</li><li>Validated service boundaries, inter-service communication, and API contracts</li><li>Assessed data ownership, database-per-service design, and consistency strategies</li><li>Reviewed security architecture including authentication, authorization, and service-to-service communication</li><li>Identified risks, bottlenecks, and deployment considerations; shared updates and obtained stakeholder approval</li></ul>",
"updatedDate": "2025-08-04 12:10:37"
}, {
 "ticketId": "6922a7f25f3631ebb978005d",
    "description": "<ul><li>Reviewed microservices architecture for scalability, resiliency, and alignment with business requirements</li><li>Validated service boundaries, inter-service communication, and API contracts</li><li>Assessed data ownership, database-per-service design, and consistency strategies</li><li>Reviewed security architecture including authentication, authorization, and service-to-service communication</li><li>Identified risks, bottlenecks, and deployment considerations; shared updates and obtained stakeholder approval</li></ul>",
"updatedDate": "2025-08-04 13:10:37"
}, {
 "ticketId": "6922a89f5f3631ebb9780072",
  "description": "<ul><li>Reviewed microservices architecture for scalability, resiliency, and alignment with business requirements</li><li>Validated service boundaries, inter-service communication, and API contracts</li><li>Assessed data ownership, database-per-service design, and consistency strategies</li><li>Reviewed security architecture including authentication, authorization, and service-to-service communication</li><li>Identified risks, bottlenecks, and deployment considerations; shared updates and obtained stakeholder approval</li></ul>",
"updatedDate": "2025-08-04 14:10:37"
}, 
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
// Design Review - milestone 2