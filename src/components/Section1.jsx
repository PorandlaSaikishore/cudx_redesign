import Button from "./Button";
import { useNavigate } from "react-router-dom";

function Section1() {
    const navigate = useNavigate();
    return (<>
        <div className="mx-[5%] mt-[10%] mb-[10%]">
            <div className="flex jus items-center gap-[10%]">
                <div className="w-1/2">
                    <div className="text-4xl font-semibold text-[#0989b1]">Contribute Data, Create Value</div>
                    <div className="mt-7">Credit unions that contribute data to CUDX gain access to powerful analytics, benchmarking, and shared insights while earning non-interest income from monetizing anonymized data.</div>
                    <Button buttonText="Learn The Benifits" onClick={() => navigate("/contribute-data")} />
                </div>
                <div>
                    <div className="text-center bg-white rounded-lg shadow-2xl p-6 mx-auto">
                        <div className="font-semibold">Data in -insights + Revenue Out</div>
                        <div className="text-[14px]">See how your data contributes to the cooperative value network</div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default Section1;