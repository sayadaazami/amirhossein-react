import React, { useState } from "react";
import { actions as userActions } from "../../store/users/actions";
import { connect } from "react-redux";

function UsersList({ dispatch, users }) {
  function handleFetchUsers() {
    dispatch(userActions.getUsers());
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

export default connect((state) => ({
  users: state.users.getUsers.data,
}))(UsersList);
