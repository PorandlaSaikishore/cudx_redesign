import { useNavigate, useLocation } from "react-router-dom";
import { useRef, useEffect } from "react";

import Button from "./Button";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Contactus from "./Contactus";
import Footer from "./Footer";
import Menu from "./Menu";

function HeroSection() {
  const navigate = useNavigate();
  const section3Ref = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo === "contactus") {
      const el = document.getElementById("contactus");
      el?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

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
            Empowering the Credit Union Movement
          </div>
          <div className="mt-[1%] mx-[10%] text-white text-6xl text-center">
            Through Shared Data
          </div>
          <div className="mt-[2%] mx-[10%] text-white text-[24px] text-center">
            The Credit Union Data Exchange (CUDX) turns shared credit union data
            into collective intelligence, economic opportunity, and innovation
          </div>
          <div className="mx-[10%] mt-[2%] items-center justify-center flex gap-7 mb-[1%]">
            <Button
              buttonText="Contribute Data"
              content="hero"
              onClick={() => navigate("/contribute-data")}
            />
            <Button
              buttonText="Acquire Data"
              content="hero"
              onClick={() => navigate("/acquire-data")}
            />
            <Button
              buttonText="Invest in CUDX"
              content="hero"
              onClick={() =>
                section3Ref.current?.scrollIntoView({ behavior: "smooth" })
              }
            />
          </div>
        </div>
      </div>
      <Section1 />
      <Section2 />
      <div ref={section3Ref}>
        <Section3 />
      </div>

      <Section4 />
      <div id="contactus">
        <Contactus />
      </div>
      <Footer />
    </>
  );
}

export default HeroSection;
