import UserForm from "./UserForm";

const NewUser = (props) => {

    const saveUserDataHandler = (enteredUserData) => {
        const userData = {
            ...enteredUserData,
            id: Math.random().toString()
        }
        props.onAddUser(userData)
    }

    return (
        <div>
            <UserForm onSaveUserData={saveUserDataHandler}/>
        </div>
    )
}

export default NewUser;