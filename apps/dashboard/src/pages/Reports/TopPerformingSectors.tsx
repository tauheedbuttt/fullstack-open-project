import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import Card from "../../components/Card";

const TopPerformingSectors = () => {
  const sectorsData = [
    { name: "D-12/1", value: 450000, houses: 90 },
    { name: "D-12/2", value: 420000, houses: 84 },
    { name: "D-12/3", value: 380000, houses: 76 },
    { name: "D-12/4", value: 360000, houses: 72 },
  ];

  return (
    <Card title="Top Performing Sectors" className="border flex-1">
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={sectorsData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) =>
              `${name} ${(Number(percent) * 100).toFixed(0)}%`
            }
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {sectorsData.map((entry, index) => (
              <Cell key={`cell-${index}`} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: "#fff",
              border: "1px solid #e5e5e5",
              borderRadius: "8px",
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default TopPerformingSectors;
