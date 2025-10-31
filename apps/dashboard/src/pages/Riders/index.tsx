import { Fragment, useState } from "react";
import { IRidersQuery, IRidersResponse, IUserStatus } from "shared";
import { CrossIcon, EditIcon, EyeIcon, PlusIcon } from "../../assets";
import Card from "../../components/Card";
import Input from "../../components/Input";
import Table, { TableColumn } from "../../components/Table";
import { modal } from "../../config/modal";
import useBreadcrumb from "../../hooks/useBreadcrumb";
import useModal from "../../hooks/useModal";
import CreateModal from "./CreateModal";
import ViewModal from "./ViewModal";
import useQuery from "../../hooks/useQuery";
import { endpoints } from "../../config/endpoints";
import { useDebounce } from "@uidotdev/usehooks";
import { queryKeys } from "../../config/queryKeys";

const Riders = () => {
  const { openModal: openEditModal } = useModal(modal.editRider);
  const { openModal: openViewModal } = useModal(modal.viewRider);
  useBreadcrumb("Riders", "Manage collection riders and their assignments.", [
    {
      icon: <PlusIcon />,
      text: "Add Rider",
      modal: modal.createRider,
    },
  ]);

  const [filters, setFilters] = useState({
    search: "",
    status: "",
  });
  const debouncedSearch = useDebounce(filters.search, 300);
  const params = {
    status: filters.status || undefined,
    search: debouncedSearch,
  };

  const { data: ridersData } = useQuery<IRidersResponse, IRidersQuery>(
    endpoints.user.riders.get,
    {
      queryKey: [queryKeys.user.riders.get, params],
      params,
    }
  );

  const riders = ridersData?.riders || [];

  const handleView = (rider: (typeof rows)[0]) => {
    openViewModal(rider);
  };
  const handleEdit = (rider: (typeof rows)[0]) => {
    openEditModal(rider);
  };
  const handleDelete = (rider: (typeof rows)[0]) => {
    console.log("Delete rider:", rider);
  };

  const status = ["All Riders", ...Object.values(IUserStatus)].map((item) => ({
    value: `${item === "All Riders" ? "" : item}`,
    label: item,
  }));

  const rows = riders.map((item) => ({
    ...item,
    id: item.userId,
    assignedHouses: 15,
    collectedAmount: "$1,200",
  }));

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
    <Fragment>
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
              onChange={(e) =>
                setFilters({ ...filters, search: e.target.value })
              }
            />
            {/* Status */}
            <Input
              variant="select"
              className="border-0 w-52"
              inputClassName="border-0 bg-gray-100 text-primary"
              options={status}
              value={filters.status}
              onChange={(e) =>
                setFilters({ ...filters, status: e.target.value })
              }
            />
          </div>
        }
      >
        <Table columns={columns} rows={rows} actions={actions} />
      </Card>
      <CreateModal variant="create" />
      <CreateModal variant="edit" />
      <ViewModal />
    </Fragment>
  );
};

export default Riders;
