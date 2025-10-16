import useBreadcrumb from "../../hooks/useBreadcrumb";

const Owners = () => {
  useBreadcrumb("Owners Management", "View and manage house owners.");
  return <div>Owners</div>;
};

export default Owners;
