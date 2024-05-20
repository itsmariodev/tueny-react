import React from "react";
import { Modal, ModalHeader } from "semantic-ui-react";
import "./ModalBasic.scss";

export function ModalBasic(props) {
  const { show, size, title, children, onClose } = props;
  return (
    <Modal className="modal-basic" open={show} onClose={onClose} size={size}>
      {title && <ModalHeader>{title}</ModalHeader>}
      <Modal.Content>{children}</Modal.Content>
    </Modal>
  );
}

ModalBasic.defaultProps = {
  size: "tiny",
};
