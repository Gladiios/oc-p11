import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUsername } from "../actions/auth.actions";

const UserContent = () => {
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.auth.userProfile);
  const userFirstName = useSelector(
    (state) => state.auth.userProfile?.firstName
  );
  const userLastName = useSelector((state) => state.auth.userProfile?.lastName);
  const [editMode, setEditMode] = useState(false);
  const [newUsername, setNewUsername] = useState(userProfile?.userName || "");

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleCancel = () => {
    setEditMode(false);
    setNewUsername(userProfile?.userName || ""); // Si modification sans clic sur save, laisse l'ancien pseudo
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setNewUsername(userProfile?.userName || "");
    dispatch(updateUsername(newUsername));
    setEditMode(false);
  };

  return (
    <div>
      <main className="main bg-dark">
        <div className="wb-name">
          <h1>
            Welcome back
            <br />
            <p>{userProfile?.userName} !</p>
          </h1>
          {editMode ? (
            <form className="change-username-form" onSubmit={handleSubmit}>
              <input
                className="readonly"
                type="text"
                value={userFirstName}
                readOnly
              />
              <input
                className="readonly"
                type="text"
                value={userLastName}
                readOnly
              />
              <input
                type="text"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
              />
              <div>
                <button type="submit">Save</button>
                <button type="button" onClick={handleCancel}>
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
        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default UserContent;
