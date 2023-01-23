import "./App.css";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  age: yup.number().positive().integer().required(),
  password: yup.string().min(4).max(15).required(),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
  });

  const submitHandler =(data) =>{
    console.log(data);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit(submitHandler)}>
        <input type="text" {...register('firstName')}placeholder="Enter first name" />
        {errors.firstName && <p>First name is required.</p>}

        <input type="text" {...register('lastName')} placeholder="Enter last name" />
       
        {errors.lastName && <p>Last name is required.</p>}

        <input type="email" {...register('email')} placeholder="Enter email" />
        {errors.email && <p>Email required.</p>}

        <input type="text" {...register('age')}  placeholder="Enter age" />
        {errors.age && <p>Age required.</p>}

        <input type="password" {...register('password')} />

        {errors.password && <p>Password at least 4 character to max 15 character.</p>}

        <input type="password" {...register('confirmPassword')} />
        
        {errors.confirmPassword && <p>Password does not match.</p>}

        <input type="submit" id="submit" />
      </form>
    </div>
  );
}

export default App;
