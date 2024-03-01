import react from "react";
import "../components/styles/landingpage.css"

import Navbar from "./LandingPageComponents/navbar";
import Description from "./LandingPageComponents/description";
import Buttons from "./LandingPageComponents/button";
import zIndex from "@mui/material/styles/zIndex";

const LandingPage = ()=>{

    return(
       <>
       {/* <h1>landingpage</h1> */}
       <Navbar/>
       <Description/>
       <Buttons/>
       
       {/* <h1 >hiiii</h1> */}
       
       
       </> 
    )
}

export default LandingPage;
