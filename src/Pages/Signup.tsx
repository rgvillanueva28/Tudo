import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Landing from "../Components/Landing";
import { AuthContext } from "../Context/AuthContext";

export default function Signup() {
  const { signup } = useContext(AuthContext);
  const navigate = useNavigate();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confPassword: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setMessage("");
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (user.password !== user.confPassword) {
      setMessage("Passwords do not match");
    } else {
      try {
        setMessage("");
        setLoading(true);
        signup(user);
        navigate("/");
      } catch (error) {
        console.log({ error });
        setMessage("Failed to create an account");
      }
    }

    setLoading(false);
  };

  return (
    <Landing>
      <div className="mx-auto my-auto shadow-2xl flex flex-col rounded-3xl  p-5 lg:p-10 bg-white">
        <h2 className="text-3xl font-bold text-center mb-5">Sign up</h2>
        <form className="flex flex-col lg:w-96" onSubmit={handleSubmit}>
          {message ? (
            <div className="rounded bg-warning p-2 border border-black mb-3">
              {message}
            </div>
          ) : null}
          <label htmlFor="firstName">First Name</label>
          <input
            className="rounded-md p-2 mb-3 border"
            type="text"
            name="firstName"
            placeholder="Juan"
            value={user.firstName}
            onChange={handleChange}
            required
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            className="rounded-md p-2 mb-3 border"
            type="text"
            name="lastName"
            placeholder="De La Cruz"
            value={user.lastName}
            onChange={handleChange}
            required
          />
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
          <label htmlFor="confPassword">Confirm Password</label>
          <input
            className="rounded-md p-2 mb-5 border"
            type="password"
            name="confPassword"
            placeholder="********"
            value={user.confPassword}
            onChange={handleChange}
            required
          />
          <input
            disabled={loading}
            className="rounded-md bg-brand-dark text-white p-2 cursor-pointer"
            type="submit"
            value="Sign up"
          />
        </form>
        <p className="mt-5">
          Already have an account?
          <Link to="/login" className="text-brand-dark">
            {" "}
            Login
          </Link>
        </p>
      </div>
    </Landing>
  );
}
