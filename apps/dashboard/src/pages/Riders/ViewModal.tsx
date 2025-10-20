import { useSelector } from "react-redux";
import Modal from "../../components/Modal";
import { modal } from "../../config/modal";
import { RootState } from "../../store";
import { ModalState } from "../../store/modalSlice";

const ViewModal = () => {
  const { data } = useSelector(
    (state: RootState) => state.modal as ModalState<{ name: string }>
  );
  return (
    <Modal modalKey={modal.viewRider} title={data?.name || "View Rider"}>
      <div>HAHA</div>
    </Modal>
  );
};

export default ViewModal;
