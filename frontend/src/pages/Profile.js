import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import UserContent from "../components/UserContent";
import AccountSection from "../components/AccountSection";

const Profile = () => {
  const accounts = [
    {
      title: "Argent Bank Checking (x8349)",
      amount: "$2,082.79",
      description: "Available Balance",
    },
    {
      title: "Argent Bank Savings (x6712)",
      amount: "$10,928.42",
      description: "Available Balance",
    },
    {
      title: "Argent Bank Credit Card (x8349)",
      amount: "$184.30",
      description: "Current Balance",
    },
  ];

  return (
    <div>
      <Header />
      <main className="main bg-dark">
        <UserContent />
        <h2 className="sr-only">Accounts</h2>
        {accounts.map((account, index) => (
          <AccountSection
            key={index}
            title={account.title}
            amount={account.amount}
            description={account.description}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
