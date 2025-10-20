import { useSelector } from "react-redux";
import Modal from "../../components/Modal";
import { modal } from "../../config/modal";
import { RootState } from "../../store";
import { ModalState } from "../../store/modalSlice";

interface CreateModalProps {
  variant: "edit" | "create";
}
const variants = {
  create: {
    title: "Create New Rider",
    description: "Add a new collection rider to the system",
    key: modal.createRider,
  },
  edit: {
    title: "Edit Rider",
    description: "Modify the details of the collection rider",
    key: modal.editRider,
  },
};

const CreateModal = ({ variant }: CreateModalProps) => {
  const { data } = useSelector(
    (state: RootState) => state.modal as ModalState<{ name: string }>
  );
  return (
    <Modal
      modalKey={variants[variant].key}
      title={variants[variant].title}
      description={variants[variant].description}
    >
      <div>HAHA</div>
    </Modal>
  );
};

export default CreateModal;
