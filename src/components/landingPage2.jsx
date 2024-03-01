import React from 'react';
import Navbar from './LandingPageComponents/navbar2';
import imagePath from './LandingPageComponents/disturbed_student.jpg';

const LandingPage2 = () => {
    return (
        <>
            <Navbar />



            <div className="description">

                <div className="title">Our Motive</div>
                <div className="para">The current breadth selection process at IIT Kharagpur is often chaotic and stressful
                    for students. The high demand for specific breadth courses, coupled with limited
                    availability, leads to a last-minute scramble during subject registration. Students
                    often face difficulty in choosing the right breadth based on various factors such as:
                    <ul>
                        <li> Academic performance</li>
                        <li> Career goals</li>
                        <li> Personal interests</li>
                        <li> Course difficulty</li>
                    </ul>
                    This can result in hasty decisions that may not be in the student's best academic or
                    career interests. So here our website to all solve this problem.
                </div>

                {/* <div className="pic"><img src={imagePath} alt="React Image" /></div> */}
            </div>



            <div className="login-register">
                <a href="/"> LOGIN / REGISTER</a>
            </div>


        </>

    );
}

export default LandingPage2;