import { Fragment } from "react/jsx-runtime";
import { IUserStatus } from "shared";
import { OwnersIcon, PlusIcon, TrashIcon, UserIcon } from "../../../assets";
import Button from "../../../components/Button";
import Card from "../../../components/Card";
import Table, { TableColumn } from "../../../components/Table";
import { modal } from "../../../config/modal";
import useModal from "../../../hooks/useModal";
import CreateModal from "./CreateModal";

const Admins = () => {
  const { openModal } = useModal(modal.createAdmin);
  const rows = [
    {
      adminId: "A-001",
      name: "Admin A",
      email: "adminA@example.com",
      status: IUserStatus.ACTIVE,
    },
    {
      adminId: "A-002",
      name: "Admin B",
      email: "adminB@example.com",
      status: IUserStatus.INACTIVE,
    },
    {
      adminId: "A-003",
      name: "Admin C",
      email: "adminC@example.com",
      status: IUserStatus.ACTIVE,
    },
  ];
  const columns: TableColumn<(typeof rows)[0]>[] = [
    { label: "Admin ID", field: "adminId" },
    { label: "Name", field: "name" },
    { label: "Email", field: "email" },
    { label: "Status", field: "status" },
  ];
  const handleDelete = (admin: (typeof rows)[0]) => {
    console.log("Delete admin:", admin);
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
        icon={<OwnersIcon />}
        title={"Admins Management"}
        className=" flex-1 border"
        rightTitleElement={
          <Button text="Add Admin" icon={<PlusIcon />} onClick={openModal} />
        }
      >
        <Table columns={columns} rows={rows} actions={actions} />
      </Card>
      <CreateModal />
    </Fragment>
  );
};

export default Admins;
