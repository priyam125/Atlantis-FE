import React, { useState } from "react";
import { auth, signInWithGoogle } from "../firebase/Firebase.util";

const Login = () => {
  const initialData = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialData);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = formData

    auth.signInWithEmailAndPassword(email, password)
      .then(() =>setFormData(initialData))
      .catch(error => console.log(error))

  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="w-2/5">
      <div className="text-4xl font-bold mb-6">I already have an account</div>
      <span className="">Sign in with your email and password</span>

      <form onSubmit={handleSubmit} className="flex flex-col  py-16 w-full">
        {/*<label>Email</label>*/}
        <input
          type="email"
          name="email"
          className="text-lg py-2.5 px-1.5 border-b mb-16 outline-none"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        {/*<label>Password</label>*/}
        <input
          type="password"
          name="password"
          autoComplete="off"
          className="text-lg py-2.5 px-1.5 border-b mb-16 outline-none"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />

        <div className="flex items-start justify-between">
          <button
            type="submit"
            className="custom-button hover:bg-white hover:text-black hover:border-2 hover:border-black"
          >
            SignIn
          </button>
          <button
            onClick={signInWithGoogle}
            className="google-button hover:bg-blue-400 hover:text-black"
          >
            SignIn with Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
