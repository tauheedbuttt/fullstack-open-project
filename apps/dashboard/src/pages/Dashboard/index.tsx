import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { colors } from "@libs/shared";
import {
  DollarIcon,
  HouseIcon,
  OwnersIcon,
  RiderIcon,
  TrendIcon,
} from "../../assets";
import Card from "../../components/Card";
import StatCard from "../../components/StatCard";
import useBreadcrumb from "../../hooks/useBreadcrumb";
import React from "react";
import { routes } from "../../config/routeConfig";
import Table, { TableColumn } from "../../components/Table";

const Dashboard = () => {
  useBreadcrumb("Dashboard", "Welcome back! Here's what's happening in D-12.");

  const stats = [
    {
      key: "houses",
      title: "Total Houses",
      value: 486,
      subtitle: "+12 this month",
      subtitleClassName: "text-green-600",
      icon: <HouseIcon className="w-6 h-6 text-theme" />,
      to: routes.houses,
    },
    {
      key: "riders",
      title: "Total Riders",
      value: 24,
      subtitle: "2 active today",
      subtitleClassName: "text-green-600",
      icon: <RiderIcon className="w-6 h-6 text-theme" />,
      to: routes.riders,
    },
    {
      key: "owners",
      title: "Total Owners",
      value: 512,
      subtitle: "+8 this month",
      subtitleClassName: "text-green-600",
      icon: <OwnersIcon className="w-6 h-6 text-theme" />,
      to: routes.owners,
    },
    {
      key: "collected",
      title: "Collected (Oct 2025)",
      value: "PKR 2.4M",
      subtitle: "+15.3% vs last month",
      subtitleClassName: "text-green-600",
      icon: <DollarIcon className="w-6 h-6 text-theme" />,
      to: routes.payments,
    },
  ];

  const feeTrend = [
    { month: "Apr", amount: 45000 },
    { month: "May", amount: 52000 },
    { month: "Jun", amount: 48000 },
    { month: "Jul", amount: 61000 },
    { month: "Aug", amount: 55000 },
    { month: "Sep", amount: 67000 },
    { month: "Oct", amount: 58000 },
  ];

  const recentActivity = [
    {
      user: "Muhammad Bilal",
      house: "H-234",
      timeAgo: "2 hours ago",
    },
    {
      user: "Usman Ahmed",
      house: "H-156",
      timeAgo: "3 hours ago",
    },
    {
      user: "Imran Shah",
      house: "H-089",
      timeAgo: "5 hours ago",
    },
    {
      user: "Muhammad Bilal",
      house: "H-412",
      timeAgo: "6 hours ago",
    },
  ];

  const recentOwners = [
    { name: "Ayesha Khan", registeredAt: "Oct 8, 2025", house: "H-301" },
    { name: "Zain Ali", registeredAt: "Oct 3, 2025", house: "H-178" },
    { name: "Sara Ahmed", registeredAt: "Oct 5, 2025", house: "H-256" },
  ];

  const rows = [
    {
      houseId: "H-101",
      owner: "Ali Raza",
      amount: "PKR 5,000",
      status: "Pending",
    },
    {
      houseId: "H-202",
      owner: "Sara Khan",
      amount: "PKR 4,500",
      status: "Pending",
    },
    {
      houseId: "H-303",
      owner: "Omar Farooq",
      amount: "PKR 6,200",
      status: "Pending",
    },
    {
      houseId: "H-404",
      owner: "Nida Hussain",
      amount: "PKR 5,800",
      status: "Pending",
    },
  ];

  const columns: TableColumn<(typeof rows)[0]>[] = [
    { label: "HouseID", field: "houseId" },
    { label: "Owner", field: "owner" },
    { label: "Amount", field: "amount" },
    { label: "Status", field: "status" },
  ];

  return (
    <div className="flex flex-col gap-6">
      {/* Stat Cards */}
      <div className="flex gap-2">
        {stats.map((stat) => (
          <StatCard
            className="flex-1 p-6"
            {...stat}
            iconClassName="p-3 bg-primary/10 rounded-md"
          />
        ))}
      </div>

      {/* Monthly Fee Collection Trends */}
      <Card
        to={routes.reports}
        title={
          <div className="flex items-center gap-2">
            <TrendIcon className="text-theme" />
            <span>Monthly Fee Collection Trends</span>
          </div>
        }
      >
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={feeTrend}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="month" stroke={colors.textSecondary} />
            <YAxis stroke={colors.textSecondary} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#fff",
                border: "1px solid #e5e5e5",
                borderRadius: "8px",
              }}
            />
            <Bar dataKey="amount" fill={colors.primary} radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      <div className="flex gap-6">
        <Card
          to={routes.payments}
          className="flex-1"
          title={"Pending Payments"}
        >
          <Table columns={columns} rows={rows} />
        </Card>
        <Card
          to={routes.riders}
          className="flex-1 flex flex-col gap-2"
          title={"Recent Rider Activities"}
        >
          {recentActivity.map((item, index) => (
            <React.Fragment key={item.user}>
              <div key={item.user} className="flex items-start gap-4">
                {/* Icon */}
                <div className="p-2 bg-primary/10 rounded-md">
                  <RiderIcon className="w-4 h-4 text-theme" />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex flex-col">
                    <span>{item.user}</span>
                    <span className="text-secondary">
                      Collected payment from {item.house}
                    </span>
                  </div>
                  <span className="text-secondary text-sm">{item.timeAgo}</span>
                </div>
              </div>
              {index < recentActivity.length - 1 && (
                <hr className="separator !border-[0.1px]" />
              )}
            </React.Fragment>
          ))}
        </Card>
      </div>

      {/* Latest registered owners */}
      <Card to={routes.owners} title={"Latest Registered Owners"}>
        <div className="flex gap-3">
          {recentOwners.map((item) => (
            <div
              key={item.name}
              className="flex-1 flex flex-col justify-between p-5 bg-gray-50 rounded-md"
            >
              <span>{item.name}</span>
              <span className="text-secondary text-sm">{item.house}</span>
              <span className="text-secondary text-sm">
                {item.registeredAt}
              </span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;
