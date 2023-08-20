import React from 'react';
import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area, Scatter, ScatterProps } from 'recharts';

export interface DataPoint {
  time: string;
  users: number;
}

interface AreaChartProps {
  data: DataPoint[];
  width: number;
  height: number;
}

const CustomTooltip: React.FC<any> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const dataPoint = payload[0].payload;
    const { time, users } = dataPoint;

    return (
      <div className="custom-tooltip bg-gray-200 rounded-md px-4 py-2">
        <p className="text-lg font-bold mb-2">{time}</p>
        <p className="text-sm">Users: {users}</p>
      </div>
    );
  }

  return null;
};

const renderBubble: React.FC<ScatterProps> = (props) => {
  const { cx, cy, r, fill } = props;

  return (
    <circle cx={cx} cy={cy} r={r} fill={fill} className="bubble" />
  );
};

const AreaChartComponent: React.FC<AreaChartProps> = ({ data, width, height }) => {
  return (
    <AreaChart width={width} height={height} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="time" />
      <YAxis />
      <Tooltip content={<CustomTooltip />} />
      <Area type="monotone" dataKey="users" stroke="#8884d8" fill="#8884d8" />
      <Scatter data={data} fill="#8884d8"  />
    </AreaChart>
  );
};

export default AreaChartComponent;
