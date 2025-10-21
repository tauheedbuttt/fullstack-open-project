import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { setModal } from "../store/modalSlice";

const useModal = (key: string) => {
  const dispatch = useDispatch<AppDispatch>();
  const openModal = <T,>(data?: T) =>
    dispatch(setModal({ key, open: true, data }));
  const closeModal = () => dispatch(setModal({ key, open: false }));
  return { openModal, closeModal };
};

export default useModal;
