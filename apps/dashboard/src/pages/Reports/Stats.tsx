import { TrendIcon } from "../../assets";
import Card from "../../components/Card";

const Stats = () => {
  const stats = [
    {
      title: "Total Revenue (2025)",
      value: "PKR 17.2M",
      change: "+12.5% from 2024",
    },
    {
      title: "Collection Rate",
      value: "94.2%",
      change: "+3.1% from last month",
    },
    { title: "Pending Amount", value: "PKR 145K", change: "29 houses overdue" },
  ];

  return (
    <div className="flex gap-4 ">
      {stats.map((item) => (
        <Card
          className="flex-1 border"
          title={item.title}
          key={item.title}
          rightTitleElement={<TrendIcon />}
        >
          <div className="flex flex-col gap-2">
            <span className="text-lg font-semibold">{item.value}</span>
            {item.change && (
              <span className="text-sm text-green-600">{item.change}</span>
            )}
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Stats;
