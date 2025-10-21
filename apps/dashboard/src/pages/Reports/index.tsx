import useBreadcrumb from "../../hooks/useBreadcrumb";
import GenerateReport from "./GenerateReport";
import RevenueChart from "./RevenueChart";
import Stats from "./Stats";
import TopPerformingRiders from "./TopPerformingRiders";
import TopPerformingSectors from "./TopPerformingSectors";

const Reports = () => {
  useBreadcrumb(
    "Reports & Analytics",
    "Generate and analyze financial reports."
  );
  return (
    <div className="flex flex-col gap-6">
      <GenerateReport />
      <Stats />
      <RevenueChart />
      {/* Riders & Sector Collection */}
      <div className="flex gap-4">
        <TopPerformingRiders />
        <TopPerformingSectors />
      </div>
    </div>
  );
};

export default Reports;
