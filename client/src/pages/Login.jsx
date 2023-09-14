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
      console.log(data);

      // If successful, log in the user using the received token
      Auth.login(data.userLogin.token);

      // Redirect to home page after successful login
      window.location.assign("/");
    } catch (error) {
      console.error(error);
    }

    // Clear form values after submission
    /* setFormState({
      email: "",
      password: "",
    }); */
  };

  return (
    <div className="flex items-center justify-center p-5 mb-10">
      <form
        onSubmit={handleFormSubmit}
        className="flex items-center justify-center w-full max-w-xl p-8 rounded-lg shadow-md footer1"
      >
        <div className="w-3/4 md:w-2/3">
          <label
            htmlFor="email"
            className="block text-lg font-medium text-white"
          >
            Email:
          </label>
          <input
            value={formState.email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="example@gmail.com"
            className="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm text-secondary focus:outline-none"
          />
        </div>
        <div className="w-3/4 mt-4 md:w-2/3">
          <label
            htmlFor="email"
            className="block text-lg font-medium text-white"
          >
            Password:
          </label>
          <input
            value={formState.password}
            name="password"
            onChange={handleInputChange}
            type="password"
            placeholder="*********"
            className="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm text-secondary focus:outline-none"
          />
        </div>

        <div className="flex justify-center mt-8">
          <div
            id="submit"
            className="px-4 py-2 overflow-hidden font-medium text-white cursor-pointer focus:outline-none focus:bg-teal-900 transition-color"
          >
            <button>Submit</button>
          </div>
        </div>
      </form>
    </div>
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
