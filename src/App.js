import { useState } from "react";
import "./App.css";
import FormImputs from "./components/FormImputs";

//sajt https://www.youtube.com/watch?v=tIdNeoHniEY&t=101s

function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    comfirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
      errorMesage: "Username must be 3 - 30 characters",
      require: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Emali",
      errorMesage: "email must be  valid",
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
      errorMesage: "password must be longer than 5 characters",
      require: true,
    },
    {
      id: 5,
      name: "comfirmPassword",
      type: "password",
      placeholder: "Comfirm Password",
      label: "Comfirm Password",
      errorMesage: "password was not repeated",
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
