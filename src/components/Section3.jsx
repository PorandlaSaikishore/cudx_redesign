import Button from "./Button"

function Section3(){
    return(<>
    <div className="mx-[5%] mt-[10%] mb-[10%]">
<div className="flex jus items-center gap-[10%]">
    <div className="w-1/2">
        <div className="text-4xl font-semibold text-[#0989b1]">Invest in the Future of Cooperative Data</div>
        <div className="mt-7">Be part of a credit-union-owned cooperative redefining how the industry collaborates. Your investment fuels growth, enhances data value, and expands the network effect.</div>
        <Button buttonText="View Propectus" onClick={() => {window.open("https://cudx.com/wp-content/uploads/2025/11/CUDX_PROSPECTUS_2025_v4-1.pdf","_blank")}}/>
        </div>
        <div>
            <div className="text-center bg-white rounded-lg shadow-2xl p-6 mx-auto">
                <div className="font-semibold">Own the Future of Credit Union Data</div>
                <div className="text-[14px]">CUDX is a cooperative built for – and owned by – credit unions and their partners.</div>
            </div>
            <Button buttonText="Learn More"  onClick={() =>
    document.getElementById("contactus").scrollIntoView({ behavior: "smooth" })
  }/>
        </div>
</div>
    </div>
    </>)
}

export default Section3;