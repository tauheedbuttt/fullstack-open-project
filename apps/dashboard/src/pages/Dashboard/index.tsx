import useBreadcrumb from "../../hooks/useBreadcrumb";

const Dashboard = () => {
  useBreadcrumb("Dashboard", "Welcome back! Here's what's happening in D-12.");
  return <div>Dashboard</div>;
};

export default Dashboard;
