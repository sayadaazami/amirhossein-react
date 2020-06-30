import React, { useState } from "react";
import { actions as userActions } from "../../store/users/actions";
import { connect, useSelector, useDispatch } from "react-redux";

function UsersList() {
  const users = useSelector((state) => state.users.getUsers);
  const dispatch = useDispatch();

  console.log(users);

  function handleFetchUsers() {
    dispatch(userActions.getUsers());
  }

  return (
    <section>
      <button disabled={users.loading} onClick={handleFetchUsers}>
        {users.loading ? "Loading..." : "Fetch"}
      </button>

      {users.data && (
        <ul>
          {users.data.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}

      {users.error && <h2>{users.error.toString()}</h2>}
    </section>
  );
}

export default UsersList;
