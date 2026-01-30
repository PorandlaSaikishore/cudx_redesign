import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import HeroSection from './components/HeroSection'
import AboutUs from "./pages/AboutUs";
import ContributeData from "./pages/ContributeData";
import AcquireData from "./pages/AcquireData";
import NewsMedia from "./pages/NewsMedia";
import Blog from "./components/Blog";
import DataBuyer from "./pages/DataBuyer";
import DataContributor from "./pages/DataContributor";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import AdminPage from "./components/AdminPage";



function App() {
  

  return (
    <>
     
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about" element={<AboutUs />} />
         {/* <Route path="/contribute-data" element={<ContributeData />} /> */}
         {/* <Route path="/acquire-data" element={<AcquireData />} /> */}
          <Route path="/contribute-data" element={<DataContributor />} />
         <Route path="/acquire-data" element={<DataBuyer />} />
         <Route path="/newsroom_and_media" element={<NewsMedia />} />
         <Route path="/newsroom_and_media/:id" element={<Blog />} />
         <Route path="/signup" element={<Signup/>} />
          <Route path="/signin" element={<Signin/>} />
          <Route path="/adminPage" element={<AdminPage/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
