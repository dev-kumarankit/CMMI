import React, { useState } from "react";
import axios from "axios";

const initialTasks = [
  { label: "Requirement Analysis", ticketId: "6957a4445e0304eaf54b00f3", hours: "" },
  { label: "Requirement Analysis Review", ticketId: "6957a4445e0304eaf54b00f5", hours: "" },
  { label: "Design", ticketId: "6957a4445e0304eaf54b00f7", hours: "" },
  { label: "Design Review", ticketId: "6957a4445e0304eaf54b00f9", hours: "" },
  { label: "Coding", ticketId: "6957a4445e0304eaf54b00fb", hours: "" },
  { label: "Coding Review", ticketId: "6957a4445e0304eaf54b00fd", hours: "" },
  { label: "Test Case", ticketId: "6957a4445e0304eaf54b00ff", hours: "" },
  { label: "Test Case Review", ticketId: "6957a4445e0304eaf54b0101", hours: "" },
  { label: "Testing", ticketId: "6957a4445e0304eaf54b0103", hours: "" },
    { label: "Requirement Analysis", ticketId: "6957a48f5e0304eaf54b010b", hours: "" },
  { label: "Requirement Analysis Review", ticketId: "6957a48f5e0304eaf54b010d", hours: "" },
  { label: "Design", ticketId: "6957a48f5e0304eaf54b010f", hours: "" },
  { label: "Design Review", ticketId: "6957a48f5e0304eaf54b0111", hours: "" },
  { label: "Coding", ticketId: "6957a48f5e0304eaf54b0113", hours: "" },
  { label: "Coding Review", ticketId: "6957a48f5e0304eaf54b0115", hours: "" },
  { label: "Test Case", ticketId: "6957a48f5e0304eaf54b0117", hours: "" },
  { label: "Test Case Review", ticketId: "6957a48f5e0304eaf54b0119", hours: "" },
  { label: "Testing", ticketId: "6957a48f5e0304eaf54b011b", hours: "" },
      { label: "Requirement Analysis", ticketId: "6957a4d75e0304eaf54b0124", hours: "" },
  { label: "Requirement Analysis Review", ticketId: "6957a4d75e0304eaf54b0126", hours: "" },
  { label: "Design", ticketId: "6957a4d75e0304eaf54b0128", hours: "" },
  { label: "Design Review", ticketId: "6957a4d75e0304eaf54b012a", hours: "" },
  { label: "Coding", ticketId: "6957a4d75e0304eaf54b012c", hours: "" },
  { label: "Coding Review", ticketId: "6957a4d75e0304eaf54b012e", hours: "" },
  { label: "Test Case", ticketId: "6957a4d75e0304eaf54b0130", hours: "" },
  { label: "Test Case Review", ticketId: "6957a4d75e0304eaf54b0132", hours: "" },
  { label: "Testing", ticketId: "6957a4d75e0304eaf54b0134", hours: "" },
        { label: "Requirement Analysis", ticketId: "6957a5565e0304eaf54b013e", hours: "" },
  { label: "Requirement Analysis Review", ticketId: "6957a5565e0304eaf54b0140", hours: "" },
  { label: "Design", ticketId: "6957a5565e0304eaf54b0142", hours: "" },
  { label: "Design Review", ticketId: "6957a5565e0304eaf54b0144", hours: "" },
  { label: "Coding", ticketId: "6957a5565e0304eaf54b0146", hours: "" },
  { label: "Coding Review", ticketId: "6957a5565e0304eaf54b0148", hours: "" },
  { label: "Test Case", ticketId: "6957a5565e0304eaf54b014a", hours: "" },
  { label: "Test Case Review", ticketId: "6957a5565e0304eaf54b014c", hours: "" },
  { label: "Testing", ticketId: "6957a5565e0304eaf54b014e", hours: "" }
];
// console.log(data1.map(({id,summary,...rest}) => ({id,summary})))
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
        updatedDate: "2025-07-01 15:40:23"
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
              {tasks.map((item, index) => (<>
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
               {item.label=="Requirement Analysis"&& <>-----------------------------------</>}</>
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
