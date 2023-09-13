import { useState } from "react";

export default function UserSignUp() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="p-10 flex justify-center items-center">
      <form className="w-full max-w-lg footer1 p-8 rounded-lg">
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
              className="py-3 px-4 block w-full shadow-sm text-secondary focus:outline-none border-gray-300 rounded-md"
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
              className="py-3 px-4 block w-full shadow-sm text-secondary focus:outline-none border-gray-300 rounded-md"
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
            className="py-3 px-4 block w-full shadow-sm text-secondary focus:outline-none border-gray-300 rounded-md"
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
              className="py-3 px-4 block w-full shadow-sm text-secondary focus:outline-none border-gray-300 rounded-md"
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
              className="py-3 px-4 block w-full shadow-sm text-secondary focus:outline-none border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div className="flex justify-center mt-8">
  <div id="submit"
    className="px-4 py-2 font-medium text-white overflow-hidden cursor-pointer focus:outline-none focus:bg-teal-900 transition-color">
    Submit
  </div>
</div>
      </form>
    </div>
  );
}
