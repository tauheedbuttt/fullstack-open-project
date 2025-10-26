import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { ModalState } from "../../../features/modalSlice";
import Modal from "../../../components/Modal";
import { modal } from "../../../config/modal";
import tw from "../../../lib/tailwind";
import Card from "../../../components/Card";
import { useFormik } from "formik";
import Input from "../../../components/Input";
import { formikError } from "shared";
import Button from "../../../components/Button";

const CollectionModal = () => {
  const { data } = useSelector<RootState>(
    (state) => state.modal
  ) as ModalState<any>;

  const formik = useFormik({
    initialValues: {
      amount: data?.amount,
      proof: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const { values, handleSubmit, handleChange } = formik;

  return (
    <Modal title={"Collect Payment"} modalKey={modal.collection}>
      <View style={tw`gap-3`}>
        <Card style={tw`bg-gray-50`}>
          <Text style={tw`text-secondary text-sm`}>Collecting from</Text>
          <Text style={tw`text-lg font-medium`}>{data?.owner.name}</Text>
          <Text style={tw`text-secondary`}>{data?.address}</Text>
        </Card>
        <Input
          label="Amount Collected"
          onChangeText={handleChange("amount")}
          error={formikError(formik, "amount")}
          value={values.amount}
          containerClassName={tw`bg-secondary/10`}
        />
        <Input
          label="Upload Receipt (Optional)"
          onChangeText={handleChange("proof")}
          error={formikError(formik, "proof")}
          value={values.proof}
          containerClassName={tw`bg-secondary/10`}
          variant="image"
          placeholder="Upload Image"
        />
        <Button text="Collect" onPress={handleSubmit} />
      </View>
    </Modal>
  );
};

export default CollectionModal;
