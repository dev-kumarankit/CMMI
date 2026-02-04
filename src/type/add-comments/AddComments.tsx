import { useState } from "react";
import axios from "axios";


// Design Review - milestone 1

const ankitToken="4Qw8CbN6g4yXq8Tvz5cam2hQ4+w8bcxtzd6urPhTQXmxNjwhtS1muNIkkQNaUxbJfB+OtEda2UVH/g0dSI9GgP4Ko2qYTFEBw1+i/gzrq7AEisUsyHVkAV1mIldJ5AHqtjj/ojjrlI8JuipQ8O2ZOYqR5Ix92yqvIPIepimwiiqHhkDZ9N+j78bgNVKNM+8VLoPU0vzuA33GbXFpnh/XxywXj6ZNPelQCaufm2My/RK/NR9knJxOHKxckKnOXFuWFmAGpedI0LIun2dInes/oiFcp2NkW7s31Ds+AYKyUntl9zLcI07Ad9AnTapNDrsF/RRBxmxknwhsqUFlTR2vgQFfasHlT7DS8ObGwmnWx9XgrrsDnQy6eajrZWR4EL5hUL2lgcZR0eYy+PCCw6n8vpVSbmRK57LLJe/zKG5HDeQMcjrkd+fwAjI/p7+0cpYVd0oqhoNMn5GsxUKHFxJAHLRkN4XyOD9v4qdhtsgTAzrJ4KfxxLcXBTJvv6Hbc87nGGlKcdmsTbIuR08N0S7uXg=="
const ramToken="4Qw8CbN6g4yXq8Tvz5cam2hQ4+w8bcxtzd6urPhTQXmxNjwhtS1muNIkkQNaUxbJyIFUP38CPyowEVxrGyj0CxCLHL6oYQCdJxLWPSVBA27GJhiR9so7IubqXLIPO3w43JVPSmxEtGwDDZlsNpKRELw0Eu66ImxjbFzRkr9nvtPZEGWV2wjdz1jq6/HIQO6VpqD1hyhgU+oHQMvzZicyxKihFgMb8xR1Nn9ZzDmHEn2RQC6LAiQ24llb0TtzhkTK72+hfH3AWz+vmDn1REN4tsbU+vYjfkSCVUkLNFRZzXowq/lJpgAfGkA0EYEpysMT9jnUYKx5DTXWtFAXLLQtRbrR862E4JXUIwxQyaPHtHDjSdCU63iw8vL1ylIqpxYN4PLuDRMxM8MAiSlOqg1d4xNWMqGaScMhdGIzUqnPivSrNYBJ/oeY+dVg+JpctyThECq71lXTfa5bDgsyIeTFmm/b6bIKAQNTPoj1GmbsHXiJhqtKISWn5Skxjfkk03oLGF5dktXQcbrNbVlN1DKqA7HxN/n+zv1eqClG3XahGi8="
const shivaniToken="4Qw8CbN6g4yXq8Tvz5cam2hQ4+w8bcxtzd6urPhTQXmxNjwhtS1muNIkkQNaUxbJ22bhN6/xHt5NLbhIoy82b4D+2OpDyUJ3+4En+aeUOxNHY+TN3JIvsxeM21gktUaSUzWsirGUh5PO7uKgkxGFBtEagsX6TdZQnvMauHdSJq8wZpZ104x5ZXowOd0PcjSB3XNQ3Jvmq7YnZX8A0DBHO+yqfTLZ4oZv6M1jEUNMnqIEj6E3NWjQuyBDj4KKm08L/jaelK8STrRjJskcB129uPd1VLaWYQ3OgEeAAI2POPwPMACM8mPZO8GmUWrjVrG+XMsCWfShTRhF4SLU66KD898BpTeiVvd1h44fGSOQZbFst30J0Pxh7OMhovKdNQi0PlOZJykzGTgcwIzhXKKcY+FP8uiTXNX3iTccI/ONv/mE8Z0WOsD5fhDLWbuWoxy1mrVVYcT1lO6n9b3bZ9efYJ7bjztrwPzsl5Ac1JLZrfUDsF18ka04j1ATMwerXYegIGIA2J3CNyAhsxtLsIxtyTvR37HXLgA6gJdcs0zHMDk="
const akashToken="4Qw8CbN6g4yXq8Tvz5cam2hQ4+w8bcxtzd6urPhTQXmxNjwhtS1muNIkkQNaUxbJ45Huv6KuDD3xnY15xcZrT9wRWEgKM8Jurt6cqZ1cPn3a7trtOZZcVOCAIfSewxcm0VWXoEAQEB4HCT5+owPr0Bu1XrXpzpRuBRl93LoEMKK0FQSD8bBqZqqhanyhp1lRcjEp/FWz2Lko8FxCRLmrREMMw7/UiRBFt4MzsKtc97sYsb8UgAbaa1sPOTZyAmoXuMooN5sX9EidcCM3NqzjIlyy4jmgSuhtfOHhNGX7/H1miaExbOASECKiIJ3i12MYYQpOFsZ4HnDVqNrsb3t0EYKDCbch5rEOIL6Ot/Ra0zmCxhlXE+hqYzj48SVN+D1XN6D1T93bqTzAetl11nv3cdQzqG4K2l6Rb4YW1K5NUDFwdeevXWjm0rPr58IckvU2WmMrcdHTHrIAu/jV2C6O0suBOam5zafUcseeDhSYAoJGIZqae/lBkQqomeEDZehCmhLvaPEVgdYXQVETsVmzEQ=="
const ticketId="6922a77d5f3631ebb9780030"
const initialTickets =[
  /* ========================= FE – ANKIT ========================= */
  {
    ticketId: ticketId,
    token: ankitToken,
    consumedHours: "09:20",
    updatedDate: "2025-08-12 19:00:0",
    workingDay: "2025-08-12T04:30:00Z",
    description: `<ul>
      <li>Integrated Menu Upload main UI.</li>
      <li>Implemented Excel upload functionality.</li>
      <li>Added file validation for supported types and size limits.</li>
    </ul>`,
    consumedWorkDiscription: `<p>Developed the Menu Upload UI with Excel upload support, including client-side validation for file type and size.</p>`
  },
  {
    ticketId: ticketId,
    token: ankitToken,
    consumedHours: "09:30",
    updatedDate: "2025-08-13 19:00:0",
    workingDay: "2025-08-13T04:30:00Z",
    description: `<ul>
      <li>Connected Menu Upload UI with backend Upload API.</li>
      <li>Implemented upload progress indicator.</li>
      <li>Handled success and error states.</li>
    </ul>`,
    consumedWorkDiscription: `<p>Integrated frontend menu upload flow with backend APIs and added progress, success, and error handling.</p>`
  },

  /* ========================= FE – AKASH ========================= */
  {
    ticketId: ticketId,
    token: akashToken,
    consumedHours: "09:35",
    updatedDate: "2025-08-12 19:00:0",
    workingDay: "2025-08-12T04:30:00Z",
    description: `<ul>
      <li>Implemented Manual Menu Upload functionality.</li>
      <li>Built form-based menu entry UI.</li>
      <li>Added field-level validations.</li>
    </ul>`,
    consumedWorkDiscription: `<p>Created manual menu upload flow with structured form inputs and validation logic.</p>`
  },
  {
    ticketId: ticketId,
    token: akashToken,
    consumedHours: "09:40",
    updatedDate: "2025-08-13 19:00:0",
    workingDay: "2025-08-13T04:30:00Z",
    description: `<ul>
      <li>Added preview of uploaded menu data.</li>
      <li>Improved UX with inline errors and feedback.</li>
    </ul>`,
    consumedWorkDiscription: `<p>Implemented menu data preview after upload and enhanced UX with inline error and feedback handling.</p>`
  },

  /* ========================= BE – RAM ========================= */
  {
    ticketId: ticketId,
    token: ramToken,
    consumedHours: "09:00",
    updatedDate: "2025-08-12 19:00:0",
    workingDay: "2025-08-12T04:30:00Z",
    description: `<ul>
      <li>Built Upload Menu API in Node.js.</li>
      <li>Handled Excel file parsing.</li>
      <li>Validated menu data structure.</li>
    </ul>`,
    consumedWorkDiscription: `<p>Implemented backend Upload Menu API with Excel parsing and structural validation of menu data.</p>`
  },
  {
    ticketId: ticketId,
    token: ramToken,
    consumedHours: "09:30",
    updatedDate: "2025-08-13 19:00:0",
    workingDay: "2025-08-13T04:30:00Z",
    description: `<ul>
      <li>Inserted parsed menu data into PostgreSQL tables.</li>
      <li>Implemented transactional inserts with rollback on failure.</li>
    </ul>`,
    consumedWorkDiscription: `<p>Handled database insertion of uploaded menu data with transaction support and rollback on errors.</p>`
  },

  /* ========================= BE – SHIVANI ========================= */
  {
    ticketId: ticketId,
    token: shivaniToken,
    consumedHours: "09:40",
    updatedDate: "2025-08-12 19:00:0",
    workingDay: "2025-08-12T04:30:00Z",
    description: `<ul>
      <li>Implemented image upload handling for menu items (if provided).</li>
      <li>Added file validation middleware.</li>
    </ul>`,
    consumedWorkDiscription: `<p>Developed image upload handling and validation middleware for menu upload APIs.</p>`
  },
  {
    ticketId: ticketId,
    token: shivaniToken,
    consumedHours: "09:50",
    updatedDate: "2025-08-13 19:00:0",
    workingDay: "2025-08-13T04:30:00Z",
    description: `<ul>
      <li>Secured Menu Upload API with restaurant authentication.</li>
      <li>Added centralized error handling and logging.</li>
    </ul>`,
    consumedWorkDiscription: `<p>Secured menu upload APIs with auth checks and implemented robust error handling and logging.</p>`
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

export default AddComments;
