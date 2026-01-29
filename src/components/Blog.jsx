import Button from "./Button";
import Footer from "./Footer";
import Menu from "./Menu";
import { useLocation, useParams } from "react-router-dom";

function Blog() {
    const media = [
        {
            image: "https://cudx.com/wp-content/uploads/2024/03/iStock-1340003506-scaled-e1710744266323.webp",
            title: "Trellance Becomes First CUDX Customer, Providing 1-Year No Cost Access to First Credit Unions to Sign Up",
            date: "February 21, 2025",
            text: "The Credit Union Data Exchange (CUDX), a shared data platform developed and managed by credit unions, announced today that Trellance has become its first official partner. This partnership enables CUDX to offer participating credit unions free access to the platform for one year, funded by the revenue generated through Trellance’s data sharing agreement."
        },
        {
            image: "https://cudx.com/wp-content/uploads/2024/01/iStock-103332706_11-ezgif.com-png-to-webp-converter-1-scaled.webp",
            title: "Thinking Forward: Top 11 Things Industry Leaders Think Credit Unions Should Watch Out for in 2024",
            date: "January 25, 2024",
            text: "January—‘tis the season when credit unions take a deep breath, shake off the holidays, and focus on the new year. To help set the stage, we spoke to credit union leaders and industry experts…"
        },
        {
            image: "https://cudx.com/wp-content/uploads/2024/03/iStock-1155173935-scaled.webp",
            title: "CUDX Announces Governance Board",
            date: "August 22, 2023",
            text: "Trellance, a leading technology partner providing innovative analytics, cloud and talent solutions to credit unions, along with the Filene Research Institute, has completed all of the necessary steps to make the Credit Union Data Exchange (CUDX) a limited cooperative association."
        }
        
    ]
     const { slug } = useParams();
  const location = useLocation();

  // Parse query param
  const searchParams = new URLSearchParams(location.search);
  const data = searchParams.get("data");
  const item = data ? JSON.parse(decodeURIComponent(data)) : null;

    return (<>
        <div className=" bg-[#a2845e]">
            <div class="relative h-150 w-full  overflow-hidden">
                <img
                    src="https://cudx.com/wp-content/uploads/2024/03/CUDX-Logo_transX_wht.webp"
                    className="absolute right-0 top-0 h-full w-auto opacity-10 object-cover pointer-events-none"
                    alt="Example Image"
                />

                <Menu />
                <div className="mt-[5%] mx-[10%] text-white text-6xl text-center">{item?.title || slug}</div>

            </div>
        </div>
        <div className="flex  mx-[5%] gap-[5%]">
            <div className="w-[65%]">
                <div className="font-semibold text-2xl">{item?.title || slug}</div>
                <div className="font-semibold mt-8 mb-4">Trellance is partnering with CUDX to build a data pool of over 4 million credit union members, providing valuable insights to credit unions </div>
                <div className="my-4"><span className="font-semibold">Tampa, FL – February 21, 2025 –</span> The Credit Union Data Exchange (CUDX), a shared data platform developed and managed by credit unions, announced today that Trellance has become its first official partner. This partnership enables CUDX to offer participating credit unions free access to the platform for one year, funded by the revenue generated through Trellance’s data sharing agreement.</div>
                <div className="my-4">The CUDX platform will provide participants with access to a shared data pool containing anonymized data from over 4 million credit union members nationwide. With this resource, credit unions can conduct predictive modeling, build targeted marketing strategies, benchmark against industry peers, analyze markets for expansion and target bank customers to grow membership.</div>
                <div className="my-4">Several credit unions have already joined CUDX and contributed their data, including some of the largest credit unions across the country from states such as Florida, Michigan, Virginia, Ohio, Oregon, Pennsylvania, Wyoming and California.</div>
                <div className="my-4">By fostering a collaborative data-sharing environment, CUDX empowers credit unions to harness secure and insightful analytics. This cooperative approach strengthens the credit union movement by enabling better decision-making in marketing, risk management and member engagement, ultimately leading to increased membership and enhanced member satisfaction.</div>
                <div className="my-4">“We want to help move the needle not just for individual credit unions but for the credit union movement as a whole,” said Douglas Vanderpool, Executive Director at CUDX. “By partnering with CUDX, credit unions gain access to a valuable data set that enhances their ability to compete with banks. Thanks to our partnership with Trellance, the first early adopting credit unions will receive access to this data set free of charge for one year. All they need to do is join and share their data.”</div>
                <div className="my-4">“This is a crucial step for not just CUDX’s growth, but for the continued growth and development of the credit union industry as a whole,” said April Clobes, CEO of Michigan State University Federal Credit Union and Chair of CUDX. “We’re excited to pull the data analytics readiness lever and bring this scaling opportunity to credit unions; it’s going to be a game changer for the industry, and a big leap forward in better understanding members’ behaviors and preferences,” said Mark Meyer, President & CEO of Filene Research Institute and President of CUDX.</div>
                <div className="my-4">As part of this partnership, Trellance will have the ability to market to credit unions participating in CUDX. Additionally, Trellance will receive read-only access to data within the CUDX platform but will not have the ability to manipulate or sell CUDX data. Their access will be limited to leveraging insights in the context of working directly with individual credit unions contributing to the platform.</div>
                <div className="my-4">“This partnership with CUDX benefits both Trellance and the credit union movement,” said Tom Davis, CEO & President of Trellance. “Trellance will be able to refine its marketing strategies for credit unions, while participating credit unions gain access to groundbreaking industry data. Our goal is to support the credit union industry in every way possible, and collaborating with CUDX is a powerful step toward fulfilling that mission.”</div>
                <div className="my-4">Credit unions interested in securing one year of no cost access to the CUDX platform should visit the CUDX website or visit us at booth #339 at GAC. Credit unions that have already signed a Letter of Intent (LOI) with CUDX will be given priority for eligibility but must formally express interest.</div>
                <div className="my-4 font-semibold">About the Credit Union Data Exchange (CUDX)</div>
                <div className="my-4">The Credit Union Data Exchange (CUDX), developed and managed by credit unions through a cooperative model, allows credit unions to share and access a wide pool of data, giving them the ability to make data driven decisions in every area of the business. With a focus on data security and regulatory compliance, CUDX is a safe way for credit unions to collaborate with one another to anticipate and react appropriately to challenges affecting the credit union industry.</div>
                <div className="my-4 font-semibold">About Trellance Cooperative Holdings, Inc.</div>
                <div className="my-4">Trellance Cooperative Holdings, Inc. is a credit union cooperative and leading technology partner for credit unions. Its companies – consisting of Rise Analytics, ProBridge and Optiri – provide innovative technology solutions for credit unions to increase efficiency, manage risk and improve the member experience. Trellance’s mission is to make sure credit unions have access to the tools and resources they need to grow, enhance member value and remain competitive in a rapidly evolving financial landscape. Learn more at Trellance.com.</div>
                <div className="text-center my-4">
                    <div className="font-semibold">Media Inquiries</div>
                    <div>Maren Bradley</div>
                    <div>Manager of Marketing Communications</div>
                    <div>mbradley@trellance.com</div>
                </div>
            </div>
            <div className="w-[35%] mx-auto">
  <div className="font-semibold text-2xl mb-4 text-center">Recent Posts</div>

  <div className="bg-[#EDF2F7] flex flex-col items-center gap-6 p-4">
    {media.map((item, index) => (
      <div
        key={index}
        className="bg-white rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.25)] w-full flex flex-col  p-4"
      >
        <img src={item.image} alt="" className="rounded-t-xl w-full object-cover mb-2 p-0"/>
        <div className="text-[18px] font-semibold my-2">{item.title}</div>
        <div className="text-[14px]">{item.date}</div>
        <div className="text-[14px] my-2 line-clamp-3">{item.text}</div>
        <div
          className="bg-black text-white border border-black rounded-xl text-center w-40 p-2 cursor-pointer hover:bg-white hover:text-black"
          onClick={() => window.open(`${window.location.origin}/newsroom_and_media/trellane`, "_blank")}
        >
          Read More
        </div>
      </div>
    ))}
  </div>
</div>

        </div>
        <div className="mt-7">
            <Footer />
        </div>
    </>)
}

export default Blog;