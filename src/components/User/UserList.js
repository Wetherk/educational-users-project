import styles from "./UserList.module.css";
import UserListItem from "./UserListItem";
import Card from "../UI/Card";

const UserList = ({ users }) => {
    const usersToDisplay = users.map(({ id, username, age }) => (
        <UserListItem key={id} username={username} age={age} />
    ));

    return (
        <Card className={styles["user-list"]}>
            <ul>{usersToDisplay}</ul>
        </Card>
    );
};

export default UserList;
