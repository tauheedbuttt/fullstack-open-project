import { Fragment, useState } from "react";
import useBreadcrumb from "../../hooks/useBreadcrumb";
import useModal from "../../hooks/useModal";
import { modal } from "../../config/modal";
import Table, { TableColumn } from "../../components/Table";
import Card from "../../components/Card";
import Input from "../../components/Input";
import { EditIcon, EyeIcon, WhatsappIcon } from "../../assets";
import ViewModal from "./ViewModal";

const Owners = () => {
  const { openModal: openEditModal } = useModal(modal.editOwner);
  const { openModal: openViewModal } = useModal(modal.viewOwner);
  useBreadcrumb("Owners Management", "View and manage house owners.");

  const [filters, setFilters] = useState({
    search: "",
  });

  const handleView = (owner: (typeof rows)[0]) => {
    openViewModal(owner);
  };
  const handleEdit = (owner: (typeof rows)[0]) => {
    openEditModal(owner);
  };
  const handleWhatsapp = (owner: (typeof rows)[0]) => {
    const whatsappUrl = `https://wa.me/${owner.phone.replace(/[^0-9]/g, "")}`;
    window.open(whatsappUrl, "_blank");
  };

  const rows = [
    {
      userId: "R001",
      name: "John Doe",
      phone: "123-456-7890",
      house: "45B, Green Apartments",
      outstandingDues: "$300",
      lastPaymentDate: new Date().toDateString(),
    },
    {
      userId: "R002",
      name: "Jane Smith",
      phone: "987-654-3210",
      house: "12A, Blue Villas",
      outstandingDues: "$0",
      lastPaymentDate: new Date().toDateString(),
    },
    {
      userId: "R003",
      name: "Ali Raza",
      phone: "555-123-4567",
      house: "78C, Red Condos",
      outstandingDues: "$150",
      lastPaymentDate: new Date().toDateString(),
    },
  ];
  const columns: TableColumn<(typeof rows)[0]>[] = [
    { label: "Rider ID", field: "userId" },
    { label: "Name", field: "name" },
    { label: "Phone", field: "phone" },
    { label: "House", field: "house" },
    { label: "Outstanding Dues", field: "outstandingDues" },
    { label: "Last Payment Date", field: "lastPaymentDate" },
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
      icon: <WhatsappIcon />,
      onClick: handleWhatsapp,
    },
  ];

  return (
    <Fragment>
      <Card
        title={"All Owners"}
        rightTitleElement={
          <div className="flex gap-2">
            {/* Search */}
            <Input
              variant="search"
              placeholder="Search owners..."
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
      <ViewModal />
    </Fragment>
  );
};

export default Owners;
