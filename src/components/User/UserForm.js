import { useState } from "react";
import styles from "./UserForm.module.css";
import Card from "../UI/Card";
import Dialog from "../UI/Dialog";
import Button from "../UI/Button";

const UserForm = ({ onAddUser }) => {
    const [username, setUsername] = useState("");
    const [age, setAge] = useState("");
    const [dialogOpen, setDialogOpen] = useState(false);
    const [validationError, setValidationError] = useState("");

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const userData = {
            id: `u${Math.random()}`,
            age,
            username,
        };

        const error = validateUserData(userData);
        if (error) {
            setValidationError(error);
            setDialogOpen(true);
            return;
        }
        onAddUser(userData);
        clearForm();
    };

    const handleNameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleAgeChange = (event) => {
        setAge(event.target.value);
    };

    const handleDialogClose = () => {
        setDialogOpen(false);
        setValidationError("");
    };

    const clearForm = () => {
        setUsername("");
        setAge("");
    };

    const validateUserData = ({ age, username }) => {
        if (!username.trim()) return "Please, enter a username";
        if (!age) return "Please, enter age";
        if (age < 0) return "Invalid age. Age should be a positive number";
    };

    return (
        <div>
            <Card className={styles["user-form"]}>
                <form onSubmit={handleFormSubmit}>
                    <div className={styles["user-form__group"]}>
                        <label htmlFor="username">Username</label>
                        <input
                            id="username"
                            value={username}
                            onChange={handleNameChange}
                            type="text"
                        />
                    </div>
                    <div className={styles["user-form__group"]}>
                        <label htmlFor="age">Age (Years)</label>
                        <input
                            id="age"
                            value={age}
                            onChange={handleAgeChange}
                            type="number"
                        />
                    </div>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
            <Dialog
                isOpen={dialogOpen}
                onDialogClose={handleDialogClose}
                title="Invalid Input"
            >
                {validationError}
            </Dialog>
        </div>
    );
};

export default UserForm;
