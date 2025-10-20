import { Fragment } from "react/jsx-runtime";
import useBreadcrumb from "../../hooks/useBreadcrumb";
import Card from "../../components/Card";
import Input from "../../components/Input";
import Table, { TableColumn } from "../../components/Table";
import ViewModal from "./ViewModal";
import { DownloadIcon, EyeIcon } from "../../assets";
import { useState } from "react";
import useModal from "../../hooks/useModal";
import { modal } from "../../config/modal";
import { IPaymentStatus } from "shared";

const Payments = () => {
  const handleExport = () => {
    console.log("Export payments");
  };

  const { openModal: openViewModal } = useModal(modal.viewPayment);
  useBreadcrumb("Payments", "Track and manage all fee collections.", [
    {
      icon: <DownloadIcon />,
      text: "Export Payments",
      onClick: handleExport,
      variant: "outlined",
    },
  ]);

  const [filters, setFilters] = useState({
    search: "",
  });

  const handleView = (rider: (typeof rows)[0]) => {
    openViewModal(rider);
  };

  const rows = [
    {
      paymentId: "P-001",
      houseId: "H-101",
      owner: "John Doe",
      amount: 31223,
      date: new Date().toDateString,
      rider: "Ahmed Khan",
      status: IPaymentStatus.COMPLETED,
    },
    {
      paymentId: "P-002",
      houseId: "H-102",
      owner: "Jane Smith",
      amount: 45000,
      date: new Date().toDateString,
      rider: "Sara Ali",
      status: IPaymentStatus.PENDING,
    },
    {
      paymentId: "P-003",
      houseId: "H-103",
      owner: "Mike Johnson",
      amount: 28000,
      date: new Date().toDateString,
      rider: "Omar Farooq",
      status: IPaymentStatus.COMPLETED,
    },
  ];
  const columns: TableColumn<(typeof rows)[0]>[] = [
    { label: "Payment ID", field: "paymentId" },
    { label: "House ID", field: "houseId" },
    { label: "Owner", field: "owner" },
    { label: "Amount", field: "amount" },
    { label: "Date", field: "date" },
    { label: "Rider", field: "rider" },
    { label: "Status", field: "status" },
  ];

  const actions = [
    {
      icon: <EyeIcon />,
      onClick: handleView,
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
              placeholder="Search payments..."
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

export default Payments;
