import * as React from "react";
import * as btn from "./style.module.scss";
import { Modal } from "../../../../Modal";
export const MainBtn = ({ text, action, widget }) => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button className={btn.btnMain} onClick={widget ? ()=>{widget && setShowModal(true)} : action}>
        { text }
      </button>
      <Modal
        open={showModal}
        onClose={() => {
          setShowModal(false);
        }}
      >
        { widget }
      </Modal>
    </>
  );
};

export const RestartBtn = ({ text, action }) => {
  return (
    <button className={btn.btnRestart} onClick={action}>
      { text }
    </button>
  );
};
