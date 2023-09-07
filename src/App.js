import { useState } from "react";
import "./App.css";
import FormImputs from "./components/FormImputs";


function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
      errorMessage: "Username must be 3 - 30 characters",
      require: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Email",
      errorMessage: "email must be  valid",
      require: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
      errorMessage: "password must be longer than 5 characters",
      require: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      label: "Confirm Password",
      errorMessage: "password was not repeated",
      require: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onchange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  console.log(values);
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <FormImputs
            key={input.id}
            input={input}
            value={values[input.name]}
            onchange={onchange}
          />
        ))}

        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
