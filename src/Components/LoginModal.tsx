import React, { useEffect } from "react";
import "./LoginModal.css";

interface LoginModalProps {
  isOpen: boolean;
  message?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  message = "Someone has already logged in with your user Id. Do you want to login anyway?",
  onConfirm,
  onCancel
}) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onCancel();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onCancel]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onCancel}>
      <div
        className="modal-container"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <div className="modal-header">
          <h3>Login Restriction</h3>
        </div>

        <div className="modal-body">
          <p>{message}</p>
        </div>

        <div className="modal-footer">
          <button className="btn btn-yes" onClick={onConfirm}>
            YES
          </button>
          <button className="btn btn-no" onClick={onCancel}>
            NO
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
