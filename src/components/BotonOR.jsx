import React, { useState } from "react";

const BotonQR = ({ onClickHandler, modalType: ModalQR }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    if (onClickHandler) onClickHandler();
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <div>
      <button onClick={openModal}>Ver QR</button>
      {isOpenModal && ModalQR && <ModalQR onClose={closeModal} />}
    </div>
  );
};

export default BotonQR;
