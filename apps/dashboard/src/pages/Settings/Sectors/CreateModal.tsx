import { useFormik } from "formik";
import { useSelector } from "react-redux";
import { BASE_SECTOR_FEE, ISector } from "shared";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Modal from "../../../components/Modal";
import { modal } from "../../../config/modal";
import useModal from "../../../hooks/useModal";
import { RootState } from "../../../store";
import { ModalState } from "../../../store/modalSlice";
import { SectorFormInputs } from "../../../types/sector";
import { formikError } from "../../../utils/utils";
import { sectorValidation } from "../../../validations/settings";

const CreateModal = () => {
  const { closeModal } = useModal(modal.createSector);
  const { data } = useSelector(
    (state: RootState) => state.modal as ModalState<ISector>
  );

  const formik = useFormik({
    initialValues: {
      name: data?.name || "",
      fees: data?.fees || BASE_SECTOR_FEE,
      description: data?.description || "",
    },
    enableReinitialize: true,
    validationSchema: sectorValidation,
    onSubmit: (values) => {
      console.log(values);
      closeModal();
    },
  });
  const { values, handleChange, handleBlur, handleSubmit } = formik;

  const fields: SectorFormInputs[] = [
    { name: "name", label: "Name", placeholder: "Sector Name" },
    { name: "fees", label: "Fees", placeholder: "Fee Rate", type: "number" },
    {
      name: "description",
      label: "Description",
      placeholder: "Sector Description",
    },
  ];

  return (
    <Modal
      modalKey={modal.createSector}
      title={"Add New Sector"}
      description={"Create a new sector for house organization"}
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
          <Button text={"Add Sector"} />
        </div>
      </form>
    </Modal>
  );
};

export default CreateModal;
