import React, { useState, useRef } from "react";
import CustomDropDown from "../utils/CustomDropDown";
import CustomInput from "../utils/CustomInput";
import "./create.css";
import {
  getDomainOptionsArray,
  getGenderOptionsArray,
  getStatesArray,
  validator,
} from "./helper";

function Create({
  defaultFirstName,
  defaultLastName,
  defaultEmail,
  defaultMobileNumber,
  defaultDOB,
  defaultGender,
  defaultDomain,
  defaultAddress,
  defaultCity,
  defaultState,
}) {
  const genderOptions = getGenderOptionsArray();
  const domainOptions = getDomainOptionsArray();

  const [selectedGender, setSelectedGender] = useState(defaultGender);
  const [selectedDomain, setSelectedDomain] = useState(defaultDomain);
  const [selectedState, setSelectedState] = useState(defaultState);

  // for newly created employee by the backend.
  const [errorMsg, setErrorMsg] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);

  // for keep track of validity of data entered by user
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [mobileNumberError, setMobileNumberError] = useState(false);
  const [dobError, setDOBError] = useState(false);
  const [genderError, setGenderError] = useState(false);
  const [domainError, setDomainError] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const [cityError, setCityError] = useState(false);
  const [stateError, setStateError] = useState(false);

  const inputFirstNameRef = useRef(null);
  const inputLastNameRef = useRef(null);
  const inputEmailRef = useRef(null);
  const inputMobileNumberRef = useRef(null);
  const inputDOBRef = useRef(null);
  const inputAddressRef = useRef(null);
  const inputCityRef = useRef(null);

  const onGenderChange = (event) => {
    // console.log(`Selected Gender is ${event.target.value}`);
    setGenderError(false);
    setSelectedGender(event.target.value);
  };

  const onDomainChange = (event) => {
    // console.log(`Selected Domain is ${event.target.value}`);
    setDomainError(false);
    setSelectedDomain(event.target.value);
  };

  const onStatesChange = (event) => {
    // console.log(`Selected Staet is ${event.target.value}`);
    setStateError(false);
    setSelectedState(event.target.value);
  };

  const onFirstNameChange = (event) => {
    setFirstNameError(false);
  };

  const onLastNameChange = (event) => {
    setLastNameError(false);
  };

  const onEmailChange = (event) => {
    setEmailError(false);
  };

  const onMobileNumberChange = (event) => {
    setMobileNumberError(false);
  };

  const onDOBChange = (event) => {
    setDOBError(false);
  };

  const onAddressChange = (event) => {
    setAddressError(false);
  };

  const onCityChange = (event) => {
    setCityError(false);
  };

  const submitHandler = (event) => {
    event.preventDefault(); // Stops page from reloading, this is default behaviour of forms.

    // console.log(inputFirstNameRef.current.value);

    // collect all the values from form
    // console.log(`First Name: ${inputFirstNameRef.current.value}`);
    // console.log(`Last Name: ${inputLastNameRef.current.value}`);
    // console.log(`Email: ${inputEmailRef.current.value}`);
    // console.log(`Mobile Number: ${inputMobileNumberRef.current.value}`);
    // console.log(`DOB: ${inputDOBRef.current.value}`);
    // console.log(`Gender: ${selectedGender}`);
    // console.log(`Domain: ${selectedDomain}`);
    // console.log(`Address: ${inputAddressRef.current.value}`);
    // console.log(`State: ${selectedState}`);
    // console.log(`City: ${inputCityRef.current.value}`);

    const firstName = inputFirstNameRef.current.value.trim();
    const lastName = inputLastNameRef.current.value.trim();
    const email = inputEmailRef.current.value.trim();
    const mobileNumber = inputMobileNumberRef.current.value.trim();
    const dob = inputDOBRef.current.value.trim();
    const gender = selectedGender.trim();
    const domain = selectedDomain.trim();
    const address = inputAddressRef.current.value.trim();
    const city = inputCityRef.current.value.trim();
    const state = selectedState.trim();

    // perform validation
    const dataToBeValidated = [
      firstName,
      lastName,
      email,
      mobileNumber,
      dob,
      gender,
      domain,
      address,
      city,
      state,
    ];

    const errorStateFunctions = [
      setFirstNameError,
      setLastNameError,
      setEmailError,
      setMobileNumberError,
      setDOBError,
      setGenderError,
      setDomainError,
      setAddressError,
      setCityError,
      setStateError,
    ];

    const errorIndex = validator(dataToBeValidated); // performs some basic validations

    if (errorIndex < dataToBeValidated.length) {
      errorStateFunctions[errorIndex](true);
      // console.log("Error");
      alert("Fill the form carefully.");
      return;
    }
    // else no error, good to make api call to backend

    // make api call for backend (spring boot server)
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: dataToBeValidated[0],
        lastName: dataToBeValidated[1],
        email: dataToBeValidated[2],
        mobileNumber: dataToBeValidated[3],
        dob: dataToBeValidated[4],
        gender: dataToBeValidated[5],
        domian: dataToBeValidated[6],
        address: dataToBeValidated[7],
        city: dataToBeValidated[8],
        state: dataToBeValidated[9],
      }),
    };

    fetch("http://localhost:8080/api/v1/create", requestOptions)
      .then((response) => {
        if (response.status == 409) setErrorMsg("Duplicate Email");
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setSuccessMsg("New Employee Created Successfully.");

        // 5sec for user to know the status
        setTimeout(() => {
          setSuccessMsg(null);
        }, 5000);
        reset();
      })
      .catch((error) => {
        console.log(`Error occured ${error.toString()}`);
        if (!errorMsg) setErrorMsg(error.toString());

        // 5sec for user to know the status
        setTimeout(() => {
          setErrorMsg(null);
        }, 5000);
      });

    // give a responce to the end-user about success or failure.
    // done

    // reset the form
  };

  const reset = () => {
    inputFirstNameRef.current.value = "";
    inputLastNameRef.current.value = "";
    inputEmailRef.current.value = "";
    inputMobileNumberRef.current.value = "";
    inputDOBRef.current.value = "";
    inputAddressRef.current.value = "";
    inputCityRef.current.value = "";
    setSelectedGender("Choose");
    setSelectedDomain("Choose");
    setSelectedState("Choose");
  };

  return (
    <React.Fragment>
      <form
        onSubmit={submitHandler}
        className="container mystyle-create-from-wrapper"
      >
        <div className="form-row row">
          <CustomInput
            title="First Name"
            id="inputFirstName"
            type="text"
            columnClass="col-md-6"
            ref={inputFirstNameRef}
            isError={firstNameError}
            onChange={onFirstNameChange}
            defaultValue={defaultFirstName}
          />

          <CustomInput
            title="Last Name"
            id="inputLastName"
            type="text"
            columnClass="col-md-6"
            ref={inputLastNameRef}
            isError={lastNameError}
            onChange={onLastNameChange}
            defaultValue={defaultLastName}
          />
        </div>
        <div className="form-row row">
          <CustomInput
            title="Email"
            id="inputEmail"
            type="email"
            columnClass="col-md-6"
            ref={inputEmailRef}
            isError={emailError}
            onChange={onEmailChange}
            defaultValue={defaultEmail}
          />

          <CustomInput
            title="Mobile Number"
            id="inputMobileNumber"
            type="tel"
            columnClass="col-md-6"
            ref={inputMobileNumberRef}
            isError={mobileNumberError}
            onChange={onMobileNumberChange}
            defaultValue={defaultMobileNumber}
          />
        </div>
        <div className="form-row row">
          <CustomInput
            title="DOB"
            id="inputDOB"
            type="date"
            columnClass="col-md-6"
            ref={inputDOBRef}
            isError={dobError}
            onChange={onDOBChange}
            defaultValue={defaultDOB}
          />

          <CustomDropDown
            labelTitle="Gender"
            id="dropDowinForGender"
            options={genderOptions}
            onChange={onGenderChange}
            value={selectedGender}
            isError={genderError}
            defaultValue={selectedGender}
          />
          <CustomDropDown
            labelTitle="Domain"
            id="dropDowinForDomain"
            options={domainOptions}
            onChange={onDomainChange}
            value={selectedDomain}
            isError={domainError}
            defaultValue={selectedDomain}
          />
        </div>

        <CustomInput
          title="Address"
          id="inputAddress"
          type="text"
          columnClass=""
          ref={inputAddressRef}
          isError={addressError}
          onChange={onAddressChange}
          defaultValue={defaultAddress}
        />

        <div className="form-row row">
          <div className="form-group col-md-6">
            <label htmlFor="inputState">State</label>
            <select
              onChange={onStatesChange}
              id="inputState"
              className="form-control"
              style={{ borderColor: stateError && "red" }}
              value={selectedState}
              // defaultValue={selectedState === "" ? "Choose" : selectedState}
            >
              <option value="Choose" defaultValue>
                Choose
              </option>
              {getStatesArray().map((state) => (
                <option key={state} value={state}>
                  {" "}
                  {state}{" "}
                </option>
              ))}
            </select>
          </div>

          <CustomInput
            title="City"
            id="inputCity"
            type="text"
            columnClass="col-md-6"
            ref={inputCityRef}
            onChange={onCityChange}
            isError={cityError}
            defaultValue={defaultCity}
          />
        </div>
        {/* <div className="form-group">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="gridCheck" />
          <label className="form-check-label" for="gridCheck">
            Check me out
          </label>
        </div>
      </div> */}
        <button type="submit" className="btn btn-primary">
          Create
        </button>
        {errorMsg && <div className="error">Error occured {errorMsg} </div>}
        {successMsg && <div className="success">{successMsg}</div>}
      </form>
    </React.Fragment>
  );
}

export default Create;
