import React from 'react'

const TableRow = ({ sem, sg, setSg }) => {
    return (
        <tr className='bg-slate-300'>
            <td className='text-center m-1 w-40'>{sem}</td>
            <td className='m-1'><input type="text" value={sg} className='bg-slate-300 pl-2 w-20' onChange={e => setSg(prev => {
                prev[sem - 1] = e.target.value;
                return [...prev];
            })} /></td>
        </tr>
    )
}

export default function PerformanceTable({ sg, setSg }) {
    return (
        <div className="performance-table">
            <table>
                <thead className='bg-slate-400'>
                    <tr>
                        <th className='p-2'>Semester</th>
                        <th>CG</th>
                    </tr>
                </thead>
                <tbody>
                    {sg.map((s, ind) => (<TableRow key={ind} sem={ind + 1} sg={s} setSg={setSg} />))}
                </tbody>
            </table>
        </div>
    )
}
