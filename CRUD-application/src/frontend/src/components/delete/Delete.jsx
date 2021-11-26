import React, { useState, useRef } from "react";
import "./delete.css";

function Delete() {
  const [empID, setEmpID] = useState("");
  const inputEmpIDRef = useRef(null);

  const empIDDeleteSubmitHandler = (event) => {
    event.preventDefault();
    setEmpID(inputEmpIDRef.current.value);

    // make API call here

    // if empID is valid than serve with delete with value default values

    // else show wrong ID message.
  };

  return (
    <div className="myStyle-delete-wrapper">
      <form onSubmit={empIDDeleteSubmitHandler}>
        <div className="mb-3">
          <label htmlFor="inputEmployeeIDForDelete" className="form-label">
            Emplyoyee ID
          </label>
          <input
            type="tel"
            className="form-control"
            id="inputEmployeeIDForDelete"
            aria-describedby="emailHelp"
            ref={inputEmpIDRef}
          />
          <div id="emailHelp" className="form-text">
            Provide valid employee id.
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Delete
        </button>
      </form>
    </div>
  );
}

export default Delete;
