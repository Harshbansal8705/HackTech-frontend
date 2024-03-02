import React, { useState } from 'react'
import Performance from './Performance';
import  {Recommend}  from '../recommender';
import RecommendedBreadthCourses from './recommendedBreadth';

const BreadthSelector = () => {
    const [isBreadthSelected, setIsBreadthSelected] = useState(false);
    const [selectedDepartment, setSelectedDepartment] = useState(false);
    const handleClick = (e) => {
        e.preventDefault();
        alert('preferences generated succesfully');
        setSelectedDepartment(true);
        // const array = Recommend('AE' ,'22CE10029' );
        // console.log(array);
    }
    return (
        <>
            <div className='flex-col flex justify-center items-center'>
                <div className='flex text-lg  gap-5 justify-start items-center border-b-2  border-gray-500 px-2 m-auto w-4/5 '>
                    <button className='hover:text-blue-300 hover:underline  focus:underline focus:text-blue-500' onClick={(e) => { e.preventDefault(); setIsBreadthSelected(true) }}>
                        <h1> Breadth Selector</h1>
                    </button>
                    <button className='hover:text-blue-300 hover:underline  focus:underline focus:text-blue-500' onClick={(e) => {
                        e.preventDefault();
                        setIsBreadthSelected(false);

                    }} >
                        <h1 > Perfomance </h1>

                    </button>

                </div>
                {isBreadthSelected ? <div className="breadth-selector w-full mx-20 flex flex-col items-center justify-center ">
                    <form className='my-5 flex justify-center flex-col items-center' style={{ margin: 'auto' }} >
                        <select style={{ width: '70vw', }} name="Choose your career Goal" id="balh" className='block p-2.5 mx-auto my-5 rounded-md w text-md  font-semibold text-black focus:outline-none focus:ring-0 focus:border-gray-200 border-b-2 border-blue-500'>
                            {/* {//mapping the departments array to create options for the select tag} */}
                            {DepartmentsArray.map((dept) => {
                                return <option value={dept.code}>{dept.name} {dept.code}</option>
                            })}
                        </select>
                    </form>
                        <button className='bg-blue-500 text-white p-2.5 rounded-md w-1/5 m-3 align-middle  ' onClick={handleClick}>Submit</button>
                </div> : <Performance />}
            {selectedDepartment ? <RecommendedBreadthCourses /> : null}
            </div>
        </>
    )
}

export default BreadthSelector;

const DepartmentsArray =
    [
        {
            "name": "AEROSPACE ENGINEERING",
            "code": "AE"
        },
        {
            "name": "AGRICULTURAL AND FOOD ENGINEERING",
            "code": "AG"
        },
        {
            "name": "ARCHITECTURE AND REGIONAL PLANNING",
            "code": "AR"
        },
        {
            "name": "BIOTECHNOLOGY",
            "code": "BT"
        },
        {
            "name": "CENTRE FOR COMPUTATIONAL AND DATA SCIENCES",
            "code": "DS"
        },
        {
            "name": "CENTRE FOR EDUCATIONAL TECHNOLOGY",
            "code": "CET"
        },
        {
            "name": "CENTRE FOR OCEANS, RIVERS, ATMOSPHERE & LAND SCIENCES",
            "code": "CORAL"
        },
        {
            "name": "CENTRE FOR THEORETICAL STUDIES",
            "code": "TS"
        },
        {
            "name": "CHEMICAL ENGINEERING",
            "code": "CH"
        },
        {
            "name": "CHEMISTRY",
            "code": "CY"
        },
        {
            "name": "CIVIL ENGINEERING",
            "code": "CE"
        },
        {
            "name": "COMPUTER SCIENCE & ENGINEERING",
            "code": "CS"
        },
        {
            "name": "CRYOGENIC ENGINEERING CENTRE",
            "code": "CEC"
        },
        {
            "name": "ELECTRICAL ENGINEERING",
            "code": "EE"
        },
        {
            "name": "ELECTRONICS & ELECTRICAL COMMUNICATION ENGG.",
            "code": "EC"
        },
        {
            "name": "GEOLOGY & GEOPHYSICS",
            "code": "GG"
        },
        {
            "name": "HUMANITIES & SOCIAL SCIENCES",
            "code": "HS"
        },
        {
            "name": "INDUSTRIAL AND SYSTEMS ENGINEERING",
            "code": "IM"
        },
        {
            "name": "MATERIALS SCIENCE CENTRE",
            "code": "MS"
        },
        {
            "name": "MATHEMATICS",
            "code": "MA"
        },
        {
            "name": "MECHANICAL ENGINEERING",
            "code": "ME"
        },
        {
            "name": "METALLURGICAL & MATERIALS ENGINEERING",
            "code": "MT"
        },
        {
            "name": "MINING ENGINEERING",
            "code": "MI"
        },
        {
            "name": "OCEAN ENGINEERING AND NAVAL ARCHITECTURE",
            "code": "NA"
        },
        {
            "name": "PHYSICS",
            "code": "PH"
        },
        {
            "name": "SCHOOL OF BIOSCIENCES",
            "code": "SB"
        },
        {
            "name" : 'OTHERS',
            "code" : ""
        }
    
    ];