import React, { useState } from "react";
import { store } from "../../store";
import { actions as userActions } from "../../store/users/actions";

function UsersList() {
  const [users, setUsers] = useState([]);

  function handleFetchUsers() {
    store.subscribe(() => {
      const reduxState = store.getState();
      setUsers(reduxState.users.getUsers.data);
    });

    store.dispatch(userActions.getUsers());
  }

  return (
    <section>
      <button onClick={handleFetchUsers}>Fetch</button>

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </section>
  );
}

export default UsersList;
