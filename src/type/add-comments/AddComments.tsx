import { useState } from "react";
import axios from "axios";


// Design Review - milestone 1

const ankitToken="4Qw8CbN6g4yXq8Tvz5cam2hQ4+w8bcxtzd6urPhTQXmxNjwhtS1muNIkkQNaUxbJfB+OtEda2UVH/g0dSI9GgP4Ko2qYTFEBw1+i/gzrq7AEisUsyHVkAV1mIldJ5AHqtjj/ojjrlI8JuipQ8O2ZOYqR5Ix92yqvIPIepimwiiqHhkDZ9N+j78bgNVKNM+8VLoPU0vzuA33GbXFpnh/XxywXj6ZNPelQCaufm2My/RK/NR9knJxOHKxckKnOXFuWFmAGpedI0LIun2dInes/oiFcp2NkW7s31Ds+AYKyUntl9zLcI07Ad9AnTapNDrsF/RRBxmxknwhsqUFlTR2vgQFfasHlT7DS8ObGwmnWx9XgrrsDnQy6eajrZWR4EL5hUL2lgcZR0eYy+PCCw6n8vpVSbmRK57LLJe/zKG5HDeQMcjrkd+fwAjI/p7+0cpYVd0oqhoNMn5GsxUKHFxJAHLRkN4XyOD9v4qdhtsgTAzrJ4KfxxLcXBTJvv6Hbc87nGGlKcdmsTbIuR08N0S7uXg=="
const ramToken="4Qw8CbN6g4yXq8Tvz5cam2hQ4+w8bcxtzd6urPhTQXmxNjwhtS1muNIkkQNaUxbJyIFUP38CPyowEVxrGyj0CxCLHL6oYQCdJxLWPSVBA27GJhiR9so7IubqXLIPO3w43JVPSmxEtGwDDZlsNpKRELw0Eu66ImxjbFzRkr9nvtPZEGWV2wjdz1jq6/HIQO6VpqD1hyhgU+oHQMvzZicyxKihFgMb8xR1Nn9ZzDmHEn2RQC6LAiQ24llb0TtzhkTK72+hfH3AWz+vmDn1REN4tsbU+vYjfkSCVUkLNFRZzXowq/lJpgAfGkA0EYEpysMT9jnUYKx5DTXWtFAXLLQtRbrR862E4JXUIwxQyaPHtHDjSdCU63iw8vL1ylIqpxYN4PLuDRMxM8MAiSlOqg1d4xNWMqGaScMhdGIzUqnPivSrNYBJ/oeY+dVg+JpctyThECq71lXTfa5bDgsyIeTFmm/b6bIKAQNTPoj1GmbsHXiJhqtKISWn5Skxjfkk03oLGF5dktXQcbrNbVlN1DKqA7HxN/n+zv1eqClG3XahGi8="
const shivaniToken="4Qw8CbN6g4yXq8Tvz5cam2hQ4+w8bcxtzd6urPhTQXmxNjwhtS1muNIkkQNaUxbJ22bhN6/xHt5NLbhIoy82b4D+2OpDyUJ3+4En+aeUOxNHY+TN3JIvsxeM21gktUaSUzWsirGUh5PO7uKgkxGFBtEagsX6TdZQnvMauHdSJq8wZpZ104x5ZXowOd0PcjSB3XNQ3Jvmq7YnZX8A0DBHO+yqfTLZ4oZv6M1jEUNMnqIEj6E3NWjQuyBDj4KKm08L/jaelK8STrRjJskcB129uPd1VLaWYQ3OgEeAAI2POPwPMACM8mPZO8GmUWrjVrG+XMsCWfShTRhF4SLU66KD898BpTeiVvd1h44fGSOQZbFst30J0Pxh7OMhovKdNQi0PlOZJykzGTgcwIzhXKKcY+FP8uiTXNX3iTccI/ONv/mE8Z0WOsD5fhDLWbuWoxy1mrVVYcT1lO6n9b3bZ9efYJ7bjztrwPzsl5Ac1JLZrfUDsF18ka04j1ATMwerXYegIGIA2J3CNyAhsxtLsIxtyTvR37HXLgA6gJdcs0zHMDk="
const akashToken="4Qw8CbN6g4yXq8Tvz5cam2hQ4+w8bcxtzd6urPhTQXmxNjwhtS1muNIkkQNaUxbJ45Huv6KuDD3xnY15xcZrT9wRWEgKM8Jurt6cqZ1cPn3a7trtOZZcVOCAIfSewxcm0VWXoEAQEB4HCT5+owPr0Bu1XrXpzpRuBRl93LoEMKK0FQSD8bBqZqqhanyhp1lRcjEp/FWz2Lko8FxCRLmrREMMw7/UiRBFt4MzsKtc97sYsb8UgAbaa1sPOTZyAmoXuMooN5sX9EidcCM3NqzjIlyy4jmgSuhtfOHhNGX7/H1miaExbOASECKiIJ3i12MYYQpOFsZ4HnDVqNrsb3t0EYKDCbch5rEOIL6Ot/Ra0zmCxhlXE+hqYzj48SVN+D1XN6D1T93bqTzAetl11nv3cdQzqG4K2l6Rb4YW1K5NUDFwdeevXWjm0rPr58IckvU2WmMrcdHTHrIAu/jV2C6O0suBOam5zafUcseeDhSYAoJGIZqae/lBkQqomeEDZehCmhLvaPEVgdYXQVETsVmzEQ=="
const ticketId="6937cb639d6fe8130c2e2792"
const initialTickets =[
  // ================== FE: Ankit ==================
  {
    ticketId: ticketId,
    consumedHours: "06:38",
    updatedDate: "2025-07-17 18:07:00",
    workingDay: "2025-07-19T10:55:00Z",
    token: ankitToken,
    description: `<ul>
      <li>Built Admin Dashboard layout with responsive sidebar navigation.</li>
      <li>Added top stats cards displaying Total Orders, Completed Deliveries, Active Customers, Active Vendors, Revenue, etc.</li>
      <li>Ensured responsive design and visual consistency with design system.</li>
    </ul>`,
    consumedWorkDiscription: `<p>Developed core Admin Dashboard layout including sidebar navigation and top stats cards with responsive design and proper UI feedback.</p>`
  },
  {
    ticketId: ticketId,
    consumedHours: "06:38",
    updatedDate: "2025-07-19 16:25:00",
    workingDay: "2025-07-19T10:55:00Z",
    token: ankitToken,
    description: `<ul>
      <li>Integrated real-time updates section using WebSocket/Live API.</li>
      <li>Built Order Tracking section with Ongoing/Completed tabs.</li>
      <li>Integrated Dashboard Stats API with loading, empty, and error states.</li>
    </ul>`,
    consumedWorkDiscription: `<p>Implemented frontend real-time updates, order tracking tabs, and integrated dashboard API data with proper loading/error states.</p>`
  },

  // ================== FE: Akash ==================
  {
    ticketId: ticketId,
    consumedHours: "06:38",
    updatedDate: "2025-07-17 18:07:00",
    workingDay: "2025-07-19T10:55:00Z",
    token: akashToken,
    description: `<ul>
      <li>Created Charts UI for Orders, Revenue, Courier Performance, and Customer Stats.</li>
      <li>Added Map View for Active Routes.</li>
      <li>Implemented Date Filter (Last 7 days, custom range).</li>
    </ul>`,
    consumedWorkDiscription: `<p>Developed charts UI and integrated map view for active routes, added date filtering options for dynamic dashboard insights.</p>`
  },
  {
    ticketId: ticketId,
    consumedHours: "06:38",
    updatedDate: "2025-07-19 16:25:00",
    workingDay: "2025-07-19T10:55:00Z",
    token: akashToken,
    description: `<ul>
      <li>Integrated Live Tracking API/WebSocket for real-time order movement updates.</li>
      <li>Handled loading, empty, and error states for all dashboard sections.</li>
    </ul>`,
    consumedWorkDiscription: `<p>Connected frontend with live tracking API/WebSocket for real-time order updates and ensured proper handling of various UI states.</p>`
  },

  // ================== BE: Ram ==================
  {
    ticketId: ticketId,
    consumedHours: "06:38",
    updatedDate: "2025-07-17 18:07:00",
    workingDay: "2025-07-19T10:55:00Z",
    token: ramToken,
    description: `<ul>
      <li>Created Dashboard Stats API returning totalOrders, completedDeliveries, activeCustomers, activeVendors, totalRevenue, activeCampaigns, pendingTickets.</li>
      <li>Optimized queries using indexes and caching for performance.</li>
    </ul>`,
    consumedWorkDiscription: `<p>Implemented backend Dashboard Stats API with optimized queries and caching to deliver high-performance metrics.</p>`
  },
  {
    ticketId: ticketId,
    consumedHours: "06:38",
    updatedDate: "2025-07-19 16:25:00",
    workingDay: "2025-07-19T10:55:00Z",
    token: ramToken,
    description: `<ul>
      <li>Built Order Tracking API with Ongoing/Completed orders.</li>
      <li>Implemented Courier Status API and Vendor Performance API.</li>
      <li>Developed Chart Data APIs for daily/weekly stats.</li>
    </ul>`,
    consumedWorkDiscription: `<p>Completed backend APIs for order tracking, courier/vendor performance, and chart data endpoints with efficient database queries.</p>`
  },

  // ================== BE: Shivani ==================
  {
    ticketId: ticketId,
    consumedHours: "06:38",
    updatedDate: "2025-07-17 18:07:00",
    workingDay: "2025-07-19T10:55:00Z",
    token: shivaniToken,
    description: `<ul>
      <li>Built Active Routes / Live Location API integrated with WebSocket/Socket.IO for real-time updates.</li>
      <li>Secured all dashboard APIs with admin authentication middleware.</li>
    </ul>`,
    consumedWorkDiscription: `<p>Implemented backend real-time location API and secured all dashboard APIs with proper admin authentication.</p>`
  },
  {
    ticketId: ticketId,
    consumedHours: "06:38",
    updatedDate: "2025-07-19 16:25:00",
    workingDay: "2025-07-19T10:55:00Z",
    token: shivaniToken,
    description: `<ul>
      <li>Performed integration and final QA for all dashboard backend APIs.</li>
      <li>Optimized queries, ensured error handling, and verified real-time updates via WebSocket.</li>
    </ul>`,
    consumedWorkDiscription: `<p>Completed backend integration testing, optimized queries, ensured error handling, and verified real-time WebSocket updates for the Admin Dashboard module.</p>`
  }
]








const AddComments = () => {
    const [tickets] = useState(initialTickets);
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

export default AddComments;
