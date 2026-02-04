import React, { useState } from "react";
import axios from "axios";

const initialTasks = [
  { label: "Requirement Analysis", ticketId: "", hours: "" },
  { label: "Requirement Analysis Review", ticketId: "", hours: "" },
  { label: "Design", ticketId: "", hours: "" },
  { label: "Design Review", ticketId: "", hours: "" },
  { label: "Coding", ticketId: "", hours: "" },
  { label: "Coding Review", ticketId: "", hours: "" },
  { label: "Test Case", ticketId: "", hours: "" },
  { label: "Test Case Review", ticketId: "", hours: "" },
  { label: "Testing", ticketId: "", hours: "" }
];

const SizeUpdate = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    index: number,
    field: "ticketId" | "hours",
    value: string
  ) => {
    const updated = [...tasks];

    if (field === "hours") {
      // 🔒 allow only digits
      updated[index][field] = value.replace(/[^0-9]/g, "");
    } else {
      updated[index][field] = value;
    }

    setTasks(updated);
  };

  const submitAll = async () => {
    setLoading(true);

    for (const item of tasks) {
      if (!item.ticketId || !item.hours) continue;

      const payload = {
        ticketId: item.ticketId,
        estimatedHours: item.hours,
        estimatedHoursQA: null,
        updatedDate: "2025-09-02 10:58:23"
      };
      const token="4Qw8CbN6g4yXq8Tvz5cam2hQ4+w8bcxtzd6urPhTQXmxNjwhtS1muNIkkQNaUxbJkjC0WaFWRnA5zVsKB9c/ai5Zjtv3sWqFGNrQvz/OQQnxSpA73750fLzWR1+NZMtqGk15Ck0o6o6+wLw7AfzgBoeu1PnIILJQ0Z1guriH+q4n4taGiAJ1QjQLWDTxUp+VFqrTcf14myI+QH3yNi3DAGGbBUqsRgXqEBJZZIPeR1HNzWngAAz4tvTTOwr1Ceaid35BmlsCmOsXbAj99y617968qsQVMatV46GosProe3MBjcuXh4c1kWeF5zSiKU0pfm1wM75EPgKYB92wD9Z0uPENmTQuj/zkfqCBZMZskytE+BKu8f+DJzcJyb18s0LFSe6ciS/hvtw5rzXK5q3h85SC+5+smn79hGGSlophV5+xY+04gLAlFfIg7Fg0jU10MvTjYPwhH2uwMkOvifa4Nj5ZsVH21Wyr5xjoyhJINccz5n/UV4RrbSpFvZ/1AfMVf2k2aiVwSJFhZO5wkbjFmZ7LAixkdiOmLuGhJua/cKk="
      try {
        await axios.put("http://seasiaprojectmgt.com/api/v1/Ticket/UpdateEstimatedHour", payload,{
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
    }
);

        // ⏳ 300ms delay between calls
        await new Promise((res) => setTimeout(res, 500));

      } catch (error: any) {
      
        alert(`Failed to submit Ticket ID: ${item.ticketId}`);
        setLoading(false);
        return;
      }
    }

    alert("All estimates submitted successfully 🎉");
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Task Estimation
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-4 py-3 text-gray-600 font-semibold">Task</th>
                <th className="text-left px-4 py-3 text-gray-600 font-semibold">Ticket ID</th>
                <th className="text-left px-4 py-3 text-gray-600 font-semibold">Estimated Hours</th>
              </tr>
            </thead>

            <tbody>
              {tasks.map((item, index) => (
                <tr key={item.label} className="border-t">
                  <td className="px-4 py-3 text-gray-700 font-medium">
                    {item.label}
                  </td>

                  <td className="px-4 py-3">
                    <input
                      type="text"
                      value={item.ticketId}
                      onChange={(e) =>
                        handleChange(index, "ticketId", e.target.value)
                      }
                      placeholder="Enter Ticket ID"
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />
                  </td>

                  <td className="px-4 py-3">
                    <input
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      value={item.hours}
                      onChange={(e) =>
                        handleChange(index, "hours", e.target.value)
                      }
                      placeholder="Enter hours"
                      className="w-32 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex justify-end">
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
          </button>
        </div>
      </div>
    </div>
  );
};

export default SizeUpdate;
