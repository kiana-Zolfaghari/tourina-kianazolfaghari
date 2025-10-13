import styles from "./Modal.module.css";

function ModalContainer({ children, isOpen, setIsOpen }) {
  if (!isOpen) return;
  return (
    <>
      <div className="fixed top-0 right-0 w-svw h-svh bg-black-20 z-10 backdrop-blur-sm ">
        <div className={styles.dialogOverlay}>
          <div className={styles.dialog}>{children}</div>
        </div>
      </div>
    </>
  );
}

export default ModalContainer;
