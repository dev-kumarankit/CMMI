import { useState } from "react";
import axios from "axios";




const ankitToken="4Qw8CbN6g4yXq8Tvz5cam2hQ4+w8bcxtzd6urPhTQXmxNjwhtS1muNIkkQNaUxbJfB+OtEda2UVH/g0dSI9GgP4Ko2qYTFEBw1+i/gzrq7AEisUsyHVkAV1mIldJ5AHqtjj/ojjrlI8JuipQ8O2ZOYqR5Ix92yqvIPIepimwiiqHhkDZ9N+j78bgNVKNM+8VLoPU0vzuA33GbXFpnh/XxywXj6ZNPelQCaufm2My/RK/NR9knJxOHKxckKnOXFuWFmAGpedI0LIun2dInes/oiFcp2NkW7s31Ds+AYKyUntl9zLcI07Ad9AnTapNDrsF/RRBxmxknwhsqUFlTR2vgQFfasHlT7DS8ObGwmnWx9XgrrsDnQy6eajrZWR4EL5hUL2lgcZR0eYy+PCCw6n8vpVSbmRK57LLJe/zKG5HDeQMcjrkd+fwAjI/p7+0cpYVd0oqhoNMn5GsxUKHFxJAHLRkN4XyOD9v4qdhtsgTAzrJ4KfxxLcXBTJvv6Hbc87nGGlKcdmsTbIuR08N0S7uXg=="
const anilToken='4Qw8CbN6g4yXq8Tvz5cam2hQ4+w8bcxtzd6urPhTQXmxNjwhtS1muNIkkQNaUxbJw1ZV6VP2Nz6fo6psilcX6jpzsptplUn/rOXZDkVNRnYBs+gxHIPUnmh3KPAEYNCsY7MNICutiVnr5U7IqMtxRp4IvtoumG4I+b8M5J10Xz78nCdd7+1tIT69YhK6HbWvnD4XrlVxa1QElPK/1g1QrKJEGHa1ts0VXRRB3wFXgWP6R620jtE3nSDFF5s3hrrg2opzmw75xvOYfipLiLby/IX5g5MC+mpqUk6nzMZpZLzO4KzHj2Ya/xal/uUnZZK5lOdlwwwc/5tEVaZmAR0K8hNf5UyL4bRqs47xSHfUIHLfrYkoAzQEdzAL5OT0BvWy098BYU8gI74GXE90/hyjE9/aLzloVO8BTmx4xJJzNLDAtVx3o3hDH3HEL7j2tfnlc75gQ1Q4Wc+muuL91Hjj6lsE60qg/OL88PEjKkM0vHJn1RQd5779A9A+QvOXUBgyrfr1KseoKSECBFhKWHVXw2gAnr8BDzpsXIFSjGcI6AI='
const amarToken='4Qw8CbN6g4yXq8Tvz5cam2hQ4+w8bcxtzd6urPhTQXmxNjwhtS1muNIkkQNaUxbJkjC0WaFWRnA5zVsKB9c/ai5Zjtv3sWqFGNrQvz/OQQnxSpA73750fLzWR1+NZMtqGk15Ck0o6o6+wLw7AfzgBoeu1PnIILJQ0Z1guriH+q4n4taGiAJ1QjQLWDTxUp+VFqrTcf14myI+QH3yNi3DACsNxwsEwB8ENbUiKkITH7mkMrEDpF1tEd9Bxh0s8EFfgvcuFt/7tU1zMQvrSq8ds2/78uhUUDpQQiKu5eHufKfvP/RnWsOkHFOpB74wYm35kVxQH/cZ7yJPROOJsi1pjGvN1rRSuUfUWTKWYVZqh9u1rjXEVF5vHGs5ZbUU19+JZLKLSV8NBNu+SmXNkKeqdrzjjzazRW9Flt8NFNAa2vP7/0PAG/v2BFDrCH56Q2aoYFGFR4+R5WEOkqYdudGFRe8izn6gDccJozDef0YT8/tF6e/2WDTvoRin//D10HAxdBpzpqrBR8rzod++j0jz5Ep25t9DO51Ej87WcD6LEA0='
const gpToken='4Qw8CbN6g4yXq8Tvz5cam2hQ4+w8bcxtzd6urPhTQXmxNjwhtS1muNIkkQNaUxbJMteEnT+HbW5qI5qzhCLI2UO3OaZXNxbXpTq8drGjfRJVr04Z5q9wvToBXEi4mZI5pPo5COs4rTblJgRU4v1VmJT340LwMdnfmz3leMofO/fXNgwY9UNIcOXUM85HsqneHJ/mdIK3Mo8m04j9Wn8VsMLyjMFEzbCRbPZKKdW1LAPLCbS8Z550rASVkdTul5lUWpnU0/zAa1GNF1zjlRRGsHS3Ozae09jJB88nU2WHnprY10dyjEAb05TY2t06vvm45jNpCPkuzrYrePQsaDIhJJrIOseS1HS50jNuFdaK1aP4496es9MdOf9GTGrSLbXt7PS9+DpTY21Bv4jrlr9hY6FmSSmH+uRTv8HI5UKCkRsU85fhatnAhJg6+T60SXa7gdBC/0IU8QF30KJ2pr7Fxbq5lyZ/8yeGD6Mlc1IVkSi7AaTbC/8JkqWz66zg3n7zX/erFlKUqJzX+BkkfjdP32VdMOIpjPsbEKDXoSqNKhI=' 
const ticketId="6922ae9f5f3631ebb97801db"


 const designReviewTickets =[
  {
    ticketId: ticketId,
    token: ankitToken,
    consumedHours: "4:00",
    updatedDate: "2025-09-30 13:00:00",
    workingDay: "2025-09-30T09:00:00Z",
    description: "<ul><li>Review User Role Management (Admin) functional implementation.</li><li>Evaluate code quality, structure, and adherence to coding standards.</li><li>Verify business logic, role-permission validations, and API contract consistency.</li><li>Assess error handling, test coverage, and document review findings.</li></ul>",
    consumedWorkDiscription: "<p>Completed detailed review of User Role Management (Admin) module covering validation logic, API consistency, architectural compliance, and documented findings for final approval.</p>"
  }
]
 
 
const AddDefects = () => {
    const [tickets] = useState(designReviewTickets);
    const [loading, setLoading] = useState(false);

    const submitAll = async () => {
        setLoading(true);

        for (const item of tickets) {
            const payload = {
                ticketId: item.ticketId,
                description: item.description,
                createdDate: item.updatedDate
            };
            const consumedPayload = {
                ticketId: item.ticketId,
                consumedHours: item.consumedHours,
                workDiscription: item.consumedWorkDiscription,
                workingDay: item.workingDay
            };
            const token = item.token;
            try {
                await axios.post("http://seasiaprojectmgt.com/api/v1/Ticket/AddTicketComment", payload, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json"
                    }
                });
                await axios.post("http://seasiaprojectmgt.com/api/v1/Ticket/OfflineWorkHours/Add", consumedPayload, {
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
  <div>Total Tickets <span className="text-xl font-semibold">{tickets.length}</span> total hourse: <span className="text-xl font-semibold">{tickets.length * 7.86}</span>  </div>  
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

export default AddDefects;
