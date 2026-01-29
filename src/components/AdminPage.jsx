import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { toast } from "react-toastify";

function AdminPage() {
  const navigate = useNavigate();
  const toastShown = useRef(false);

  useEffect(() => {
    if (toastShown.current) return;

    toast.success("Welcome Back Kishore👋 ");
    toastShown.current = true;
  }, []);

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
            Kishore (Admin)
          </div>
        </div>
        <div className="mx-[5%]">
          <div className="flex max-w-8xl mx-auto px-4 py-7 gap-6">
            {/* Left Sticky Filter */}
            <aside className="w-50 shrink-0">
              <div className="sticky top-5">
                <div className="bg-white  rounded-lg shadow-xl p-4">
                  <div className="my-7 text-center">
                    <h2 className="font-semibold">Home</h2>
                    <hr className="text-gray-200 my-4" />
                  </div>
                  <div className="my-7 text-center">
                    <h2 className="font-semibold">Approvals</h2>
                    <hr className="text-gray-200 my-4" />
                  </div>
                  <div className="my-7 text-center">
                    <h2 className="font-semibold">Access</h2>
                    <hr className="text-gray-200 my-4" />
                  </div>
                  <div className="my-7 text-center">
                    <h2 className="font-semibold">Users</h2>
                    <hr className="text-gray-200 my-4" />
                  </div>
                </div>
              </div>
            </aside>

            {/* Right Content */}
            <main className="flex-1 space-y-6">
              <div>
                <div className="flex items-center justify-center gap-7 my-7">
                  <div className="bg-gradient-to-r from-sky-400 via-blue-900 to-black text-white border border-gray-200 shadow-xl p-6 rounded-xl text-center w-70">
                    <div className="text-3xl font-semibold">Approvals</div>
                    <div className="text-xl font-semibold">10</div>
                  </div>
                  <div className=" bg-gradient-to-r from-sky-400 via-blue-900 to-black text-white border border-gray-200 shadow-xl p-6 rounded-xl text-center w-70">
                    <div className="text-3xl font-semibold">Active Users</div>
                    <div className="text-xl font-semibold">134</div>
                  </div>
                  <div className=" bg-gradient-to-r from-sky-400 via-blue-900 to-black text-white border border-gray-200 shadow-xl p-6 rounded-xl text-center w-70">
                    <div className="text-3xl font-semibold">Data Products</div>
                    <div className="text-xl font-semibold">67</div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-7 my-7">
                  <div className=" bg-gradient-to-r from-sky-400 via-blue-900 to-black text-white border border-gray-200 shadow-xl p-6 rounded-xl text-center w-70">
                    <div className="text-3xl font-semibold">Data Providers</div>
                    <div className="text-xl font-semibold">95</div>
                  </div>
                  <div className=" bg-gradient-to-r from-sky-400 via-blue-900 to-blackrwe text-white border border-gray-200 shadow-xl p-6 rounded-xl text-center w-70">
                    <div className="text-3xl font-semibold">Buyers</div>
                    <div className="text-xl font-semibold">199</div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminPage;
