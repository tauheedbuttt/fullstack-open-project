import useBreadcrumb from "../../hooks/useBreadcrumb";
import GenerateReport from "./GenerateReport";

const Reports = () => {
  useBreadcrumb(
    "Reports & Analytics",
    "Generate and analyze financial reports."
  );
  return (
    <div className="flex flex-col gap-6">
      <GenerateReport />
      {/* Stats */}
      {/* Revenue vs Target (2025) */}
      {/* Riders & Sector Collection */}
      <div className="flex gap-4">
        {/* Top Performing Riders */}
        {/* Top Performing Sectors */}
      </div>
    </div>
  );
};

export default Reports;
