import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Context } from "../Context/CategoryContext";

export default function Login() {
  const { login } = useContext(Context);
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setMessage("");
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      setLoading(true);
      setMessage("");
      await login(user);
      navigate("/");
    } catch (error) {
      console.error(error);
      setMessage("Failed to Log in");
    }
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
            value="Log in"
            disabled={loading}
          />
        </form>
        <p className="mt-5">
          Does not yet have an account?
          <Link to="/signup" className="text-brand-dark">
            {" "}
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
