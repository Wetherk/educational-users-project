import styles from "./Dialog.module.css";

const Dialog = ({ children, isOpen, onDialogClose, title }) => {
    const handleClose = () => {
        onDialogClose();
    };

    const handleOverlayClick = (event) => {
        const clickedId = event.target.getAttribute("id");

        if (clickedId === "dialog-overlay") onDialogClose();
    };

    return (
        <div>
            {isOpen && (
                <div
                    id="dialog-overlay"
                    className={styles["dialog-overlay"]}
                    onClick={handleOverlayClick}
                >
                    <div className={styles["dialog-content"]}>
                        <div className={styles["dialog-header"]}>
                            <h3 className={styles["dialog-title"]}>{title}</h3>
                        </div>
                        <div className={styles["dialog-body"]}>{children}</div>
                        <div className={styles["dialog-actions"]}>
                            <button
                                className={styles["close-button"]}
                                onClick={handleClose}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dialog;
