import { useNavigate } from "react-router-dom";

function DataBuyer() {
  const navigate = useNavigate();
  const data = [
    {
      title: "Bank Data | USA Coverage | 135M+ Records",
      subtitle:
        "The US Consumer Voter Behavior file contains voting information tied to an individual in the Consumer Database. The field available contains the political party affiliation.",
    },
    {
      title: "Bank Data | USA Coverage | 135M+ Records",
      subtitle:
        "The US Consumer Voter Behavior file contains voting information tied to an individual in the Consumer Database. The field available contains the political party affiliation.",
    },
    {
      title: "Bank Data | USA Coverage | 135M+ Records",
      subtitle:
        "The US Consumer Voter Behavior file contains voting information tied to an individual in the Consumer Database. The field available contains the political party affiliation.",
    },
    {
      title: "Bank Data | USA Coverage | 135M+ Records",
      subtitle:
        "The US Consumer Voter Behavior file contains voting information tied to an individual in the Consumer Database. The field available contains the political party affiliation.",
    },
    {
      title: "Bank Data | USA Coverage | 135M+ Records",
      subtitle:
        "The US Consumer Voter Behavior file contains voting information tied to an individual in the Consumer Database. The field available contains the political party affiliation.",
    },
    {
      title: "Bank Data | USA Coverage | 135M+ Records",
      subtitle:
        "The US Consumer Voter Behavior file contains voting information tied to an individual in the Consumer Database. The field available contains the political party affiliation.",
    },
    {
      title: "Bank Data | USA Coverage | 135M+ Records",
      subtitle:
        "The US Consumer Voter Behavior file contains voting information tied to an individual in the Consumer Database. The field available contains the political party affiliation.",
    },
    {
      title: "Bank Data | USA Coverage | 135M+ Records",
      subtitle:
        "The US Consumer Voter Behavior file contains voting information tied to an individual in the Consumer Database. The field available contains the political party affiliation.",
    },
    {
      title: "Bank Data | USA Coverage | 135M+ Records",
      subtitle:
        "The US Consumer Voter Behavior file contains voting information tied to an individual in the Consumer Database. The field available contains the political party affiliation.",
    },
    {
      title: "Bank Data | USA Coverage | 135M+ Records",
      subtitle:
        "The US Consumer Voter Behavior file contains voting information tied to an individual in the Consumer Database. The field available contains the political party affiliation.",
    },
  ];
  return (
    <>
      <div>
        <div className="flex justify-center items-center p-4 border border-gray-200 gap-[80%]">
          <div
            className="text-4xl text-blue-600 font-bold cursor-pointer"
            onClick={() => navigate("/")}
          >
            CUDX
          </div>
          <div className="border border-gray-200 font-bold p-2 rounded">
            Contact Us
          </div>
        </div>
        <div className="mx-[5%]">
          <div className="mt-7 w-[40%]">
            <div className="text-4xl font-bold">CUDX Data Products</div>
            <div className="text-gray-400 mt-2">
              Privacy-compliant, data-science-driven datasets powering
              marketing, advertising, lead generation, and identity
              verification.
            </div>
          </div>
          <hr className="text-gray-200 my-7" />
          <div className="flex max-w-7xl mx-auto px-4 gap-6">
            {/* Left Sticky Filter */}
            <aside className="w-100 shrink-0">
              <div className="sticky top-5">
                <div className="bg-white  rounded-lg p-4">
                  <h2 className="font-semibold">Filter By</h2>
                  <hr className="text-gray-200 my-4" />
                  <div className="space-y-3">
                    <div>Countries</div>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="accent-blue-600" />
                      United States (23 Results)
                    </label>
                    <hr className="text-gray-200 my-4" />
                    <div>Data Category</div>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="accent-blue-600" />
                      Member & Demographic Data (13 Results)
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="accent-blue-600" />
                      Account & Product Data (9 Results)
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="accent-blue-600" />
                      Transactional Data (8 Results)
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="accent-blue-600" />
                      Credit & Risk Data (8 Results)
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="accent-blue-600" />
                      United States (5 Results)
                    </label>
                  </div>
                </div>
              </div>
            </aside>

            {/* Right Content */}
            <main className="flex-1 space-y-6">
              {data.map((datas, index) => (
                <div className="border border-gray-200 rounded-xl p-4 cursor-pointer hover:border-blue-600">
                  <div className="text-2xl font-semibold mt-3 hover:text-blue-600">
                    {datas.title}
                  </div>
                  <div className="text-gray-400 mt-3">{datas.subtitle}</div>
                  <div className="border border-gray-200  mt-3 w-[15%] text-center rounded-xl">
                    United States
                  </div>
                </div>
              ))}
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

export default DataBuyer;
