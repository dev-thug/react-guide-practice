import UsersList from "./UsersList";

const User = (props) => {
    return (
        <div>
            <UsersList items={props.items}/>
        </div>
    )
}

export default User;