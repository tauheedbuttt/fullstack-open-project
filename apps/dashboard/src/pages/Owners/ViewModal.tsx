import { RootState } from "../../store";
import { useSelector } from "react-redux";
import { ModalState } from "../../store/modalSlice";
import { IPaymentStatus, IUser } from "shared";
import Modal from "../../components/Modal";
import { modal } from "../../config/modal";
import Avatar from "../../components/Avatar";
import {
  CalendarIcon,
  DollarIcon,
  EmailIcon,
  HouseIcon,
  LocationIcon,
  PhoneIcon,
} from "../../assets";
import Table, { TableColumn } from "../../components/Table";

const ViewModal = () => {
  const { data } = useSelector(
    (state: RootState) => state.modal as ModalState<IUser>
  );
  if (!data) return null;

  const info = [
    [
      {
        label: "Owner ID",
        value: data.userId,
        icon: <HouseIcon />,
      },
      {
        label: "Phone Number",
        value: data.phone ?? "-",
        icon: <PhoneIcon />,
      },
      { label: "Email", value: data.email ?? "—", icon: <EmailIcon /> },
    ],
    [
      {
        label: "House ID",
        value: data.house?.houseId ?? "—",
        icon: <LocationIcon />,
      },
      {
        label: "Outstanding Amount",
        value: `PKR ${(data as any).outstandingAmount}`,
        icon: <DollarIcon className="text-md" />,
      },
      {
        label: "Last Payment",
        value: new Date().toLocaleDateString(),
        icon: <CalendarIcon />,
      },
    ],
  ];

  const rows = [
    {
      period: "January 2024",
      amount: "PKR 5,000",
      date: new Date().toISOString(),
      status: IPaymentStatus.COMPLETED,
    },
    {
      period: "February 2024",
      amount: "PKR 5,000",
      date: new Date().toISOString(),
      status: IPaymentStatus.PENDING,
    },
    {
      period: "March 2024",
      amount: "PKR 5,000",
      date: new Date().toISOString(),
      status: IPaymentStatus.SKIPPED,
    },
  ];

  const columns: TableColumn<(typeof rows)[0]>[] = [
    { label: "Period", field: "period" },
    { label: "Amount", field: "amount" },
    { label: "Payment Date", field: "date" },
    { label: "Status", field: "status" },
  ];

  return (
    <Modal
      modalKey={modal.viewOwner}
      title={"Owner Details"}
      description="Complete information about the owner and payment history"
      className="!max-w-2xl"
    >
      <div>
        {/* Info */}
        <div className="flex gap-3 ">
          {info.map((section, idx) => (
            <div
              key={idx}
              className="flex-1 flex flex-col border rounded-xl p-4 gap-4"
            >
              {section.map(({ label, value, icon }) => (
                <div key={label} className="flex gap-3 items-center">
                  <Avatar icon={icon} alt={label} />
                  <div className="flex flex-col flex-1">
                    <div className="text-sm text-gray-500">{label}</div>
                    <div className="text-sm font-medium">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        {/* Payment History */}
        <div className="flex flex-col gap-3 mt-4">
          <span>Payment History</span>
          <div className="border rounded-lg">
            <Table rows={rows} columns={columns} />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ViewModal;
