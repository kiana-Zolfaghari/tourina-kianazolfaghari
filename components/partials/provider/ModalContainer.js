import styles from "./Modal.module.css";

function ModalContainer({ children, isOpen, setIsOpen }) {
  if (!isOpen) return;
  return (
    <>
      <div className={styles.modal}>
        <div className={styles.dialogOverlay}>
          <div className={styles.dialog}>{children}</div>
        </div>
      </div>
    </>
  );
}

export default ModalContainer;
