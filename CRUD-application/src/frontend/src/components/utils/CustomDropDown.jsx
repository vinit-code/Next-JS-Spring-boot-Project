import React from "react";

const CustomDropDown = React.forwardRef(
  (
    { labelTitle, id, options, onChange, value, isError, defaultValue },
    ref
  ) => {
    return (
      <div className="col-auto my-1">
        <label className="mr-sm-2" htmlFor={id}>
          {labelTitle}
        </label>{" "}
        <br />
        <select
          style={{ borderColor: isError && "red" }}
          onChange={onChange}
          ref={ref}
          className="custom-select mr-sm-2"
          id={id}
          value={value}
          // defaultValue={defaultValue === "" ? "Choose" : defaultValue}
        >
          <option value="Choose">Choose...</option>

          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  }
);

export default CustomDropDown;
