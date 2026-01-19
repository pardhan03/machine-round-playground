import React, { forwardRef } from "react";
import Button from "../../shared/components/Button/Button";
import "./modal.css";

const Modal = forwardRef(({ open, onClose, onConfirm }, ref) => {
  if (!open) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-card" ref={ref}>
        <button className="close-btn" onClick={onClose}>×</button>
        <div className="icon-wrapper">
          <div className="icon-circle">
            ✓
          </div>
        </div>
        <h3 className="modal-title">Blog post published</h3>
        <p className="modal-description">
          This blog post has been published. Team members will be able to edit
          this post and republish changes.
        </p>
        <div className="modal-actions">
          <Button
            text="Cancel"
            bgColor="#FFFFFF"
            textColor="#374151"
            borderColor="#D1D5DB"
            onClick={onClose}
            width="120px"
          />
          <Button
            text="Confirm"
            bgColor="#7C5CFF"
            onClick={onConfirm}
            width="120px"
          />
        </div>
      </div>
    </div>
  );
});

export default Modal;
