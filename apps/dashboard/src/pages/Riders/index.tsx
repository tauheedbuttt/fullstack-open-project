import { IUserStatus } from "shared";
import Card from "../../components/Card";
import Input from "../../components/Input";
import Table, { TableColumn } from "../../components/Table";
import useBreadcrumb from "../../hooks/useBreadcrumb";
import { CrossIcon, EditIcon, EyeIcon, PlusIcon } from "../../assets";
import { useState } from "react";
import { useActionContext } from "../../context/ActionContext";

const Riders = () => {
  useActionContext([
    {
      icon: <PlusIcon />,
      text: "Add Rider",
      onClick: () => {
        console.log("Add Rider clicked");
      },
    },
  ]);
  useBreadcrumb("Riders", "Manage collection riders and their assignments.");

  const [filters, setFilters] = useState({
    search: "",
    status: "",
  });

  const handleView = (rider: (typeof rows)[0]) => {
    console.log("View rider:", rider);
  };
  const handleEdit = (rider: (typeof rows)[0]) => {
    console.log("Edit rider:", rider);
  };
  const handleDelete = (rider: (typeof rows)[0]) => {
    console.log("Delete rider:", rider);
  };

  const status = ["All Riders", ...Object.values(IUserStatus)].map((item) => ({
    value: `${item === "All Riders" ? "" : item}`,
    label: item,
  }));

  const rows = [
    {
      id: "R001",
      name: "John Doe",
      phone: "123-456-7890",
      status: IUserStatus.ACTIVE,
      assignedHouses: 15,
      collectedAmount: "$1,200",
    },
    {
      id: "R002",
      name: "Jane Smith",
      phone: "987-654-3210",
      status: IUserStatus.INACTIVE,
      assignedHouses: 10,
      collectedAmount: "$800",
    },
    {
      id: "R003",
      name: "Mike Johnson",
      phone: "555-123-4567",
      status: IUserStatus.ACTIVE,
      assignedHouses: 8,
      collectedAmount: "$500",
    },
  ];
  const columns: TableColumn<(typeof rows)[0]>[] = [
    { label: "Rider ID", field: "id" },
    { label: "Name", field: "name" },
    { label: "Phone", field: "phone" },
    { label: "Assigned Houses", field: "assignedHouses" },
    { label: "Collected Amount", field: "collectedAmount" },
    { label: "Status", field: "status" },
  ];

  const actions = [
    {
      icon: <EyeIcon />,
      onClick: handleView,
    },
    {
      icon: <EditIcon />,
      onClick: handleEdit,
    },
    {
      icon: <CrossIcon className="text-red-500" />,
      onClick: handleDelete,
    },
  ];

  return (
    <Card
      title={"All Riders"}
      rightTitleElement={
        <div className="flex gap-2">
          {/* Search */}
          <Input
            variant="search"
            placeholder="Search riders..."
            className="border-0 w-full"
            inputClassName="bg-gray-100 text-primary"
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
          />
          {/* Status */}
          <Input
            variant="select"
            className="border-0 w-52"
            inputClassName="border-0 bg-gray-100 text-primary"
            options={status}
            value={filters.status}
            onChange={(e) => setFilters({ ...filters, status: e.target.value })}
          />
        </div>
      }
    >
      <Table columns={columns} rows={rows} actions={actions} />
    </Card>
  );
};

export default Riders;
