import Button from "../components/Button";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

function AcquireData() {
    const navigate = useNavigate();
    const section3Ref = useRef(null);
    return (<>
        <div className=" bg-[#a2845e]">
            <div class="relative h-150 w-full  overflow-hidden">
                <img
                    src="https://cudx.com/wp-content/uploads/2024/03/CUDX-Logo_transX_wht.webp"
                    className="absolute right-0 top-0 h-full w-auto opacity-10 object-cover pointer-events-none"
                    alt="Example Image"
                />


                <Menu />
                <div className="mt-[5%] mx-[10%] text-white text-6xl text-center">Access the Power of Cooperative Intelligence</div>

                <div className="mt-[2%] mx-[10%] text-white text-[24px] text-center">CUDX connects you to the richest, most trusted credit union data in the country – anonymized, aggregated, and ready to fuel your analytics, research, and innovation</div>
                <div className="mx-[10%] mt-[2%] items-center justify-center flex gap-7 mb-[1%]">

                    <Button buttonText="Request Access" content="hero" onClick={() =>
                        navigate("/", { state: { scrollTo: "contactus" } })


                    } />

                </div>
            </div>
        </div>
        <div className="mx-[5%] mt-[10%] mb-[10%]">
            <div className="flex jus items-center gap-[10%]">
                <div className="w-1/2">
                    <div className="text-4xl font-semibold text-[#0989b1]">Why Acquire Data from CUDX?</div>
                    <div className="mt-7">The Credit Union Data Exchange brings together anonymized transaction, member, and performance data from credit unions nationwide – enabling advanced insights that were never before possible.</div>
                    <Button buttonText="Explore Use Cases" onClick={() =>
                        section3Ref.current?.scrollIntoView({ behavior: "smooth" })
                    } />
                </div>
                <div>
                    <div className="text-center bg-white rounded-lg shadow-2xl p-6 mx-auto">
                        <div className="font-semibold">High-Value Data, Cooperative Ethos</div>
                        <div className="text-[14px]">Gain access to unique data while supporting the cooperative mission of credit unions.</div>
                    </div>
                </div>
            </div>
        </div>
        <div className=" bg-[#EDF2F7] py-[5%]">
            <div class="relative w-full  overflow-hidden">
                <img
                    src="https://cudx.com/wp-content/uploads/2024/03/CUDX-Logo_transX_wht.webp"
                    class="absolute right-0 top-0 h-full w-auto opacity-50 object-cover"
                    alt="Example Image"
                />
                <div className="mx-[5%] mt-[5%]  text-center">
                    <div className="text-4xl font-semibold text-[#0989b1] mt-[5%]">Who Uses CUDX Data?</div>
                    <div className="py-[2%]">Our data serves a diverse range of organizations seeking trustworthy financial insights.</div>
                </div>
                <div className="flex items-center justify-center gap-7 mt-3 mx-[5%]">
                    <div className="bg-white rounded-xl p-7 w-[450px] h-[170px]">
                        <div className="text-[#0989b1] text-[18px] font-semibold mb-5">Fintech Innovators</div>
                        <div className="text-[14px]">Identify market opportunities, refine targeting, and test new financial products.</div>
                    </div>
                    <div className="bg-white rounded-xl p-7 w-[450px] h-[170px]">
                        <div className="text-[#0989b1] text-[18px] font-semibold mb-5">Vendors & CUSOs</div>
                        <div className="text-[14px]">Benchmark products, measure adoption, and deliver insights back to your CU clients.</div>
                    </div>
                    <div className="bg-white rounded-xl p-7 w-[450px] h-[170px]">
                        <div className="text-[#0989b1] text-[18px] font-semibold mb-5">Researchers & Analysts</div>
                        <div className="text-[14px]">Access anonymized trend data to study consumer behavior, lending trends and CU economics.</div>
                    </div>
                </div>
            </div></div>
        <div className="mx-[5%] pb-[5%]" ref={section3Ref}>
            <div className="text-center">
                <div className="text-4xl font-semibold text-[#0989b1] mt-[5%]">Use Cases</div>
                <div className="mt-7">The use cases of the Exchange are almost endless. CUDX enables users access to data needed to power the use cases that matter most to them, such as…</div>
                <div className="flex items-center justify-center gap-7 mt-7">
                    <div className="bg-white rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.25)] p-6 w-[450px] h-[130px] ">
                        <div className="text-[#0989b1] text-[18px] font-semibold mb-5">More Accurate Predictive Models</div>
                        <div className="text-[14px]">Segmentation, purchase propensities, etc. powered by multi-institution data.</div>
                    </div>
                    <div className="bg-white rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.25)] p-6 w-[450px] h-[130px]">
                        <div className="text-[#0989b1] text-[18px] font-semibold mb-5">Conversational AI</div>
                        <div className="text-[14px]">Deploy agentic AI services on the entire CUDX data set to unlock industry-level insights.</div>
                    </div>
                    <div className="bg-white rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.25)] p-6 w-[450px] h-[130px]">
                        <div className="text-[#0989b1] text-[18px] font-semibold mb-5">Near Realtime Benchmarking</div>
                        <div className="text-[14px]">Use granular, drillable daily data rather than quarterly 5300 reports to inform analytics.</div>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-7 mt-7">
                    <div className="bg-white rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.25)] p-6 w-[450px] h-[130px]">
                        <div className="text-[#0989b1] text-[18px] font-semibold mb-5">Data Cleansing & Enhancement</div>
                        <div className="text-[14px]">Apply AI solutions to aggregated data to clean up or categorize messy data.</div>
                    </div>
                    <div className="bg-white rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.25)] p-6 w-[450px] h-[130px]">
                        <div className="text-[#0989b1] text-[18px] font-semibold mb-5">3rd Party Data Augmentation</div>
                        <div className="text-[14px]">Enhance data richness by joining with publicly available or commercially acquired data</div>
                    </div>

                </div>

            </div>
        </div>
        <div className=" bg-[#EDF2F7] py-[5%]">
            <div class="relative w-full  overflow-hidden">
                <img
                    src="https://cudx.com/wp-content/uploads/2024/03/CUDX-Logo_transX_wht.webp"
                    class="absolute right-0 top-0 h-full w-auto opacity-50 object-cover"
                    alt="Example Image"
                />
                <div className="mx-[5%] mt-[5%]  text-center">
                    <div className="text-4xl font-semibold text-[#0989b1] mt-[5%]">Ways to Access CUDX Data</div>
                    <div className="py-[2%]">We provide numerous ways to access CUDX data – tell us what works best</div>
                </div>
                <div className="flex items-center justify-center gap-7 mt-3 mx-[5%]">
                    <div className="bg-white rounded-xl p-7 w-[450px] h-[170px]">
                        <div className="text-[#0989b1] text-[18px] font-semibold mb-5">API Access</div>
                        <div className="text-[14px]">Realtime integrations for developers and fintechs.</div>
                    </div>
                    <div className="bg-white rounded-xl p-7 w-[450px] h-[170px]">
                        <div className="text-[#0989b1] text-[18px] font-semibold mb-5">Analytics Feeds</div>
                        <div className="text-[14px]">Periodic datasets for internal data science teams.</div>
                    </div>
                    <div className="bg-white rounded-xl p-7 w-[450px] h-[170px]">
                        <div className="text-[#0989b1] text-[18px] font-semibold mb-5">Insight Subscriptions</div>
                        <div className="text-[14px]">Aggregated datasets to efficiently power your strategic and operational reports</div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center gap-[20%] pt-[2%]">
                <div className="text-[#0989b1] text-[18px] font-semibold">Need a customized option? Click here to contact us!</div>
                <Button buttonText="Contact Us" onClick={() =>
                    navigate("/", { state: { scrollTo: "contactus" } })


                } />
            </div>
        </div>
        <div className=" bg-[#a2845e] text-center pt-[5%] text-white pb-[5%]">
            <div className="text-3xl font-semibold">
                Ready to Access the Credit Union Data Exchange?
            </div>
            <div className="text-[16px] pt-[2%]">Join the growing network of organizations using cooperative data to shape
                the future of financial services.</div>
            <Button buttonText="Request Access" content="hero" onClick={() =>
                    navigate("/", { state: { scrollTo: "contactus" } })


                }/>
        </div>
        <Footer />
    </>)
}

export default AcquireData;