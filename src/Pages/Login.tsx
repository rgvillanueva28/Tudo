import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Login() {
  const history = useHistory();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e: any) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setMessage("");
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log({ user });
    history.push("/");
  };

  return (
    <div className="flex flex-col flex-1">
      <div className="mx-4 md:mx-auto my-auto md:w-96 shadow-2xl flex flex-col rounded-3xl p-5 md:p-10">
        <h1 className="text-5xl font-bold text-center mb-5">TUDO</h1>
        <h2 className="text-3xl font-bold text-center mb-5">Login</h2>
        <form className="flex flex-col " onSubmit={handleSubmit}>
          {message ? (
            <div className="rounded bg-warning p-2 border border-black mb-3">
              {message}
            </div>
          ) : null}
          <label htmlFor="email">Email</label>
          <input
            className="rounded-md p-2 mb-3 border"
            type="text"
            name="email"
            placeholder="jdelcruz@gmail.com"
            value={user.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            className="rounded-md p-2 mb-3 border"
            type="password"
            name="password"
            placeholder="********"
            value={user.password}
            onChange={handleChange}
            required
          />
          <input
            className="rounded-md bg-brand-dark text-white p-2 cursor-pointer"
            type="submit"
            value="Sign up"
          />
        </form>
      </div>
    </div>
  );
}
