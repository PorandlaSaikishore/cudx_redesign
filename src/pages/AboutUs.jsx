import Footer from "../components/Footer";
import Menu from "../components/Menu"

function AboutUs() {
    return (<>
    <div>
        <div className=" bg-[#a2845e]">
            <div class="relative h-150 w-full  overflow-hidden">
                <img
                    src="https://cudx.com/wp-content/uploads/2024/03/CUDX-Logo_transX_wht.webp"
                    class="absolute right-0 top-0 h-full w-auto opacity-10 object-cover"
                    alt="Example Image"
                />
                <Menu />

                <div className="mt-[5%] mx-[10%] text-white text-6xl text-center">About Us</div>
                <div className="mt-[1%] mx-[10%] text-white text-2xl text-center">Learn More About CUDX</div>

            </div>
        </div>
        <div className="flex items-center justify-center mt-[5%] gap-7 mx-[5%]">
<div className="w-1/2 h-120"><img src="https://cudx.com/wp-content/uploads/2024/03/iStock-1340003506-scaled-e1710744266323.webp" class="w-full h-full object-cover" alt="" /></div>
<div className="w-1/2">
    <div className="text-3xl font-semibold mb-7">Bigger Data, Better Outcomes</div>
<div>The Credit Union Data Exchange (CUDX), owned and operated by credit unions through a cooperative model, allows credit unions to share and access a wide pool of data, giving them the ability to make data driven decisions in every area of the business. With a focus on data security and regulatory compliance, CUDX is a safe way for credit unions to collaborate with one another in order to anticipate and react appropriately to challenges affecting the credit union industry.</div>
</div>
        </div>
        <div className="flex items-center justify-center mt-[5%] gap-7 mx-[5%] mb-[5%]">
            <div className="w-1/2">
    <div className="text-3xl font-semibold mb-7">The CUDX Journey</div>
<div>CUDX was first announced in May of 2023. It experienced rapid growth from there, with the first council meetings being held only a few short months later. By early 2024, many credit unions had joined the mission, and CUDX was ready to begin showing the industry just what could be accomplished. CUDX completed a robust business strategy in the summer of 2025. The Exchange officially closed its Proof of Concept phase, entering the Operational Phase as of August 2025. </div>
</div>
<div className="w-1/2 h-120"><img src="https://cudx.com/wp-content/uploads/2024/03/iStock-618946910-edited-4.jpg" class="w-full h-full object-cover" alt="" /></div>

        </div>
        </div>
        <Footer />
    </>)
}

export default AboutUs;