import User from "./components/User/User";
import {useState} from "react";
import NewUser from "./components/NewUser/NewUser";

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
            <NewUser onAddUser={addUserHandler}/>
            <User items={users}/>
        </div>
    );
}

export default App;
