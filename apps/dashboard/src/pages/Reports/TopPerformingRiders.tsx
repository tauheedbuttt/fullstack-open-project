import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Card from "../../components/Card";

const TopPerformingRiders = () => {
  const riderPerformance = [
    { name: "Muhammad Bilal", collected: 225000 },
    { name: "Wasim Abbas", collected: 240000 },
    { name: "Tariq Jamil", collected: 220000 },
    { name: "Imran Shah", collected: 210000 },
    { name: "Usman Ahmed", collected: 190000 },
  ];
  return (
    <Card title="Top Performing Riders" className="border flex-1">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={riderPerformance} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis type="number" stroke="#888" />
          <YAxis dataKey="name" type="category" stroke="#888" width={120} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#fff",
              border: "1px solid #e5e5e5",
              borderRadius: "8px",
            }}
          />
          <Bar dataKey="collected" fill="#FF8A00" radius={[0, 8, 8, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default TopPerformingRiders;
