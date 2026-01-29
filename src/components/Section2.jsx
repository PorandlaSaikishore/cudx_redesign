import Button from "./Button";
import { useNavigate } from "react-router-dom";

function Section2() {
    const navigate = useNavigate();
    return (
        <>
            <div className=" bg-[#EDF2F7]">
                <div class="relative w-full  overflow-hidden">
                    <img
                        src="https://cudx.com/wp-content/uploads/2024/03/CUDX-Logo_transX_wht.webp"
                        class="absolute right-0 top-0 h-full w-auto opacity-50 object-cover"
                        alt="Example Image"
                    />
                    <div className="mx-[5%] mt-[10%] mb-[10%]">
                        <div className="flex jus items-center gap-[10%]">
                            <div className="w-1/2">
                                <div className="text-center bg-white rounded-lg shadow-2xl p-6 mx-auto">

                                    <div className="text-[14px]">Access the richest, most trusted cooperative data set in the credit union industry. Fintechs, vendors, and researchers can securely access aggregated insights for innovation and market discovery.</div>
                                </div>
                            </div>
                            <div className="w-1/2">
                                <div className="text-4xl font-semibold text-[#0989b1]">Access the Power of Cooperative Intelligence</div>
                                <div className="mt-7">Enable use cases tailored to your needs:</div>
                                <div className="mt-7 text-[14px]">Fintechs: Identify growth opportunities</div>
                                <div className="text-[14px]">Vendors: Benchmark performance</div>
                                <div className="text-[14px]">Researchers: Understand member behavior</div>
                                <Button buttonText="Explore Data Options" onClick={() => navigate("/acquire-data")}/>
                            </div>

                        </div>
                    </div>
                </div></div>
        </>
    )
}

export default Section2;