import { useState } from "react";
import { useMutation } from "@apollo/client";
import { USER_LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";

const Login = () => {
  // Define State Variables
  const [formState, setFormState] = useState({ email: "", password: "" });

  // Define login mutation and get necessary objects
  const [userLogin, { error, data }] = useMutation(USER_LOGIN);

  // name corresponds to name attribute - value is the new value
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // Handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // Call the login mutation with formState as variables
      const { data } = await userLogin({
        variables: { ...formState },
      });

      // If successful, log in the user using the received token
      Auth.login(data.login.token);

      // Redirect to home page after successful login
      window.location.assign("/");
      console.log("Login Successful");
    } catch (e) {
      console.log("Login NOT Successful");
      console.error(e);
    }

    // Clear form values after submission
    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex flex-col items-center my-10"
    >
      <div className="w-3/4 md:w-1/3">
        <label htmlFor="email" className="block text-lg font-medium text-white">
          Email:
        </label>
        <input
          value={formState.email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="example@gmail.com"
          className="w-full px-3 py-2 mt-2 text-gray-900 bg-white rounded shadow focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="w-3/4 mt-4 md:w-1/3">
        <label htmlFor="email" className="block text-lg font-medium text-white">
          Password:
        </label>
        <input
          value={formState.password}
          name="password"
          onChange={handleInputChange}
          type="password"
          placeholder="*********"
          className="w-full px-3 py-2 mt-2 text-gray-900 bg-white rounded shadow focus:outline-none focus:border-blue-500"
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 mt-8 overflow-hidden font-medium text-white rounded cursor-pointer w-36 hover:teal-800 focus:outline-none focus:bg-teal-900 transition-color"
      >
        Submit
      </button>
    </form>
  );
};

export default Login;

/* By placing name inside square brackets, 
you are telling JavaScript to use the value of 
the name variable as the property name in the 
resulting object. So, if name is "email," the 
property name will be "email," and if name is 
"password," the property name will be "password."
 */
