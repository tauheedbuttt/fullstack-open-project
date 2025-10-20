import { useFormik } from "formik";
import { useSelector } from "react-redux";
import { ISector, IUser, IUserStatus } from "shared";
import Input from "../../components/Input";
import Modal from "../../components/Modal";
import { modal } from "../../config/modal";
import { RootState } from "../../store";
import { ModalState } from "../../store/modalSlice";
import Button from "../../components/Button";
import useModal from "../../hooks/useModal";
import { riderValidation } from "../../validations/rider";
import { formikError } from "../../utils/utils";

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
  const { closeModal } = useModal(variants[variant].key);
  const { data } = useSelector(
    (state: RootState) => state.modal as ModalState<IUser>
  );

  const sectors: Pick<ISector, "id" | "name">[] = [
    { id: 1, name: "D-12/1" },
    { id: 2, name: "D-12/2" },
    { id: 3, name: "D-12/3" },
    { id: 4, name: "D-12/4" },
  ];

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
    validationSchema: riderValidation,
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
        {/* CNIC, Sector */}
        <div className="flex gap-2 w-full">
          <Input
            label="CNIC"
            name="cnic"
            value={values.cnic}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="37XXX-XXXXXXX-X"
            className="flex-1"
            error={formikError(formik, "cnic")}
          />
          <Input
            label="Sector"
            name="sector"
            value={values.sector}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Sector"
            variant="select"
            options={sectors.map((item) => ({
              value: item.id,
              label: item.name,
            }))}
            className="flex-1"
            error={formikError(formik, "sector")}
          />
        </div>
        {/* Address, Status */}
        <div className="flex flex-col gap-2">
          {/* Address */}
          <Input
            label="Address"
            name="address"
            value={values.address}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Address"
            error={formikError(formik, "address")}
          />
          {/* Status */}
          <Input
            label="Status"
            name="status"
            value={values.status}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Status"
            variant="select"
            options={Object.values(IUserStatus).map((status) => ({
              value: status,
              label: status,
            }))}
            error={formikError(formik, "status")}
          />
        </div>
        {/* Actions */}
        <div className="flex justify-end gap-2 mt-4">
          {variant === "edit" && (
            <Button
              type="button"
              onClick={closeModal}
              text="Cancel"
              variant="text"
            />
          )}
          <Button text={variants[variant].title} />
        </div>
      </form>
    </Modal>
  );
};

export default CreateModal;
