import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="container d-flex flex-column justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <h2>Welcome to Lazzpee</h2>
      <div className="mt-4">
        <Link to="/ProductPage" className="btn btn-primary">
          Proceed to Shopping
        </Link>
      </div>
    </div>
  );
};

export default Home;
