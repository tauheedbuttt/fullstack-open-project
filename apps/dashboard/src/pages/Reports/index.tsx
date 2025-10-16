import useBreadcrumb from "../../hooks/useBreadcrumb";

const Reports = () => {
  useBreadcrumb(
    "Reports & Analytics",
    "Generate and analyze financial reports."
  );
  return <div>Reports</div>;
};

export default Reports;
