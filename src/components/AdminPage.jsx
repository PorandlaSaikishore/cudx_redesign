import { useNavigate } from "react-router-dom";
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

ChartJS.register(ArcElement, Tooltip, Legend);

function AdminPage() {
  const navigate = useNavigate();

  const data = [
    { id: 1, name: "Adam Wright", company: "Trellance", role: "Executive Director", status: "New" },
    { id: 2, name: "Keerthi", company: "Trellance", role: "Director", status: "Meeting Set" },
    { id: 3, name: "Ganesh Kumar Morla", company: "Trellance", role: "CTO", status: "Sent" },
    { id: 4, name: "John Deo", company: "Tech Corp", role: "CTO", status: "Cold" },
  ];

  const chartData = {
    labels: ["New", "Meeting Set", "Emails Sent", "Cold"],
    datasets: [
      {
        data: [1, 1, 1, 1],
        backgroundColor: ["#155dfc", "#10B981", "#9810fa", "#4a5565"],
        borderWidth: 0,
        spacing: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "75%",
    plugins: {
      legend: { position: "bottom" },
    },
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* SIDEBAR */}
      <aside className="hidden md:flex md:w-64 bg-white border-r border-gray-200 flex-col">
        {/* Logo */}
        <div className="p-4">
          <div className="flex items-center gap-3 justify-center">
            <div className="bg-blue-600 text-white p-2 rounded-xl">
              <FontAwesomeIcon icon={faSuitcase} className="text-xl" />
            </div>
            <div>
              <div className="font-semibold text-lg">LeadFlow</div>
              <div className="text-gray-500 text-sm">Agent Workspace</div>
            </div>
          </div>
        </div>

        <hr />

        {/* Menu */}
        <div className="p-4 space-y-2">
          <div className="flex items-center gap-3 bg-blue-100 text-blue-600 p-2 rounded-xl justify-center">
            <FontAwesomeIcon icon={faGrip} />
            <span>Dashboard</span>
          </div>

          <div className="flex items-center gap-3 text-gray-600 p-2 rounded-xl justify-center">
            <FontAwesomeIcon icon={faUserGroup} />
            <span>Leads</span>
          </div>

          <div className="flex items-center gap-3 text-gray-600 p-2 rounded-xl justify-center">
            <FontAwesomeIcon icon={faFileLines} />
            <span>Templates</span>
          </div>
        </div>

        {/* USER AT BOTTOM */}
        <div className="mt-auto p-4 border-t">
          <div className="flex items-center gap-3 justify-center">
            <FontAwesomeIcon
              icon={faCircleUser}
              className="text-2xl text-gray-500"
            />
            <div>
              <div className="font-semibold">Demo Agent</div>
              <div className="text-sm text-gray-500">agent@example.com</div>
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">Dashboard</h1>
            <p className="text-gray-600">
              Overview of your pipeline performance
            </p>
          </div>

          <button className="bg-blue-600 text-white px-4 py-2 rounded-xl font-semibold w-fit">
            + Add Leads
          </button>
        </div>

        {/* STATS */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: "Total Leads", value: 4, icon: faUserGroup, color: "blue" },
            { label: "Emails Sent", value: 1, icon: faPaperPlane, color: "purple" },
            { label: "Meetings Set", value: 1, icon: faCalendar, color: "green" },
            { label: "Follow Ups", value: 0, icon: faClock, color: "orange" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white border rounded-xl hover:shadow p-4 flex justify-between items-center"
            >
              <div>
                <div className="text-gray-500 font-semibold">{item.label}</div>
                <div className="text-2xl font-bold">{item.value}</div>
              </div>
              <div
                className={`bg-${item.color}-100 text-${item.color}-600 p-3 rounded-xl`}
              >
                <FontAwesomeIcon icon={item.icon} className="text-xl" />
              </div>
            </div>
          ))}
        </div>

        {/* CHART + TABLE */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Chart */}
          <div className="bg-white border rounded-xl shadow p-4">
            <div className="font-semibold text-lg mb-2">
              Pipeline Distribution
            </div>
            <div className="h-[260px] sm:h-[300px]">
              <Doughnut data={chartData} options={options} />
            </div>
          </div>

          {/* Table */}
          <div className="bg-white border rounded-xl shadow p-4 lg:col-span-2">
            <div className="font-semibold text-lg mb-2">Recent Leads</div>
            <div className="overflow-x-auto">
              <table className="min-w-[600px] text-sm">
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
                      <td className="px-4 py-3 font-semibold">{row.name}</td>
                      <td className="px-4 py-3 text-gray-600">{row.company}</td>
                      <td className="px-4 py-3 text-gray-600">{row.role}</td>
                      <td className="px-4 py-3">
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-gray-100 text-gray-600">
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AdminPage;
