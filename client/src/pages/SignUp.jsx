import { useState } from "react";

export default function UserSignUp() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <form className="ms-10">
        <h1 className="my-3 text-3xl font-medium">Sign Up</h1>
        <div className="flex w-full">
          {/* FIRST NAME */}
          <div className="w-1/5 pr-2">
            <label
              htmlFor="first"
              className="block text-lg font-medium text-white"
            >
              First Name:
            </label>
            <input
              value={first}
              name="first"
              onChange={(e) => setFirst(e.target.value)}
              type="text"
              placeholder="Enter your first name"
              className="w-full py-2 text-white border rounded shadow ps-3 pe-5"
            />
          </div>
          {/* LAST NAME */}
          <div className="w-1/5 ps-2">
            <label
              htmlFor="last"
              className="block text-lg font-medium text-white"
            >
              Last Name:
            </label>
            <input
              value={last}
              name="first"
              onChange={(e) => setLast(e.target.value)}
              type="text"
              placeholder="Enter your last name"
              className="w-full px-3 py-2 text-white border rounded shadow lg:w-full md:w-2/3"
            />
          </div>
        </div>
        {/* EMAIL */}
        <div className="mt-4">
          <label
            htmlFor="email"
            className="block text-lg font-medium text-white"
          >
            Email Address:
          </label>
          <input
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="example@gmail.com"
            className="w-2/5 px-3 py-2 text-white border rounded shadow"
          />
        </div>
        <div className="flex w-full mt-4 ">
          {/* PASSWORD */}
          <div className="w-1/5 pr-2 ">
            <label
              htmlFor="first"
              className="block text-lg font-medium text-white"
            >
              Password:
            </label>
            <input
              value={password}
              name="first"
              onChange={(e) => setPassword(e.target.value)}
              type="text"
              placeholder="Enter your first name"
              className="w-full py-2 text-white border rounded shadow ps-3 pe-5"
            />
          </div>
          {/* Phone Number */}
          <div className="w-1/5 ps-2">
            <label
              htmlFor="last"
              className="block text-lg font-medium text-white"
            >
              Phone Number:
            </label>
            <input
              value={phone}
              name="first"
              onChange={(e) => setPhone(e.target.value)}
              type="text"
              placeholder="Enter your last name"
              className="w-full px-3 py-2 text-white border rounded shadow lg:w-full md:w-2/3"
            />
          </div>
        </div>
        <button className="block px-4 py-2 mt-2 font-medium text-white duration-200 ease-in-out bg-blue-400 rounded hover:bg-blue-500 transition-color">
          Submit
        </button>
      </form>
    </div>
  );
}
