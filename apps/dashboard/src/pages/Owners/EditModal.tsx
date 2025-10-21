import { useSelector } from "react-redux";
import Modal from "../../components/Modal";
import { modal } from "../../config/modal";
import { RootState } from "../../store";
import { ModalState } from "../../store/modalSlice";
import { IUser } from "shared";
import { useFormik } from "formik";
import useModal from "../../hooks/useModal";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { formikError } from "../../utils/utils";
import { ownerValidation } from "../../validations/owner";

const EditModal = () => {
  const { closeModal } = useModal(modal.editOwner);
  const { data } = useSelector(
    (state: RootState) => state.modal as ModalState<IUser>
  );

  const formik = useFormik({
    initialValues: {
      name: data?.name || "",
      phone: data?.phone || "",
      cnic: data?.cnic || "",
    },
    enableReinitialize: true,
    validationSchema: ownerValidation,
    onSubmit: (values) => {
      console.log(values);
      closeModal();
    },
  });
  const { values, handleChange, handleBlur, handleSubmit } = formik;

  if (!data) return null;

  return (
    <Modal
      modalKey={modal.editOwner}
      title={"Edit Owner Details"}
      className="!max-w-2xl"
    >
      {/* Form */}
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        {/* Name, Phone */}
        <div className="flex gap-2 w-full">
          <Input
            label="Name"
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Name"
            className="flex-1"
            error={formikError(formik, "name")}
          />
          <Input
            label="Phone Number"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="0300-1234567"
            className="flex-1"
            error={formikError(formik, "phone")}
          />
        </div>
        {/* CNIC */}
        <Input
          label="CNIC"
          name="address"
          value={values.cnic}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="37XXX-XXXXXXX-X"
          error={formikError(formik, "cnic")}
        />
        {/* Actions */}
        <div className="flex justify-end gap-2 mt-4">
          <Button
            type="button"
            onClick={closeModal}
            text="Cancel"
            variant="text"
          />
          <Button text={"Save"} />
        </div>
      </form>
    </Modal>
  );
};

export default EditModal;
