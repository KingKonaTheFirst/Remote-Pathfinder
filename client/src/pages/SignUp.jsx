import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../utils/mutations";
import Auth from "../utils/auth";

export default function SignUp() {
  const [formState, setFormState] = useState({
    first: "",
    last: "",
    email: "",
    password: "",
    phone: "",
  });

  // Mutation Hook
  const [createUser, { error, data }] = useMutation(CREATE_USER);

  // Handle input changes and update form data
  const handleInputChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await createUser({
        variables: { ...formState },
      });

      Auth.login(data.createUser.token);

      // Redirect to home page after successful login
      window.location.assign("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center p-5">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg p-8 bg-gray-800 rounded-lg"
      >
        <h1 className="mb-6 text-3xl font-medium text-center text-white">
          Sign Up
        </h1>

        <div className="flex gap-4">
          <div className="flex-1">
            <label
              htmlFor="first"
              className="block text-lg font-medium text-white"
            >
              First Name:
            </label>
            <input
              name="first"
              value={formState.first}
              onChange={handleInputChange}
              type="text"
              placeholder="Enter your first name"
              className="w-full px-3 py-2 mt-2 text-gray-900 bg-white rounded shadow focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex-1">
            <label
              htmlFor="last"
              className="block text-lg font-medium text-white"
            >
              Last Name:
            </label>
            <input
              value={formState.last}
              name="last"
              onChange={handleInputChange}
              type="text"
              placeholder="Enter your last name"
              className="w-full px-3 py-2 mt-2 text-gray-900 bg-white rounded shadow focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        <div className="mt-6">
          <label
            htmlFor="email"
            className="block text-lg font-medium text-white"
          >
            Email Address:
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

        <div className="flex gap-4 mt-6">
          <div className="flex-1">
            <label
              htmlFor="password"
              className="block text-lg font-medium text-white"
            >
              Password:
            </label>
            <input
              value={formState.password}
              name="password"
              onChange={handleInputChange}
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 mt-2 text-gray-900 bg-white rounded shadow focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex-1">
            <label
              htmlFor="phone"
              className="block text-lg font-medium text-white"
            >
              Phone #:
            </label>
            <input
              value={formState.phone}
              name="phone"
              onChange={handleInputChange}
              type="text"
              placeholder="Enter your phone number"
              className="w-full px-3 py-2 mt-2 text-gray-900 bg-white rounded shadow focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 mt-8 overflow-hidden font-medium text-white rounded cursor-pointer hover:teal-800 focus:outline-none focus:bg-teal-900 transition-color"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
