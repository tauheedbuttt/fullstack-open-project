import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { ModalState } from "../../../features/modalSlice";
import Modal from "../../../components/Modal";
import { modal } from "../../../config/modal";
import tw from "../../../lib/tailwind";

const SkipModal = () => {
  const { data } = useSelector<RootState>(
    (state) => state.modal
  ) as ModalState<any>;

  return (
    <Modal title={"Skip Collection"} modalKey={modal.skipCollection}>
      <View style={tw`gap-5`}>
        <Text>SkipModal</Text>
      </View>
    </Modal>
  );
};

export default SkipModal;
