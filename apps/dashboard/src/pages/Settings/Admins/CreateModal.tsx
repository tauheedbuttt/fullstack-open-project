import { useFormik } from "formik";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Modal from "../../../components/Modal";
import { modal } from "../../../config/modal";
import useModal from "../../../hooks/useModal";
import { AdminFormInputs } from "../../../types/admins";
import { formikError } from "../../../utils/utils";
import { adminValidation } from "../../../validations/settings";

const CreateModal = () => {
  const { closeModal } = useModal(modal.createAdmin);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "12345678",
    },
    enableReinitialize: true,
    validationSchema: adminValidation,
    onSubmit: (values) => {
      console.log(values);
      closeModal();
    },
  });
  const { values, handleChange, handleBlur, handleSubmit } = formik;

  const fields: AdminFormInputs[] = [
    { name: "name", label: "Full Name", placeholder: "Enter full name" },
    { name: "email", label: "Email", placeholder: "Enter email" },
    { name: "phone", label: "Phone Number", placeholder: "Enter phone number" },
    {
      name: "password",
      label: "Password (Auto-generated)",
      type: "password",
      disabled: true,
    },
  ];

  return (
    <Modal
      modalKey={modal.createAdmin}
      title={"Add New Administrator"}
      description={"Create a new admin account with full system access"}
    >
      {/* Form */}
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        {fields.map((field) => (
          <Input
            {...field}
            value={values[field.name]}
            onChange={handleChange}
            onBlur={handleBlur}
            key={field.name}
            className="flex-1"
            error={formikError(formik, field.name)}
          />
        ))}
        {/* Actions */}
        <div className="flex justify-end gap-2 mt-4">
          <Button text={"Add Admin"} />
        </div>
      </form>
    </Modal>
  );
};

export default CreateModal;
