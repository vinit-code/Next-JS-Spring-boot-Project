import React, { useState, useRef } from "react";
import "./update.css";

function Update() {
  const inputEmpIDRef = useRef(null);
  const empIDSubmitHandler = (event) => {
    event.preventDefault();

    const empID = inputEmpIDRef.current.value.trim();

    if (!empID || empID === "") {
    }

    console.log(empID);
    // make API call here
    // if empID is valid than serve with update with value default values
    // else show wrong ID message.
  };

  return (
    <div className="myStyle-update-wrapper">
      <form onSubmit={empIDSubmitHandler}>
        <div className="mb-3">
          <label htmlFor="inputEmployeeID" className="form-label">
            Emplyoyee ID
          </label>
          <input
            type="tel"
            className="form-control"
            id="inputEmployeeID"
            aria-describedby="emailHelp"
            ref={inputEmpIDRef}
          />
          <div id="emailHelp" className="form-text">
            Provide valid employee id.
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Proceed
        </button>
      </form>
    </div>
  );
}

export default Update;
