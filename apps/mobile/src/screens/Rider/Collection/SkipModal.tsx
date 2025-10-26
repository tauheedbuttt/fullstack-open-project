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

const SkipModal = () => {
  const { data } = useSelector<RootState>(
    (state) => state.modal
  ) as ModalState<any>;

  const formik = useFormik({
    initialValues: {
      reason: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const { values, handleSubmit, handleChange } = formik;

  return (
    <Modal title={"Skip Collection"} modalKey={modal.skipCollection}>
      <View style={tw`gap-3`}>
        <Card style={tw`bg-gray-50`}>
          <Text style={tw`text-secondary text-sm`}>Collecting from</Text>
          <Text style={tw`text-lg font-medium`}>{data?.owner.name}</Text>
          <Text style={tw`text-secondary`}>{data?.address}</Text>
        </Card>
        <Input
          label="Reason for skipping"
          onChangeText={handleChange("reason")}
          error={formikError(formik, "reason")}
          value={values.reason}
          containerClassName={tw`bg-secondary/10 h-30 items-start`}
          style={tw` h-full`}
          multiline
        />
        <Button text="Submit" onPress={handleSubmit} />
      </View>
    </Modal>
  );
};

export default SkipModal;
