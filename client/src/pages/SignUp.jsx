import { useState } from "react";

export default function UserSignUp() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="p-5 flex justify-center items-center">
      <form className="w-full max-w-lg bg-gray-800 p-8 rounded-lg">
        <h1 className="mb-6 text-3xl font-medium text-white text-center">Sign Up</h1>
        
        <div className="flex gap-4">
          <div className="flex-1">
            <label htmlFor="first" className="block text-lg font-medium text-white">First Name:</label>
            <input
              value={first}
              name="first"
              onChange={(e) => setFirst(e.target.value)}
              type="text"
              placeholder="Enter your first name"
              className="mt-2 w-full px-3 py-2 text-gray-900 bg-white rounded shadow focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex-1">
            <label htmlFor="last" className="block text-lg font-medium text-white">Last Name:</label>
            <input
              value={last}
              name="last"
              onChange={(e) => setLast(e.target.value)}
              type="text"
              placeholder="Enter your last name"
              className="mt-2 w-full px-3 py-2 text-gray-900 bg-white rounded shadow focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        <div className="mt-6">
          <label htmlFor="email" className="block text-lg font-medium text-white">Email Address:</label>
          <input
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="example@gmail.com"
            className="mt-2 w-full px-3 py-2 text-gray-900 bg-white rounded shadow focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex gap-4 mt-6">
          <div className="flex-1">
            <label htmlFor="password" className="block text-lg font-medium text-white">Password:</label>
            <input
              value={password}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter your password"
              className="mt-2 w-full px-3 py-2 text-gray-900 bg-white rounded shadow focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex-1">
            <label htmlFor="phone" className="block text-lg font-medium text-white">Phone #:</label>
            <input
              value={phone}
              name="phone"
              onChange={(e) => setPhone(e.target.value)}
              type="text"
              placeholder="Enter your phone number"
              className="mt-2 w-full px-3 py-2 text-gray-900 bg-white rounded shadow focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        <div 
  className="w-full mt-8 px-4 py-2 font-medium text-white overflow-hidden rounded cursor-pointer hover:teal-800 focus:outline-none focus:bg-teal-900 transition-color">
  Submit
</div>
      </form>
    </div>
  );
}
