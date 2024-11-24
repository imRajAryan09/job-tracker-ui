import React, { useEffect, ReactNode } from 'react';
import { createPortal } from 'react-dom';
// import Cross from "../../../assets/cancel-24.svg";
import styles from './Modal.module.scss';

interface ModalProps {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  children: ReactNode;
  showCross?: boolean;
}

const modalRoot = document.getElementById('modal') || document.body;

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, showCross = true, children }) => {
  useEffect(() => {
    if (isOpen) {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          onClose();
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <>
      <div className={`${styles.modalOverlay} ${isOpen ? styles.open : ''}`} onClick={onClose} aria-hidden="true"></div>
      <div
        className={`${styles.modal} ${isOpen ? 'open' : ''}`}
        role="dialog"
        aria-labelledby="modal-title"
        aria-modal="true"
        tabIndex={-1}
      >
        <div className={styles.top}>
          <h2 id="modal-title">{title}</h2>
          {showCross && (
            <button className={styles.closeButton} onClick={onClose} aria-label="Close modal">
              <img src="" alt="close-button" />
            </button>
          )}
        </div>
        <div className={styles.modalContent}>{children}</div>
      </div>
    </>,
    modalRoot
  );
};

export default Modal;
