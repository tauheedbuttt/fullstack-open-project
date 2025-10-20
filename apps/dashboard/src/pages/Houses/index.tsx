import { Fragment } from "react/jsx-runtime";
import { EditIcon, LocationIcon, PlusIcon } from "../../assets";
import { modal } from "../../config/modal";
import useBreadcrumb from "../../hooks/useBreadcrumb";
import Card from "../../components/Card";
import Input from "../../components/Input";
import Table, { TableColumn } from "../../components/Table";
import CreateModal from "./CreateModal";
import MapViewModal from "./MapViewModal";
import useModal from "../../hooks/useModal";
import { useState } from "react";
import { IHouseStatus } from "shared";

const Houses = () => {
  const { openModal: openEditModal } = useModal(modal.editRider);

  useBreadcrumb("Houses Management", "Manage houses and their assignments.", [
    {
      icon: <LocationIcon />,
      text: "Map View",
      modal: modal.mapView,
      variant: "outlined",
    },
    {
      icon: <PlusIcon />,
      text: "Add House",
      modal: modal.createHouse,
    },
  ]);

  const [filters, setFilters] = useState({
    search: "",
  });

  const handleEdit = (house: (typeof rows)[0]) => {
    openEditModal(house);
  };

  const rows = [
    {
      houseId: "H-001",
      address: "123 Main St",
      sector: "D-12/3",
      rider: "John Doe",
      status: IHouseStatus.ACTIVE,
      collectedAmount: "$1,200",
      fees: 1200,
    },
    {
      houseId: "H-002",
      address: "456 Elm St",
      sector: "D-12/4",
      rider: "Jane Smith",
      status: IHouseStatus.INACTIVE,
      collectedAmount: "$800",
      fees: 800,
    },
    {
      houseId: "H-003",
      address: "789 Oak St",
      sector: "D-12/5",
      rider: "Mike Johnson",
      status: IHouseStatus.ACTIVE,
      collectedAmount: "$950",
      fees: 950,
    },
  ];

  const columns: TableColumn<(typeof rows)[0]>[] = [
    { label: "House ID", field: "houseId" },
    { label: "Address", field: "address" },
    { label: "Sector", field: "sector" },
    { label: "Assigned Rider", field: "rider" },
    { label: "Status", field: "status" },
    { label: "Monthly Fees", field: "fees" },
  ];

  const actions = [
    {
      icon: <EditIcon />,
      onClick: handleEdit,
    },
  ];

  return (
    <Fragment>
      <Card
        title={"All Riders"}
        rightTitleElement={
          <div className="flex gap-2">
            {/* Search */}
            <Input
              variant="search"
              placeholder="Search houses..."
              className="border-0 w-full"
              inputClassName="bg-gray-100 text-primary"
              value={filters.search}
              onChange={(e) =>
                setFilters({ ...filters, search: e.target.value })
              }
            />
          </div>
        }
      >
        <Table columns={columns} rows={rows} actions={actions} />
      </Card>
      <CreateModal variant="create" />
      <CreateModal variant="edit" />
      <MapViewModal />
    </Fragment>
  );
};

export default Houses;
