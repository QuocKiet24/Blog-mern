import { useState } from "react";
import { Mail, Lock, Loader } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    // await login(email, password);
    // navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-20rem)]">
      <div className="max-w-md w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden">
        <div className="p-8">
          <h2 className="form-title">Welcome back</h2>

          <form onSubmit={handleLogin}>
            <Input
              icon={Mail}
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              icon={Lock}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="flex items-center mb-6">
              <Link
                to={"/forgot-password"}
                className="text-sm  hover:underline"
              >
                Forgot password?
              </Link>
            </div>
            {/* {error && <p className="text-red-500 font-semibold mb-2">{error}</p>} */}
            <button
              className="w-full bg-blue-800 px-4 py-2 text-white font-medium rounded-xl"
              type="submit"
            >
              {/* {isLoading ? (
            <Loader className=" animate-spin mx-auto" size={24} />
          ) : (
            "Login"
          )} */}
              Login
            </button>
          </form>
        </div>
        <div className="px-8 py-4 bg-gray-900 bg-opacity-50 flex justify-center">
          <p className="text-sm text-gray-400">
            Don&apos;t have an account?{" "}
            <Link to={"/register"} className="text-blue-400 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
