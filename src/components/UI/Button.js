import styles from "./Button.module.css";

const Button = ({ onClick, type, className, children }) => {
    return (
        <button
            className={`${className} ${styles.button}`}
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    );
};

export default Button;
