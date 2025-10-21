import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Card from "../../components/Card";
import { colors } from "shared";

const RevenueChart = () => {
  const year = new Date().getFullYear();

  const revenueData = [
    { month: "Apr", revenue: 2300000, target: 2400000 },
    { month: "May", revenue: 2520000, target: 2400000 },
    { month: "Jun", revenue: 2180000, target: 2400000 },
    { month: "Jul", revenue: 2610000, target: 2400000 },
    { month: "Aug", revenue: 2450000, target: 2400000 },
    { month: "Sep", revenue: 2670000, target: 2400000 },
    { month: "Oct", revenue: 2400000, target: 2400000 },
  ];
  return (
    <Card title={`Revenue vs Target (${year})`} className="border">
      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={revenueData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="month" stroke="#888" />
          <YAxis stroke="#888" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#fff",
              border: "1px solid #e5e5e5",
              borderRadius: "8px",
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke={colors.primary}
            strokeWidth={2}
            name="Revenue"
          />
          <Line
            type="monotone"
            dataKey="target"
            stroke="#1A1A1A"
            strokeWidth={2}
            strokeDasharray="5 5"
            name="Target"
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default RevenueChart;
