import Button from "../components/Button";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import { useNavigate } from "react-router-dom";

function ContributeData() {
     const navigate = useNavigate();
    return (<>
        <div className=" bg-[#a2845e]">
            <div class="relative h-150 w-full  overflow-hidden">
                <img
  src="https://cudx.com/wp-content/uploads/2024/03/CUDX-Logo_transX_wht.webp"
  className="absolute right-0 top-0 h-full w-auto opacity-10 object-cover pointer-events-none"
  alt="Example Image"
/>


                <Menu />
                <div className="mt-[5%] mx-[10%] text-white text-6xl text-center">Get Paid to Contribute Data – and Grow the Value of CUDX</div>

                <div className="mt-[2%] mx-[10%] text-white text-[24px] text-center">The Exchange will create great value for the Credit Union Movement – ALL of CUDX’s value is derived from credit unions’ willingness to contribute.</div>
                <div className="mx-[10%] mt-[2%] items-center justify-center flex gap-7 mb-[1%]">

                    <Button buttonText="Click to Join" content="hero" onClick={() =>
       navigate("/", { state: { scrollTo: "contactus" } })


      } />

                </div>
            </div>
        </div>
        <div >
            <div className="mx-[5%] ">
                <div className="text-center">
                    <div className="text-4xl font-semibold text-[#0989b1] mt-[5%]">Types of Data</div>
                    <div className="mt-7">CUDX will pay credit unions for successfully onboarding required data. Here are the CUDX data domains and the insights they unlock:</div>
                    <div className="flex items-center justify-center gap-7 mt-7">
                        <div className="bg-white rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.25)] p-6 w-[450px] h-[130px] hover:bg-[#0989b1] hover:text-white">
                            <div className="text-[#0989b1] text-[18px] font-semibold mb-5 hover:text-white">Member & Account Data</div>
                            <div className="text-[14px]">Demographics, relationships, and balances.</div>
                        </div>
                        <div className="bg-white rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.25)] p-6 w-[450px] h-[130px]">
                            <div className="text-[#0989b1] text-[18px] font-semibold mb-5">Lending & Deposits</div>
                            <div className="text-[14px]">Performance, yield, credit quality, and product mix.</div>
                        </div>
                        <div className="bg-white rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.25)] p-6 w-[450px] h-[130px]">
                            <div className="text-[#0989b1] text-[18px] font-semibold mb-5">Card & Payment Data</div>
                            <div className="text-[14px]">Transaction volumes, merchant trends, and spend patterns.</div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-7 mt-7">
                        <div className="bg-white rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.25)] p-6 w-[450px] h-[130px]">
                            <div className="text-[#0989b1] text-[18px] font-semibold mb-5">Digital Engagement</div>
                            <div className="text-[14px]">Online/mobile interactions, adoption, and retention.</div>
                        </div>
                        <div className="bg-white rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.25)] p-6 w-[450px] h-[130px]">
                            <div className="text-[#0989b1] text-[18px] font-semibold mb-5">Normalized & Secure</div>
                            <div className="text-[14px]">Standardized to CUDX taxonomy, secure, and governed by CUDX rules.</div>
                        </div>

                    </div>

                </div>
            </div>
            <div className="mt-[10%] pb-[10%]">
                <div class="relative w-full  overflow-hidden">
                    <img
                        src="https://cudx.com/wp-content/uploads/2024/03/CUDX-Logo_transX_wht.webp"
                        class="absolute right-0 top-0 h-full w-auto opacity-30 object-cover"
                        alt="Example Image"
                    />
                    <div className="mx-[5%] mt-[5%]  text-center">
                        <div className="text-4xl font-semibold text-[#0989b1] mt-[5%]">Get Paid to Play</div>
                        <div className="py-[2%]">CUDX is designed to return non-interest income to participating credit unions in exchange for the value their data creates.</div>
                    </div>
                    <div className="flex items-center justify-center gap-7 mt-3 mx-[5%]">
                        <div className="bg-white rounded-xl p-7 w-[450px] h-[170px]">
                            <div className="text-[#0989b1] text-[18px] font-semibold mb-5 hover:text-white">Path to Meaningful Non-Interest Income</div>
                            <div className="text-[14px]">At maturity, the majority of net sales to approved 3rd parties will be passed through to CUs</div>
                        </div>
                        <div className="bg-white rounded-xl p-7 w-[450px] h-[170px]">
                            <div className="text-[#0989b1] text-[18px] font-semibold mb-5">As CUDX Grows, So Will Your Income</div>
                            <div className="text-[14px]">As CUDX matures, more CU data will entice more buyers, driving sustainable YoY growth.</div>
                        </div>
                        <div className="bg-white rounded-xl p-7 w-[450px] h-[170px]">
                            <div className="text-[#0989b1] text-[18px] font-semibold mb-5">Invest to Own a Piece of CUDX</div>
                            <div className="text-[14px]">CUDX has shares available for CUs to have an ownership stake and inputs on governance.</div>
                        </div>
                    </div>
                </div></div>
            <div className=" pb-[2%]">
                <div>

                    <div className="mx-[5%] mt-[5%]  text-center">
                        <div className="text-4xl font-semibold text-[#0989b1] mt-[5%]">The CUDX Ecosystem</div>
                        <div className="py-[2%]">The Credit Union Data Exchange brings together data contributors (primarily credit unions) and approved data consumers in a way that is efficient, frictionless, and secure.</div>
                    </div>
                    <div >
                        <img className="mx-auto items-center justify-center" src="https://cudx.com/wp-content/uploads/2025/09/1920x1080-1-e1760969825328.png" alt="" />
                    </div>
                </div></div>
            <div className=" bg-[#a2845e] text-center pt-[5%] text-white pb-[5%]">
                <div className="text-3xl font-semibold">
                    Ready to Join the Credit Union Data Exchange?
                </div>
                <div className="text-[16px] pt-[2%]">Join the growing network of organizations using cooperative data to shape
                    the future of financial services.</div>
                <Button buttonText="Contact Us" content="hero" onClick={() =>
       navigate("/", { state: { scrollTo: "contactus" } }) }/>
            </div>
        </div>
        <Footer />
    </>)
}

export default ContributeData;