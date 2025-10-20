import { useSelector } from "react-redux";
import { IPayment } from "shared";
import {
  CalendarIcon,
  DollarIcon,
  DownloadIcon,
  HouseIcon,
  LocationIcon,
} from "../../assets";
import InfoWithIcon from "../../components/InfoWithIcon";
import Modal from "../../components/Modal";
import { modal } from "../../config/modal";
import { RootState } from "../../store";
import { ModalState } from "../../store/modalSlice";
import Button from "../../components/Button";

const ViewModal = () => {
  const { data } = useSelector(
    (state: RootState) => state.modal as ModalState<IPayment>
  );
  if (!data) return null;

  const paymentInfo = [
    [
      {
        label: "Payment ID",
        value: data.userId,
        icon: <HouseIcon />,
      },
      {
        label: "Owner Name",
        value: data.owner.name ?? "-",
        icon: <HouseIcon />,
      },
      {
        label: "Payment Date",
        value: data.paymentDate ?? "—",
        icon: <CalendarIcon />,
      },
    ],
    [
      {
        label: "House ID",
        value: data.house?.houseId ?? "—",
        icon: <LocationIcon />,
      },
      {
        label: "Amount",
        value: `PKR ${(data as any).outstandingAmount}`,
        icon: <DollarIcon className="text-md" />,
      },
    ],
  ];

  const collectionInfo = [
    [
      {
        label: "Collected By",
        value: data.rider.name ?? "-",
      },
      {
        label: "Receipt Number",
        value: data.recieptNumber ?? "-",
      },
    ],
    [
      {
        label: "Collection Time",
        value: data.collectionTime ?? "—",
      },
      {
        label: "Status",
        value: data.status ?? "—",
      },
    ],
  ];

  return (
    <Modal
      modalKey={modal.viewPayment}
      title={"Payment Details"}
      className="!max-w-2xl"
    >
      <div className="flex flex-col gap-4">
        {" "}
        <InfoWithIcon info={paymentInfo} />
        <InfoWithIcon info={collectionInfo} />
        {/* Actions */}
        <div className="flex justify-end gap-2 mt-4">
          <Button
            text="Print Receipt"
            variant="outlined"
            icon={<DownloadIcon />}
          />
        </div>
      </div>
    </Modal>
  );
};

export default ViewModal;
