import React, { useState } from 'react'

const BreadthSelector = () => {
    const [isBreadthSelected , setIsBreadthSelected ] = useState(false);

  return (
    <>
    <div className='flex-col flex justify-center items-center'>
        <div className='flex text-lg  gap-5 justify-start items-center border-b-2  border-gray-500 px-2 m-auto w-4/5 '>
            <button className='hover:text-blue-300 hover:underline  focus:underline focus:text-blue-500' onClick={(e)=> {e.preventDefault(); setIsBreadthSelected(true)}}>
            <h1> Breadth Selector</h1>
            </button>
            <button className='hover:text-blue-300 hover:underline  focus:underline focus:text-blue-500' onClick={(e)=>{
                e.preventDefault();
                setIsBreadthSelected(false);
                
            }} >
            <h1 > Perfomance </h1>

            </button>
        
            </div>
        {isBreadthSelected ? <div className= "breadth-selector w-full mx-20 ">
            <form className='my-5' style={{ margin: 'auto'}} >
            <select style={{width: '70vw', }} name="Choose your career Goal" id="balh" className='block p-2.5 mx-auto my-5 rounded-md w text-md  font-semibold text-black focus:outline-none focus:ring-0 focus:border-gray-200 border-b-2 border-blue-500'>
                {/* {//mapping the departments array to create options for the select tag} */}
                { DepartmentsArray.map((dept) => {
                    return <option value={dept}>{dept}</option>
                }
                )}
                
            </select>
            </form>
            </div> : <div className="performance w-full mx-20">
                <h1>Performance</h1>
                </div>
                }
        
    </div>
    </>
  )
}

export default BreadthSelector;

const DepartmentsArray = 
  [
    "ADVANCED TECHNOLOGY DEVELOPMENT CENTRE",
    "AEROSPACE ENGINEERING",
    "AGRICULTURAL AND FOOD ENGINEERING",
    "ARCHITECTURE AND REGIONAL PLANNING",
    "BIOTECHNOLOGY",
    "CENTRE FOR COMPUTATIONAL AND DATA SCIENCES",
    "CENTRE FOR EDUCATIONAL TECHNOLOGY",
    "CENTRE FOR OCEANS, RIVERS, ATMOSPHERE & LAND SCIENCES",
    "CENTRE FOR THEORETICAL STUDIES",
    "CHEMICAL ENGINEERING",
    "CHEMISTRY",
    "CIVIL ENGINEERING",
    "COMPUTER SCIENCE & ENGINEERING",
    "CRYOGENIC ENGINEERING CENTRE",
    "ELECTRICAL ENGINEERING",
    "ELECTRONICS & ELECTRICAL COMMUNICATION ENGG.",
    "G.S SANYAL SCHOOL OF TELECOMMUNICATIONS",
    "GEOLOGY & GEOPHYSICS",
    "HUMANITIES & SOCIAL SCIENCES",
    "INDUSTRIAL AND SYSTEMS ENGINEERING",
    "MATERIALS SCIENCE CENTRE",
    "MATHEMATICS",
    "MECHANICAL ENGINEERING",
    "METALLURGICAL & MATERIALS ENGINEERING",
    "MINING ENGINEERING",
    "OCEAN ENGINEERING AND NAVAL ARCHITECTURE",
    "PHYSICS",
    "RAJENDRA MISHRA SCHOOL OF ENGINEERING ENTREPRENEURSHIP",
    "RAJIV GANDHI SCHOOL OF INTELLECTUAL PROPERTY LAW",
    "RANBIR & CHITRA GUPTA SCHOOL OF INFRASTRUCTURE DESIGN & MANAGEMENT",
    "RUBBER TECHNOLOGY CENTRE",
    "RURAL DEVELOPMENT CENTRE",
    "SCHOOL OF BIOSCIENCES",
    "SCHOOL OF ENERGY SCIENCE AND ENGINEERING",
    "SCHOOL OF ENVIRONMENTAL SCIENCE AND ENGINEERING",
    "SCHOOL OF MEDICAL SCIENCE & TECHNOLOGY",
    "SCHOOL OF NANO SCIENCE AND TECHNOLOGY",
    "SCHOOL OF WATER RESOURCES",
    "SUBIR CHOWDHURY SCHOOL OF QUALITY AND ENGINEERING",
    "VINOD GUPTA SCHOOL OF MANAGEMENT"
  ];