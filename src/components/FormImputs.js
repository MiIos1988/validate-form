import React from "react";
import "./formImputs.css";

const FormImputs = ({ input, value, onchange }) => {
  // const { label, onChange, id, ...inputProps } = props;
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
      <span>{input.errorMesage}</span>
    </div>
  );
};

export default FormImputs;
