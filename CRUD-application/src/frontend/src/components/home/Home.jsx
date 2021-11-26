import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="jumbotron mystyle-home-wrapper">
      <h1 className="h4">Employee Management Application</h1>
      <div className="home-helper-wrapper">
        <p className="lead">
          This is a simple employee management application, which enables the
          end-user to perform the following actions.
        </p>
        <ol>
          <Link to="/create" className="link">
            <li>Create new employee</li>
          </Link>

          <Link to="/update" className="link">
            <li>Update data of existing employee</li>
          </Link>

          <Link to="delete" className="link">
            <li>Delete existing emmployee</li>
          </Link>

          <Link to="/getAll" className="link">
            <li>Get all existing employees</li>
          </Link>
        </ol>
      </div>

      <hr className="my-4" />
      <p>
        The frontend is powered by React, and the backend leverages power from
        spring boot.
      </p>
      <p className="lead">
        <a
          className="btn btn-primary btn-lg"
          href="https://www.google.com"
          role="button"
          target="_blank"
          rel="noreferrer"
        >
          Learn more
        </a>
      </p>
    </div>
  );
}

export default Home;
