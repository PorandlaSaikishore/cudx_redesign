import Footer from "../components/Footer";
import Menu from "../components/Menu";

function NewsMedia() {
  const media = [
    {
      image:
        "https://cudx.com/wp-content/uploads/2024/03/iStock-1340003506-scaled-e1710744266323.webp",
      title:
        "Trellance Becomes First CUDX Customer, Providing 1-Year No Cost Access to First Credit Unions to Sign Up",
      date: "February 21, 2025",
      text: "The Credit Union Data Exchange (CUDX), a shared data platform developed and managed by credit unions, announced today that Trellance has become its first official partner. This partnership enables CUDX to offer participating credit unions free access to the platform for one year, funded by the revenue generated through Trellance’s data sharing agreement.",
    },
    {
      image:
        "https://cudx.com/wp-content/uploads/2024/01/iStock-103332706_11-ezgif.com-png-to-webp-converter-1-scaled.webp",
      title:
        "Thinking Forward: Top 11 Things Industry Leaders Think Credit Unions Should Watch Out for in 2024",
      date: "January 25, 2024",
      text: "January—‘tis the season when credit unions take a deep breath, shake off the holidays, and focus on the new year. To help set the stage, we spoke to credit union leaders and industry experts…",
    },
    {
      image:
        "https://cudx.com/wp-content/uploads/2024/03/iStock-1155173935-scaled.webp",
      title: "CUDX Announces Governance Board",
      date: "August 22, 2023",
      text: "Trellance, a leading technology partner providing innovative analytics, cloud and talent solutions to credit unions, along with the Filene Research Institute, has completed all of the necessary steps to make the Credit Union Data Exchange (CUDX) a limited cooperative association.",
    },
    {
      image:
        "https://cudx.com/wp-content/uploads/2024/02/Building-Better-Data-Today-ezgif.com-jpg-to-webp-converter.webp",
      title: "Building Better Data Today",
      date: "July 14, 2023",
      text: "When it comes to data, quantity is almost as important as quality. It is through the massive amount of labeled data that platforms such as ChatGPT are possible. What could credit unions achieve if they had access to that much data?",
    },
  ];
  return (
    <>
      <div className=" bg-[#a2845e]">
        <div class="relative h-150 w-full  overflow-hidden">
          <img
            src="https://cudx.com/wp-content/uploads/2024/03/CUDX-Logo_transX_wht.webp"
            className="absolute right-0 top-0 h-full w-auto opacity-10 object-cover pointer-events-none"
            alt="Example Image"
          />

          <Menu />
          <div className="mt-[5%] mx-[10%] text-white text-6xl text-center">
            News & Media
          </div>
        </div>
      </div>
      <div className="mx-[5%] pb-[3%]">
        <div class="grid grid-cols-3 gap-4 mt-7">
          {media.map((item, index) => (
            <div key={index}>
              <div className="bg-white rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.25)] p-6   h-[650px]">
                <img src={item.image} alt="" />
                <div className="text-[18px] font-semibold my-2">
                  {item.title}
                </div>
                <div className="text-[14px]">{item.date}</div>
                <div className="text-[14px] my-2">{item.text}</div>
                <div
                  className="bg-black text-white border border-black rounded-xl text-center w-[40%] p-2 cursor-pointer hover:bg-white hover:text-black"
                  onClick={() => {
                    window.open(
                      `${window.location.origin}/newsroom_and_media/${media[0].title.toLowerCase().replace(/,/g, "").replace(/\s+/g, "-")}?data=${encodeURIComponent(JSON.stringify(item))}`,
                      "_blank",
                    );
                  }}
                >
                  Read More
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default NewsMedia;
