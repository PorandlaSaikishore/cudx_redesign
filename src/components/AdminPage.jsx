import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSuitcase,
  faGrip,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCircleUser,
  faFileLines,
  faPaperPlane,
  faCalendar,
  faClock,
} from "@fortawesome/free-regular-svg-icons";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

function AdminPage() {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const navigate = useNavigate();
  

  const data = [
    {
      id: 1,
      name: "Adam Wright",
      company: "Trellance",
      role: "Executive Director",
      status: "New",
    },
    {
      id: 2,
      name: "Keerthi",
      company: "Trellance",
      role: "Director",
      status: "Meeting Set",
    },
    {
      id: 3,
      name: "Ganesh Kumar Morla",
      company: "Trellance",
      role: "CTO",
      status: "Sent",
    },
    {
      id: 4,
      name: "John Deo",
      company: "Tech Corp",
      role: "CTO",
      status: "Cold",
    },
  ];

   const chartData = {
    labels: ["New", "Meeting Set", "Emails Sent", "Cold"],
    datasets: [
      {
        label: "Pipeline Distribution",
        data: [1, 1, 1, 1], // example values
        backgroundColor: [
          "#155dfc", // blue
          "#10B981", // green
          "#9810fa", // yellow
          "#4a5565", // red
        ],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    
    responsive: true,
  maintainAspectRatio: false,
  cutout: "70%", // <--- controls the inner hole size

    plugins: {
      legend: {
        position: "bottom",
        labels: {
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        enabled: true,
      },
    },
  };




  return (
    <>
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <aside className="w-64 bg-white text-black border-r border-r-gray-200">
          <div className="p-4">
            <div className="flex justify-center items-center gap-2">
              <div className="bg-blue-600 text-white p-2 rounded-xl">
                <FontAwesomeIcon icon={faSuitcase} className="text-2xl" />
              </div>
              <div>
                <div className="font-semibold text-xl">LeadFlow</div>
                <div className="text-gray-600 text-sm">Agent Workspace</div>
              </div>
            </div>
          </div>
          <hr className="text-gray-200 py-4" />

          <div className="p-4 h-[70%]">
            <div className="flex justify-center items-center gap-2 bg-blue-100 text-blue-600 p-2 rounded-xl my-2">
              <div>
                <FontAwesomeIcon icon={faGrip} />
              </div>
              <div>Dashboard</div>
            </div>
            <div className="flex justify-center items-center gap-2  text-gray-600 p-2 rounded-xl my-2">
              <div>
                <FontAwesomeIcon icon={faUserGroup} />
              </div>
              <div>Leads</div>
            </div>
            <div className="flex justify-center items-center gap-2  text-gray-600 p-2 rounded-xl my-2">
              <div>
                <FontAwesomeIcon icon={faFileLines} />
              </div>
              <div>Templates</div>
            </div>
          </div>
          <div className="mt-auto p-4 border-t border-gray-200">
            <div className="flex justify-center items-center gap-2">
              <div>
                {" "}
                <FontAwesomeIcon
                  icon={faCircleUser}
                  className="text-2xl text-gray-600"
                />
              </div>
              <div>
                {" "}
                <div className="font-semibold">Demo Agent</div>
                <div className="text-gray-600 text-sm">agent@example.com</div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 overflow-y-auto p-10">
          <div className="flex justify-center items-center gap-[60%]">
            <div>
              <div className="text-4xl font-bold">Dashboard</div>
              <div className="text-gray-600">
                Overview of your pipeline performance
              </div>
            </div>
            <div className="bg-blue-600 text-white flex justify-center items-center gap-7 py-2 px-4 rounded-xl font-semibold">
              <div>+</div>
              <div>Add Leads</div>
            </div>
          </div>
          <div className="mt-7">
            <div className="flex justify-center items-center gap-7">
              <div className="p-3 border border-gray-200 bg-white  rounded-xl hover:shadow">
                <div className="flex justify-center items-center gap-7 p-4">
                  <div>
                    <div className="text-gray-600 font-semibold">
                      Total Leads
                    </div>
                    <div className="font-bold text-2xl">4</div>
                  </div>
                  <div>
                    <div className="bg-blue-100 text-blue-600 p-2 rounded-xl">
                      <FontAwesomeIcon
                        icon={faUserGroup}
                        className="text-2xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-3 border border-gray-200 bg-white  rounded-xl hover:shadow">
                <div className="flex justify-center items-center gap-7 p-4">
                  <div>
                    <div className="text-gray-600 font-semibold">
                      Emails Sent
                    </div>
                    <div className="font-bold text-2xl">1</div>
                  </div>
                  <div>
                    <div className="bg-purple-100 text-purple-600 p-2 rounded-xl">
                      <FontAwesomeIcon
                        icon={faPaperPlane}
                        className="text-2xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-3 border border-gray-200 bg-white  rounded-xl hover:shadow">
                <div className="flex justify-center items-center gap-7 p-4">
                  <div>
                    <div className="text-gray-600 font-semibold">
                      Meetings Set
                    </div>
                    <div className="font-bold text-2xl">1</div>
                  </div>
                  <div>
                    <div className="bg-green-100 text-green-600 p-2 rounded-xl">
                      <FontAwesomeIcon icon={faCalendar} className="text-2xl" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-3 border border-gray-200 bg-white  rounded-xl hover:shadow">
                <div className="flex justify-center items-center gap-7 p-4">
                  <div>
                    <div className="text-gray-600 font-semibold">
                      Follow Ups
                    </div>
                    <div className="font-bold text-2xl">0</div>
                  </div>
                  <div>
                    <div className="bg-orange-100 text-orange-600 p-2 rounded-xl">
                      <FontAwesomeIcon icon={faClock} className="text-2xl" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-7">
            <div className="flex justify-center items-center gap-7">
              <div className="p-3 border border-gray-200 bg-white shadow rounded-xl">
                <div className="font-semibold text-xl py-2">Pipeline Distribution</div>
                <div className="w-75 h-75 mx-auto bg-white p-4 rounded-lg shadow-md">
  <Doughnut data={chartData} options={options} />
</div>
              </div>
              <div className="p-5 border border-gray-200 bg-white shadow rounded-xl">
                <div className="font-semibold text-xl py-2">Recent Leads</div>
                <table className="min-w-full text-sm border-none">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-2 text-left">Name</th>
                      <th className="px-4 py-2 text-left">Company</th>
                      <th className="px-4 py-2 text-left">Role</th>
                      <th className="px-4 py-2 text-left">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((row) => (
                      <tr key={row.id} className="hover:bg-gray-50">
                        <td className="px-4 py-4 font-bold">{row.name}</td>
                        <td className="px-4 py-4 text-gray-600">{row.company}</td>
                        <td className="px-4 py-4 text-gray-600">{row.role}</td>
                        {row.status.includes("New") && <td className="px-4 py-4"><div className="text-center text-blue-600 font-bold bg-blue-100 rounded-2xl px-4 py-1">{row.status}</div></td>}
                        {row.status.includes("Meeting Set") && <td className="px-4 py-4"><div className="text-center text-green-600 font-bold bg-green-100 rounded-2xl px-4 py-1">{row.status}</div></td>}
                        {row.status.includes("Sent") && <td className="px-4 py-4"><div className="text-center text-purple-600 font-bold bg-purple-100 rounded-2xl px-4 py-1">{row.status}</div></td>}
                        {row.status.includes("Cold") && <td className="px-4 py-4"><div className="text-center text-gray-600 font-bold bg-gray-100 rounded-2xl px-4 py-1">{row.status}</div></td>}
                        
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default AdminPage;
