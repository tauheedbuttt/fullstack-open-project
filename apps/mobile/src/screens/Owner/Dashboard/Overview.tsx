import { PaidIcon } from "../../../../assets";
import TotalCard from "../../../components/TotalCard";

const Overview = () => {
  return (
    <TotalCard
      Icon={PaidIcon}
      title="TOTAL AMOUNT PAID"
      value="$12,000"
      subtitle="3 payments completed"
    />
  );
};

export default Overview;
