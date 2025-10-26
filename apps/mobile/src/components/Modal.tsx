import {
  Modal as RNModal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { CrossOutlinedIcon } from "../../assets";
import { setOpen } from "../features/modalSlice";
import tw from "../lib/tailwind";
import { AppDispatch, RootState } from "../store";
import Button from "./Button";

interface ModalProps {
  children: React.ReactNode;
  modalKey: string;
  title?: string;
}

const Modal = ({ children, modalKey, title }: ModalProps) => {
  const modal = useSelector((state: RootState) => state.modal);
  const dispatch = useDispatch<AppDispatch>();
  const handleOpen = (open: boolean) => dispatch(setOpen(open));
  const onClose = () => handleOpen(false);

  return (
    <RNModal
      transparent
      animationType="fade"
      visible={modal.open && modalKey === modal.key}
      onRequestClose={onClose}
    >
      {/* Overlay */}
      <TouchableOpacity
        onPress={onClose}
        activeOpacity={1}
        style={tw`flex-1 justify-center items-center bg-secondary/30`}
      >
        {/* Inner modal container — stop touches from propagating */}
        <View
          style={tw`m-20 bg-white rounded-lg px-3 py-3 pb-5 shadow-md w-[90%]`}
          onStartShouldSetResponder={() => true}
          onTouchEnd={(e) => e.stopPropagation()}
        >
          <View style={tw`flex-row items-center justify-between mb-2`}>
            <Text style={tw`text-base font-medium`}>{title}</Text>
            <Button
              onPress={onClose}
              variant="text"
              Icon={CrossOutlinedIcon}
              style={tw`p-1`}
            />
          </View>
          <ScrollView>{children}</ScrollView>
        </View>
      </TouchableOpacity>
    </RNModal>
  );
};

export default Modal;
