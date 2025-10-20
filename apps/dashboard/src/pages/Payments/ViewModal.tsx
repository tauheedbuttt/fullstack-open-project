import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { ModalState } from "../../store/modalSlice";
import { IUser } from "shared";
import Modal from "../../components/Modal";
import { modal } from "../../config/modal";

const ViewModal = () => {
  const { data } = useSelector(
    (state: RootState) => state.modal as ModalState<IUser>
  );
  if (!data) return null;

  return (
    <Modal
      modalKey={modal.viewPayment}
      title={"Rider Details"}
      className="!max-w-2xl"
    >
      <div className="flex flex-col gap-4">
        <div>Name: {data.name}</div>
        <div>Phone: {data.phone}</div>
        <div>Email: {data.email}</div>
        <div>Rider ID: {data.userId}</div>
      </div>
    </Modal>
  );
};

export default ViewModal;
