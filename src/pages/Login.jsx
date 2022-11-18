import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // eslint-disable-next-line
  const { user, logIn } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  
  return (
    <div>
      <div className="w-full h-screen">
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[600px] mx-auto text-white ">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Log In</h1>
              {error ? <p className='p-3 bg-red-00 mt-5'>{error}</p> : null}
              <form onSubmit={handleSubmit} 
              className="w-full flex flex-col py-4 "
              name="login-form"
              >
                <input
                  className="p-3 bg-gray-700 rouded-2xl"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                  required
                  onChange={e => setEmail(e.target.value)}
                />
                <input
                  className="p-3 my-4 bg-gray-700 rouded-2xl"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  required
                  minLength="6"
                  onChange={e => setPassword(e.target.value)}
                />
                <button className="bg-red-700 py-3 my-6 font-bold">
                  Log In
                </button>
                <div className="flex justify-between items-center text-sm text-gray-600">
                </div>
                <p className="py-8">
                  <span className="text-gray-600">Don't have an account?</span>{" "}
                  <Link to="/register">Register</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
