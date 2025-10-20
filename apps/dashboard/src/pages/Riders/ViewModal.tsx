import { useSelector } from "react-redux";
import Modal from "../../components/Modal";
import { modal } from "../../config/modal";
import { RootState } from "../../store";
import { ModalState } from "../../store/modalSlice";
import { IPaymentStatus, IUser } from "shared";
import { PhoneIcon, UserIcon } from "../../assets";
import Avatar from "../../components/Avatar";
import Chip from "../../components/Chip";
import Card from "../../components/Card";
import Table, { TableColumn } from "../../components/Table";

const Header = ({ data }: { data: IUser }) => {
  return (
    <div className="bg-primary w-full flex flex-col gap-4 text-white rounded-xl p-3">
      {/* Details */}
      <div className="flex gap-2 justify-between">
        {/* profile */}
        <div className="flex gap-5 items-center">
          {/* image */}
          <Avatar
            className="bg-white/20 w-14 h-14"
            alt={data.name}
            icon={<UserIcon height={"50%"} width={"50%"} />}
          />
          {/* name */}
          <div className="flex flex-col gap-2">
            <span className="font-bold">{data.name}</span>
            <span className="text-white/70">ID: {data.userId}</span>
          </div>
        </div>
        {/* Status */}
        <Chip label={data.status} />
      </div>
      {/* Phone */}
      <div className="flex gap-2 items-center text-sm">
        <PhoneIcon className="w-4 h-4 text-white/80" />
        <span>{data.phone}</span>
      </div>
    </div>
  );
};

const ViewModal = () => {
  const { data } = useSelector(
    (state: RootState) => state.modal as ModalState<IUser>
  );
  if (!data) return null;

  const personalInformation = [
    { label: "Full Name", value: data.name || "N/A" },
    { label: "Phone", value: data.phone || "N/A" },
    { label: "Email", value: data.email || "N/A" },
    { label: "CNIC", value: data.cnic || "N/A" },
  ];

  const workDetails = [
    { label: "Rider ID", value: data.userId || "N/A" },
    { label: "Zone Assigned", value: data.sector?.name },
    { label: "Joining Date", value: data.createdAt || "N/A" },
    { label: "Houses Assigned", value: 5 },
  ];

  const information = [
    { title: "Personal Information", data: personalInformation },
    { title: "Work Details", data: workDetails },
  ];

  const rows = [
    {
      paymentId: "C-001",
      house: "488",
      owner: "Max Alert",
      amount: 123123,
      date: new Date().toDateString,
      status: IPaymentStatus.COMPLETED,
    },
    {
      paymentId: "C-002",
      house: "122",
      owner: "Sarah Khan",
      amount: 456456,
      date: new Date().toDateString,
      status: IPaymentStatus.PENDING,
    },
    {
      paymentId: "C-003",
      house: "233",
      owner: "Ali Raza",
      amount: 789789,
      date: new Date().toDateString,
      status: IPaymentStatus.SKIPPED,
    },
  ];
  const columns: TableColumn<(typeof rows)[0]>[] = [
    { label: "Collection ID", field: "paymentId" },
    { label: "House", field: "house" },
    { label: "Owner", field: "owner" },
    { label: "Amount", field: "amount" },
    { label: "Date", field: "date" },
    { label: "Status", field: "status" },
  ];

  return (
    <Modal
      modalKey={modal.viewRider}
      title={"Rider Details"}
      className="!max-w-2xl"
    >
      {/* Header */}
      <Header data={data} />
      {/* Information */}
      <div className="flex gap-2 mt-4">
        {information.map((section) => (
          <div key={section.title} className="flex-1 flex flex-col gap-3">
            <span>{section.title}</span>
            <Card className="!bg-gray-50 text-sm">
              <div className="flex flex-col gap-3">
                {section.data.map((item) => (
                  <div
                    key={item.label}
                    className="flex justify-between border-b border-gray-200"
                  >
                    <span className="text-gray-500">{item.label}</span>
                    <span>{item.value}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        ))}
      </div>
      {/* Recent Collections */}
      <div className="flex flex-col gap-3 mt-4">
        <span>Recent Collections</span>
        <div className="border rounded-lg">
          <Table rows={rows} columns={columns} />
        </div>
      </div>
    </Modal>
  );
};

export default ViewModal;
