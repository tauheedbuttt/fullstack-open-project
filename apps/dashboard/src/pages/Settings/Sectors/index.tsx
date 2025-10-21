import { Fragment } from "react/jsx-runtime";
import { modal } from "../../../config/modal";
import useModal from "../../../hooks/useModal";
import CreateModal from "./CreateModal";
import Table, { TableColumn } from "../../../components/Table";
import { LocationIcon, PlusIcon, TrashIcon } from "../../../assets";
import Card from "../../../components/Card";
import Button from "../../../components/Button";

const Sectors = () => {
  const { openModal } = useModal(modal.createSector);
  const rows = [
    { zoneId: "Z-001", name: "Zone A", houses: 90, fees: "PKR 5,000" },
    { zoneId: "Z-002", name: "Zone B", houses: 120, fees: "PKR 7,500" },
    { zoneId: "Z-003", name: "Zone C", houses: 75, fees: "PKR 4,250" },
  ];
  const columns: TableColumn<(typeof rows)[0]>[] = [
    { label: "Zone ID", field: "zoneId" },
    { label: "Name", field: "name" },
    { label: "Number of Houses", field: "houses" },
    { label: "Fee Rate", field: "fees" },
  ];
  const handleDelete = (rider: (typeof rows)[0]) => {
    console.log("Delete rider:", rider);
  };

  const actions = [
    {
      icon: <TrashIcon />,
      onClick: handleDelete,
    },
  ];
  return (
    <Fragment>
      <Card
        icon={<LocationIcon />}
        title={"Sectors Management"}
        className=" flex-1 border"
        rightTitleElement={
          <Button text="Add Sector" icon={<PlusIcon />} onClick={openModal} />
        }
      >
        <Table columns={columns} rows={rows} actions={actions} />
      </Card>
      <CreateModal />
    </Fragment>
  );
};

export default Sectors;
