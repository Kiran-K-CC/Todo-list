import classnames from "classnames";
import React from "react";
import PropTypes from "prop-types";
import "./input.css";

const defaultProps = {
  className: "",
  placeholder: "",
  type: "text"
};

const propTypes = {
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string
};

const Input = ({ className, value, onChange, placeholder, type }) => {
  return (
    <input
      type={type}
      className={classnames({
        input: true,
        [className]: className
      })}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

Input.defaultProps = defaultProps;
Input.propTypes = propTypes;
export default Input;
