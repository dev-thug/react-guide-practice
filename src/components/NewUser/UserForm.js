import {useState} from "react";

const UserForm = (props) => {

    const [enteredName, setEnteredName] = useState("");

    const [enteredAge, setEnteredAge] = useState("")

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault()

        const userData = {
            name: enteredName,
            age: +enteredAge
        }

        props.onSaveUserData(userData)
        setEnteredName("")
        setEnteredAge("")

    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <div>
                    <label htmlFor="">Name</label>
                    <input type="text" value={enteredName} onChange={nameChangeHandler}/>
                </div>
                <div>
                    <label htmlFor="">Age</label>
                    <input type="number" value={enteredAge} onChange={ageChangeHandler}/>
                </div>
            </div>
            <div>
                <button type="submit">Add User</button>
            </div>
        </form>
    )
}

export default UserForm;