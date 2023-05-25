import styles from "./UserListItem.module.css";

const UserListItem = ({ username, age }) => {
    return (
        <li
            className={styles["user-list-item"]}
        >{`${username} (${age} years old)`}</li>
    );
};

export default UserListItem;
