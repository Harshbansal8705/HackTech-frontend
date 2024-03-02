import React from 'react'
import "./styles.css";
import Profile from "../assets/profile.png";
import Navbar from './navbar';
import RecommendedBreadthCourses from './recommendedBreadth';
import BreadthSelector from './selector';
import { useSelector } from 'react-redux';

var user = {
    name: 'Harsh Bansal',
    email: "harshbansal8705@gmail.com",
    rollNo: "22CH10080",
    department: "Chemical Engineering",
    cg: "8.0",
    currentSem: 4,
}

function getAcademicYear() {
    const today = new Date();
    const month = today.getMonth() + 1; // Adding 1 because getMonth() returns zero-based month
    const year = today.getFullYear();

    // Define the start month of the academic year, e.g., August
    const startMonth = 8; // August

    // If the current month is less than the start month (August), then it's still the previous academic year
    if (month < startMonth) {
        return `${year - 1}-${year % 100}`; // e.g., 2023-2024
    } else {
        return `${year}-${(year + 1) % 100}`; // e.g., 2024-2025
    }
}
//  async function getUser (){
//     await fetch(process.env.REACT_APP_BACKEND_URL + "user", {
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json",
//             "Authorization": `Bearer ${localStorage.getItem("token")}`
//         }
//     }).then(res => res.json()).then(data => {
//         console.log(data);
//         if(data.error){
//             alert(data.error);
//         }else{
//             return data;
//         }
    
//     })
//  }
 

export default function Dashboard() {
   const  user = useSelector(state => state.auth.user);
   console.log(user)
    return (
        <>
        <Navbar />
        <main className='py-10 px-20'>
            {/* <div>
                <div className="academic-year">Academic Year: <span className='bg-slate-300 p-1'>{getAcademicYear()}</span></div>
            </div> */}
            <div className="cards flex justify-evenly">
                <div className="profile-details p-4 rounded-md">
                    <h1 className='font-bold text-xl ml-4'>Profile Details</h1>
                    <div className="flex align-items-center justify-content-center m-3 text-slate-800">
                        <img src={Profile} alt="Profile" className='bg-white rounded-full w-16 h-16 mr-4' />
                        <div>
                            <h2>{user.name}</h2>
                            <p>{user.rollNo}</p>
                            <p>{user.email}</p>
                        </div>
                    </div>
                </div>
                <div className="academic-details p-4 rounded-md">
                    <h1 className='font-bold text-xl ml-4'>Academic Details</h1>
                    <div className="flex m-3 text-slate-800 justify-evenly flex-col h-max">
                        <div className='my-2'>
                            <span className="tag department">{user.department}</span>
                        </div>
                        <div>
                            <span className="tag sem mr-10">Semester: {user.currentSem}</span>
                            <span className="tag cg">CGPA: {user.cg}</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <BreadthSelector />
        <RecommendedBreadthCourses />
        </>
    )
}
