import React from 'react'
import { Chart } from "react-google-charts"

export default function PerformanceChart({sg}) {
    const data = [
        ['Semester', 'SGPA'],
        ...sg.map((s, i) => [i + 1, Number(s)])
    ];
    return (
        <div className="performance-chart">
            <Chart
                width={'500px'}
                height={'300px'}
                chartType="LineChart"
                loader={<div>Loading Chart</div>}
                data={data}
                options={{
                    title: 'Performance Chart',
                    hAxis: { title: 'Semester' },
                    vAxis: { title: 'SGPA', viewWindow: { min: 0, max: 10 }},
                    legend: 'none',
                }}
                rootProps={{ 'data-testid': '1' }}
            />
        </div>
    )
}
