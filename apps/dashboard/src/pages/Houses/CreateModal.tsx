import { useSelector } from "react-redux";
import Modal from "../../components/Modal";
import { modal } from "../../config/modal";
import useModal from "../../hooks/useModal";
import { RootState } from "../../store";
import { ModalState } from "../../store/modalSlice";
import { IHouse, ISector, IUser, IUserStatus } from "shared";
import { useFormik } from "formik";
import { houseValidation } from "../../validations/house";
import Input from "../../components/Input";
import { formikError } from "../../utils/utils";
import Button from "../../components/Button";
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
    (state: RootState) => state.modal as ModalState<IHouse>
  );

  const sectors: Pick<ISector, "id" | "name">[] = [
    { id: 1, name: "D-12/1" },
    { id: 2, name: "D-12/2" },
    { id: 3, name: "D-12/3" },
    { id: 4, name: "D-12/4" },
  ];
  const riders: Pick<IUser, "id" | "name">[] = [
    { id: 1, name: "Rider One" },
    { id: 2, name: "Rider Two" },
    { id: 3, name: "Rider Three" },
    { id: 4, name: "Rider Four" },
  ];

  const formik = useFormik({
    initialValues: {
      address: data?.address || "",
      sector: data?.sector?.id || "",
      plotSize: data?.plotSize || "",
      rider: data?.rider?.id || "",
      fee: data?.fee || "",
      owner: {
        name: data?.owner?.name || "",
        phone: data?.owner?.phone || "",
        email: data?.owner?.email || "",
        cnic: data?.owner?.cnic || "",
        status: data?.owner?.status || "",
      },
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
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
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
        {/* Property Details */}
        <div className="flex flex-col gap-4">
          <span>Property Information</span>
          {/* Sector and Plot Size */}
          <div className="flex gap-2 w-full">
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
            <Input
              label="Plot Size"
              name="plotSize"
              value={values.plotSize}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Plot Size"
              className="flex-1"
              error={formikError(formik, "plotSize")}
            />
          </div>
          {/* Rider and Fee */}
          <div className="flex gap-2 w-full">
            <Input
              label="Assigned Rider"
              name="rider"
              value={values.rider}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Rider"
              variant="select"
              options={riders.map((item) => ({
                value: item.id,
                label: item.name,
              }))}
              className="flex-1"
              error={formikError(formik, "rider")}
            />
            <Input
              label="Monthly Fee {PKR}"
              name="fee"
              value={values.fee}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="2300"
              className="flex-1"
              error={formikError(formik, "fee")}
            />
          </div>
        </div>
        {/* Owner Details */}
        <div className="flex flex-col gap-4">
          <span>Owner Information</span>
          {/* Name, Phone */}
          <div className="flex gap-2 w-full">
            <Input
              label="Name"
              name="name"
              value={values.owner.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Name"
              className="flex-1"
              error={formikError(formik, "owner.name")}
            />
            <Input
              label="Phone Number"
              name="phone"
              value={values.owner.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="0300-1234567"
              className="flex-1"
              error={formikError(formik, "owner.phone")}
            />
          </div>
          {/* CNIC, Sector */}
          <div className="flex gap-2 w-full">
            <Input
              label="Email"
              name="email"
              value={values.owner.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Email"
              className="flex-1"
              error={formikError(formik, "owner.email")}
            />
            <Input
              label="CNIC"
              name="cnic"
              value={values.owner.cnic}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="37XXX-XXXXXXX-X"
              className="flex-1"
              error={formikError(formik, "owner.cnic")}
            />
          </div>
          {/* Status */}
          <Input
            label="Status"
            name="status"
            value={values.owner.status}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Status"
            variant="select"
            options={Object.values(IUserStatus).map((status) => ({
              value: status,
              label: status,
            }))}
            error={formikError(formik, "owner.status")}
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
