import DataDictionaryTable from "./DataDictionaryTable";
import { useState } from "react";
import Modal from "../components/Modal";
import { useNavigate } from "react-router-dom";

function DataContributor() {
    const [data, setData] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [creditUnion, setCreditUnion] = useState(true);
    const [riseAnalytics, setRiseAnalytics] = useState(true);
    const navigate = useNavigate();

    return (<>
        <div>
            <div className="flex justify-center items-center p-4 border border-gray-200 gap-[80%]">
                <div className="text-4xl text-blue-600 font-bold cursor-pointer" onClick={() => navigate("/")}>CUDX</div>
                <div className="border border-gray-200 font-bold p-2 rounded">Contact Us</div>
            </div>
            <div className="mx-[5%]">
                <div className="mt-7 w-[40%]">
                    <div className="text-4xl font-bold">Contribute Data</div>
                    <div className="text-gray-400 mt-2">All data is contributed by verified partners and collected in accordance with applicable privacy, security, and regulatory requirements.</div>
                </div>
                <div className="text-3xl font-semibold mt-7">What type of <span className="text-blue-900">Data</span> you Contribute?</div>
                <div className="flex justify-center items-center gap-[20%] mt-7">
                    <div className={data === 0 ? "border-b border-b-blue-900 text-2xl text-blue-900 font-semibold" : "border-b border-b-gray-200 text-2xl font-semibold cursor-pointer"} onClick={() => setData(0)}>Account</div>
                    <div className={data === 1 ? "border-b border-b-blue-900 text-2xl text-blue-900 font-semibold" : "border-b border-b-gray-200 text-2xl font-semibold cursor-pointer"} onClick={() => setData(1)}>Member</div>
                    <div className={data === 2 ? "border-b border-b-blue-900 text-2xl text-blue-900 font-semibold" : "border-b border-b-gray-200 text-2xl font-semibold cursor-pointer"} onClick={() => setData(2)}>Channel</div>
                    <div className={data === 3 ? "border-b border-b-blue-900 text-2xl text-blue-900 font-semibold" : "border-b border-b-gray-200 text-2xl font-semibold cursor-pointer"} onClick={() => setIsModalOpen(true)}>Other</div>
                </div>
                <DataDictionaryTable dataType={data} />
                <Modal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    title="Member Data Dictionary"
                >
                    <div className="overflow-x-auto">
                        <div className="flex justify-center items-center gap-7">
                            <div className="font-semibold">Are you a credit Union?</div>
                            <div className="flex justify-center items-center gap-7">
                                <div className="flex justify-center items-center gap-2">
                                    <label>Yes</label>
                                    <input type="checkbox" className="accent-blue-600" onClick={() => setCreditUnion(true)} checked={creditUnion} />
                                </div>
                                <div className="flex justify-center items-center gap-2">
                                    <label>No</label>
                                    <input type="checkbox" className="accent-blue-600" onClick={() => setCreditUnion(false)} checked={!creditUnion} />
                                </div>
                            </div>
                        </div>
                        {!creditUnion && <div>
                            <div>
                                <div className="font-semibold">What data do you provide?</div>
                            <div className="flex justify-center items-center gap-2"><input type="text"  className="border border-gray-200  "/></div>
                            </div>
                            
                        <div className="flex justify-center items-center">Please <div className="cursor-pointer bg-blue-900 border border-blue-900 rounded-xl p-1 mx-2 my-4 text-white">ContactUs</div> for more information.</div>
                        
                        </div>}
                        {creditUnion && <div className="flex justify-center items-center gap-7 my-7">
                            <div className="font-semibold">Are you Rise Analytics Client?</div>
                            <div className="flex justify-center items-center gap-7">
                                <div className="flex justify-center items-center gap-2">
                                    <label>Yes</label>
                                    <input type="checkbox" className="accent-blue-600" onClick={() => setRiseAnalytics(true)} checked={riseAnalytics} />
                                </div>
                                <div className="flex justify-center items-center gap-2">
                                    <label>No</label>
                                    <input type="checkbox" className="accent-blue-600" onClick={() => setRiseAnalytics(false)} checked={!riseAnalytics} />
                                </div>
                            </div>
                        </div>}
                        {!riseAnalytics && <div className="flex justify-center items-center gap-7 my-7">
                            <div className="font-semibold">Are you one of these core?</div>
                            <div className="flex justify-center items-center gap-7">
                                <div className="flex justify-center items-center gap-2">
                                    <label>DNA</label>
                                    <input type="checkbox" className="accent-blue-600" />
                                </div>
                                <div className="flex justify-center items-center gap-2">
                                    <label>Episys</label>
                                    <input type="checkbox" className="accent-blue-600" />
                                </div>
                                <div className="flex justify-center items-center gap-2">
                                    <label>Keystone</label>
                                    <input type="checkbox" className="accent-blue-600" />
                                </div>
                            </div>
                        </div>}
                    </div>

                </Modal>
            </div>

        </div>

    </>)
}

export default DataContributor;

