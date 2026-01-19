import React, { useEffect, useRef, useState } from 'react'
import Modal from './Modal'

const ModalOutsideClickApp = () => {
  const modalRef = useRef();
  const [showModal, setShowModal] = useState(true);

  const handleClose = () => {
    setShowModal(false);
  };

  useEffect(() => {

    // Close modal on outside click
    const handleClickOutside = (e) => {
     console.log(modalRef.current, 'modalref', e.target)
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        handleClose();
      }
    };

    //close modal on key press
    const handleKeyDown = (e) => {
      if (e.key === "Escape") handleClose();
    };


    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [showModal, handleClose]);

  return (
    <div>
      <Modal
        ref={modalRef}
        open={showModal}
        onClose={handleClose}
      />
    </div>
  )
}

export default ModalOutsideClickApp