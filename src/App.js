import { useState } from "react";

import UserForm from "./components/User/UserForm";
import UserList from "./components/User/UserList";

const App = () => {
    const DUMMY_USERS = [
        {
            id: "u1",
            username: "Alex",
            age: 22,
        },
        {
            id: "u2",
            username: "Max",
            age: 42,
        },
        {
            id: "u3",
            username: "John",
            age: 56,
        },
    ];

    const [users, setUsers] = useState(DUMMY_USERS);

    const handleAddUser = (newUser) =>
        setUsers((prevUsers) => [newUser, ...prevUsers]);

    return (
        <div>
            <UserForm onAddUser={handleAddUser} />
            <UserList users={users} />
        </div>
    );
};

export default App;
