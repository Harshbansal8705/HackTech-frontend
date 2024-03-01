import react from "react";
import "../components/styles/landingpage.css"

import Navbar from "./LandingPageComponents/navbar";
import Description from "./LandingPageComponents/description";
import zIndex from "@mui/material/styles/zIndex";

const LandingPage = ()=>{

    return(
       <>
       {/* <h1>landingpage</h1> */}
       <Navbar/>
       <Description/>
       
       {/* <h1 >hiiii</h1> */}
       
       
       </> 
    )
}

export default LandingPage;
