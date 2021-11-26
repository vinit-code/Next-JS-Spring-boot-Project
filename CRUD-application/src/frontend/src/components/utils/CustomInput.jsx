import React from "react";

const CustomInput = React.forwardRef(
  ({ title, id, type, columnClass, isError, onChange, defaultValue }, ref) => {
    const classes = `form-group ${columnClass}`;
    // default value = form-group col-md-6
    return (
      <div className={classes}>
        <label htmlFor={id}>{title}</label>
        <input
          style={{ borderColor: isError && "red" }}
          required
          defaultValue={defaultValue}
          ref={ref}
          type={type}
          className="form-control"
          id={id}
          placeholder={title}
          onChange={onChange}
        />
      </div>
    );
  }
);

export default CustomInput;
