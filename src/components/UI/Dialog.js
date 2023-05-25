import styles from "./Dialog.module.css";
import Button from "./Button";

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
                        <header className={styles["dialog-header"]}>
                            <h3 className={styles["dialog-title"]}>{title}</h3>
                        </header>
                        <div className={styles["dialog-body"]}>{children}</div>
                        <footer className={styles["dialog-actions"]}>
                            <Button
                                className={styles["close-button"]}
                                onClick={handleClose}
                            >
                                Close
                            </Button>
                        </footer>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dialog;
