import { useSelector } from "react-redux";
import Modal from "../../components/Modal";
import { modal } from "../../config/modal";
import useModal from "../../hooks/useModal";
import { RootState } from "../../store";
import { ModalState } from "../../store/modalSlice";
import { IUser } from "shared";
import { useFormik } from "formik";
import { houseValidation } from "../../validations/house";
interface CreateModalProps {
  variant: "edit" | "create";
}
const variants = {
  create: {
    title: "Create New House",
    description: "Register a new house in the system",
    key: modal.createHouse,
  },
  edit: {
    title: "Edit House",
    description: "Update house information",
    key: modal.editHouse,
  },
};

const CreateModal = ({ variant }: CreateModalProps) => {
  const { closeModal } = useModal(variants[variant].key);
  const { data } = useSelector(
    (state: RootState) => state.modal as ModalState<IUser>
  );

  const formik = useFormik({
    initialValues: {
      name: data?.name || "",
      phone: data?.phone || "",
      cnic: data?.cnic || "",
      sector: data?.sector?.name || "",
      address: data?.address || "",
      status: data?.status || "",
    },
    enableReinitialize: true,
    validationSchema: houseValidation,
    onSubmit: (values) => {
      console.log(values);
      closeModal();
    },
  });
  const { values, handleChange, handleBlur, handleSubmit } = formik;

  return (
    <Modal
      modalKey={variants[variant].key}
      title={variants[variant].title}
      description={variants[variant].description}
    >
      {/* Form */}
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}></form>
    </Modal>
  );
};

export default CreateModal;
