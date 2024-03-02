import React from 'react'
import PerformanceTable from './PerformanceTable';
import PerformanceChart from './PerformanceChart';

export default function Performance() {

    const [sg, setSg] = React.useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

    return (
        <div className="performance flex justify-evenly m-10">
            <PerformanceTable sg={sg} setSg={setSg} />
            <PerformanceChart sg={sg} />
        </div>
    )
}
