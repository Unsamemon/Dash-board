import React from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';

export interface DataItem {
  name: string;
  value: number;
}

interface DonutChartProps {
  width: number;
  height: number;
  data: DataItem[]
}

const DonutChart: React.FC<DonutChartProps> = ({ width, height,data }) => {
  

  const COLORS = ['#FF8042', '#0088FE', '#00C49F'];

  return (
    <div className="flex items-center justify-center">
      <PieChart width={width} height={height}>
        <Pie
          data={data}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          paddingAngle={5}
          startAngle={90}
          endAngle={450}
          isAnimationActive={false}
          labelLine={false}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend verticalAlign="bottom" height={36} />
      </PieChart>
    </div>
  );
};

export default DonutChart;
