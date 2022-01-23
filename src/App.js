import User from "./components/Users/User";
import {useState} from "react";
import NewUser from "./components/NewUser/NewUser";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

const DUMMY_USER = [
    {
        id: "u1",
        name: "김현중",
        age: "28"
    }
]

function App() {

    const [users, setUsers] = useState(DUMMY_USER);


    const addUserHandler = (user) => {
        setUsers(prevState => {
            return [user, ...prevState]
        })
    }


    return (
        <div>
            <AddUser/>
            <UsersList users={users}/>
        </div>
    );
}

export default App;
