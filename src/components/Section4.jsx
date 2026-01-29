import Button from "./Button";

function Section4(){
    return(<>
    <div className="bg-[#EDF2F7]">
        <div className="bg-[#EDF2F7] mx-[5%] p-6 items-center justify-center text-center pt-[5%] pb-[5%]">
        <div className="text-3xl font-semibold text-[#0989b1] mb-7">Trusted by Credit Unions Nationwide</div>
        <div>A growing network of credit unions and partners powering cooperative innovation through shared data and insights.</div>
<div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-5 mt-[4%]">
    <img src="https://cudx.com/wp-content/uploads/2025/10/icon-1.jpg" alt="" />
<img src="https://cudx.com/wp-content/uploads/2025/10/icon-2.png" alt="" />
<img src="https://cudx.com/wp-content/uploads/2025/10/Picture18.png" alt="" />
<img src="https://cudx.com/wp-content/uploads/2025/10/icon-4.jpg" alt="" />
<img src="https://cudx.com/wp-content/uploads/2025/10/icon-5.jpg" alt="" />
<img src="https://cudx.com/wp-content/uploads/2025/10/icon-6.jpg" alt="" />
<img src="https://cudx.com/wp-content/uploads/2025/10/Picture20-ezgif.com-gif-maker.webp" alt="" />
<img src="https://cudx.com/wp-content/uploads/2025/10/Picture21.png" alt="" />
<img src="https://cudx.com/wp-content/uploads/2025/10/Picture9.png" alt="" />
<img src="https://cudx.com/wp-content/uploads/2025/10/Picture10.png" alt="" />
<img src="https://cudx.com/wp-content/uploads/2025/10/Picture11.png" alt="" />
<img src="https://cudx.com/wp-content/uploads/2025/10/Picture12.jpg" alt="" />
<img src="https://cudx.com/wp-content/uploads/2025/10/Picture13.png" alt="" />
<img src="https://cudx.com/wp-content/uploads/2025/10/Picture14.png" alt="" />
<img src="https://cudx.com/wp-content/uploads/2025/10/Picture15.png" alt="" />
<img src="https://cudx.com/wp-content/uploads/2025/10/Picture16.png" alt="" />
<img src="https://cudx.com/wp-content/uploads/2025/10/Picture17.png" alt="" />
</div>
<div className="mt-7">
<Button buttonText="Contact Us" onClick={() =>
    document.getElementById("contactus").scrollIntoView({ behavior: "smooth" })}/>
</div>
</div>
    </div>
    </>)
}

export default Section4;