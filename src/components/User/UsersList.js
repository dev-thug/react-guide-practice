import UserItem from "./UserItem";

const UsersList = (props) => {
    return (
        <div>
            {props.items.map(user =>
                <UserItem
                    key={user.id}
                    id={user.id}
                    name={user.name}
                    age={user.age}
                />
            )}
        </div>
    )
}

export default UsersList;