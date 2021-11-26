// Validator Function
const validator = (dataToBeValidated) => {
  for (let i = 0; i < dataToBeValidated.length; i++) {
    if (
      !dataToBeValidated[i] ||
      dataToBeValidated[i] === "" ||
      dataToBeValidated[i] === "Choose"
    ) {
      return i;
    }
  }
  return dataToBeValidated.length;
};

// states array
const getStatesArray = () => {
  return [
    "Andhra Pradesh",
    "Andaman and Nicobar Islands",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chandigarh",
    "Chhattisgarh",
    "Dadar and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];
};

// gender options array
const getGenderOptionsArray = () => {
  return ["Male", "Female", "Others"];
};

// domain options array
const getDomainOptionsArray = () => {
  return [
    "Intern",
    "Jr. Developer",
    "Sr. Developer",
    "Tech Lead",
    "Human Resource",
    "DBA",
    "Others",
  ];
};

// onChange handlers
// const onGenderChange = (event) => {
//   // console.log(`Selected Gender is ${event.target.value}`);
//   setGenderError(false);
//   setSelectedGender(event.target.value);
// };

// const onDomainChange = (event) => {
//   // console.log(`Selected Domain is ${event.target.value}`);
//   setDomainError(false);
//   setSelectedDomain(event.target.value);
// };

// const onStatesChange = (event) => {
//   // console.log(`Selected Staet is ${event.target.value}`);
//   setStateError(false);
//   setSelectedState(event.target.value);
// };

// const onFirstNameChange = (event) => {
//   setFirstNameError(false);
// };

// const onLastNameChange = (event) => {
//   setLastNameError(false);
// };

// const onEmailChange = (event) => {
//   setEmailError(false);
// };

// const onMobileNumberChange = (event) => {
//   setMobileNumberError(false);
// };

// const onDOBChange = (event) => {
//   setDOBError(false);
// };

// const onAddressChange = (event) => {
//   setAddressError(false);
// };

// const onCityChange = (event) => {
//   setCityError(false);
// };

export {
  validator,
  getStatesArray,
  getGenderOptionsArray,
  getDomainOptionsArray,
  //   onGenderChange,
  //   onDomainChange,
  //   onStatesChange,
  //   onFirstNameChange,
  //   onLastNameChange,
  //   onEmailChange,
  //   onMobileNumberChange,
  //   onDOBChange,
  //   onAddressChange,
  //   onCityChange,
};
