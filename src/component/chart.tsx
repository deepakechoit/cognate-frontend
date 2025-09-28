"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface ChartProps {
  data: { name: string; score: number }[];
}

const DynamicBarChart: React.FC<ChartProps> = ({ data }) => {
  const barSizeRem = 2; // 2rem
  const barSizePx = barSizeRem * 16; // convert rem to px

  return (
    <div className="w-full h-[30rem] cursor-pointer">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} barSize={barSizePx} margin={{ top: 20, right: 30, left: 20, bottom: 8 * 10 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            textAnchor="end"
            interval={0}
            tickFormatter={(name) => (name.length > 10 ? name.slice(0, 10) + "…" : name)}
          />
          <YAxis domain={[0, 5]} label={{ value: "Score", angle: -90, position: "insideLeft" }} />
          <Tooltip />
          <Legend />
          <Bar dataKey="score" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DynamicBarChart;
