import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUsername } from "../actions/auth.actions";
import AccountSection from "./AccountSection";

const UserContent = () => {
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.auth.userProfile);
  const userFirstName = useSelector(
    (state) => state.auth.userProfile?.firstName
  );
  const userLastName = useSelector((state) => state.auth.userProfile?.lastName);
  const [editMode, setEditMode] = useState(false);
  const [newUsername, setNewUsername] = useState(userProfile?.userName || "");
  const [error, setError] = useState("");

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleCancel = () => {
    setEditMode(false);
    setNewUsername(userProfile?.userName || ""); // Si modification sans clic sur save, laisse l'ancien pseudo
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newUsername.trim() === "") {
      setError("Username shouldn't be empty !");
      return;
    }
    if (newUsername.length > 16) {
      setError("Username must be 16 characters or less.");
      return;
    }
    setError("");
    dispatch(updateUsername(newUsername));
    setEditMode(false);
  };

  return (
    <div>
      <div className="wb-name">
        <h1>
          Welcome back
          <br />
          <p>{userProfile?.userName} !</p>
        </h1>
        {editMode ? (
          <form className="change-username-form" onSubmit={handleSubmit}>
            <p>First Name</p>
            <input
              className="readonly"
              type="text"
              value={userFirstName}
              disabled
            />
            <p>Last Name</p>
            <input
              className="readonly"
              type="text"
              value={userLastName}
              disabled
            />
            <p>Username</p>
            <input
              type="text"
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
            />
            {error && <div className="error-message">{error}</div>}
            <div className="submit-form">
              <button type="submit" className="save-btn">
                Save
              </button>
              <button
                type="button"
                className="cancel-btn"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <>
            <button className="edit-button" onClick={handleEditClick}>
              Edit Name
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default UserContent;
