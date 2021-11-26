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

export default validator;
