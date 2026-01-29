import { useNavigate } from "react-router-dom";

function Menu() {

    const navigate = useNavigate();
    return (<>
        <div class="flex gap-[30%] mx-[5%] mt-[1%] items-center">
            <div><img src="https://cudx.com/wp-content/uploads/2024/03/cropped-CUDX_WHT_Reflective-ezgif.com-png-to-webp-converter-1-e1711521683907.webp" alt="" width={150} height={150} onClick={() => navigate("/")} className="cursor-pointer" /></div>
            <div className="text-white font-semibold flex items-center justify-center gap-7">
                <div className="hover:text-[#0989b1] cursor-pointer" onClick={() => navigate("/about")}>About Us</div>
                <div className="hover:text-[#0989b1] cursor-pointer" onClick={() => navigate("/signup")}>Data Contributor</div>
                <div className="hover:text-[#0989b1] cursor-pointer" onClick={() => navigate("/acquire-data")}>Data Buyer</div>
                <div className="hover:text-[#0989b1] cursor-pointer" onClick={() => navigate("/newsroom_and_media")}>News & Media</div>
                <div className="hover:text-[#0989b1] cursor-pointer" onClick={() =>navigate("/", { state: { scrollTo: "contactus" } })}>Contact</div>
                <div className="hover:text-[#0989b1] cursor-pointer" onClick={() =>navigate("/Signin")}>Sign in</div>

            </div>
        </div>
    </>)
}

export default Menu;