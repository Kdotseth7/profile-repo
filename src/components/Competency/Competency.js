import React from "react";
import { PieChart, Pie, Cell, Label } from 'recharts';

const Competency = ({competency, pieColor, startAngle, endAngle}) => {
    const data = [
        { name: '', value: 100 }
    ];

    return(
        <PieChart width={200} height={200}>
            <Pie
                data={data}
                cx={100}
                cy={100}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={60}
                outerRadius={70}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
            >
                <Label className='f5' value={competency} position="center" />
                <Cell fill={pieColor} />
            </Pie>
        </PieChart>
    );
};

export default Competency;