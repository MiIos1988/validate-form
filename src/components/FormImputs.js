import React from "react";
import "./formImputs.css";

const FormImputs = ({ input, value, onchange }) => {
  return (
    <div className="formImput">
      <label>{input.label}</label>
      <input
        type={input.type}
        placeholder={input.placeholder}
        name={input.name}
        value={value}
        onChange={onchange}
        required
      />
      <span>{input.errorMessage}</span>
    </div>
  );
};

export default FormImputs;
