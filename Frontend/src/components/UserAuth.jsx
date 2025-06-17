import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerAction } from "../features/actions/userAction";
import { setUser, removeUser } from "../features/reducers/userSlice";

const UserAuth = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const handleRegister = async () => {
    const newUser = {
      email: "john@gmail.com",
      username: "johnd",
      password: "m38rmF$",
      name: {
        firstname: "john",
        lastname: "doe"
      },
      phone: "1-570-236-7033"
    };

    try {
      const res = await dispatch(registerAction(newUser));
      if (res?.payload) {
        dispatch(setUser(res.payload)); // if your registerAction returns response.data
      }
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  const handleLogout = () => {
    dispatch(removeUser());
  };

  return (
    <div style={{ border: "1px solid gray", padding: "1rem", marginTop: "1rem" }}>
      <h2>User Auth Component</h2>

      {user ? (
        <div>
          <p>Welcome, <strong>{user.username}</strong>!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>No user logged in</p>
          <button onClick={handleRegister}>Register User</button>
        </div>
      )}
    </div>
  );
};

export default UserAuth;
