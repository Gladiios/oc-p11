import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Features from "../components/Features";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <Banner />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
