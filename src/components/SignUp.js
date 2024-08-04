import React, { useState, useEffect } from "react";
import { auth, createUserProfileDocument } from "../firebase/Firebase.util";

const SignUp = () => {
  const initialValues = {
    displayName: "",
    email: "",
    password: "",
    password2: "",
  };

  const [formData, setFormData] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  let errorStatus = false;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = (data) => {
    const errors = {}
    const email_regex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
    if (!data.displayName) {
        errors.displayName = "Uername is required"
        //  setFormErrors({...formErrors, displayName: errors.displayName})
    }
    if (!data.email) {
        errors.email = "email is required"
        // setFormErrors({...formErrors, email: errors.email})
    } else if (!email_regex.test(data.email)) {
        errors.email = "Not a valid email format"
        // setFormErrors({...formErrors, email: errors.email})
    }
    if (!data.password) {
        errors.password = "Password is required"
        // setFormErrors({...formErrors, password: errors.password})
    }
    if (data.password !== data.password2) {
        errors.password2 = "Password does not match"
        // setFormErrors({...formErrors, password2: errors.password2})
    }
    // console.log(errors);

    setFormErrors(errors)

    // console.log(Object.entries(errors).length);
    if (Object.entries(errors).length > 0)
        errorStatus = true;



    return errors

    // setFormErrors(errors)
    // console.log(formErrors);
    // if(Object.entries(errors).length === 0)
    // return true
    // else return false

}

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData);

    const { displayName, email, password, password2} = formData

    validate(formData)

    if(!errorStatus) {
      try {
        const {user} = await auth.createUserWithEmailAndPassword(email, password)

       await createUserProfileDocument(user, {displayName})
       setFormData(initialValues)
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="w-2/5">
      <h2 className="text-4xl font-bold mb-6">I do not have an account</h2>
      <span>SignUp with your email and password</span>

      <form onSubmit={handleSubmit} className="flex flex-col space-y py-16 w-full">
        <input
          type="name"
          name="displayName"
          className="text-lg py-2.5 px-1.5 border-b mb-12 outline-none"
          placeholder="Display Name"
          value={formData.displayName}
          onChange={handleChange}
        />

        {/*<label>Email</label>*/}
        <input
          type="email"
          name="email"
          className="text-lg py-2.5 px-1.5 border-b mb-12 outline-none"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        {/*<label>Password</label>*/}
        <input
          type="password"
          name="password"
          autoComplete="off"
          className="text-lg py-2.5 px-1.5 border-b mb-12 outline-none"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password2"
          autoComplete="off"
          className="text-lg py-2.5 px-1.5 border-b mb-12 outline-none"
          placeholder="Confirm Password"
          value={formData.password2}
          onChange={handleChange}
        />

        <div className="flex items-start justify-between">
          <button
            type="submit"
            className="custom-button hover:bg-white hover:text-black hover:border-2 hover:border-black"
          >
            SignUp
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
