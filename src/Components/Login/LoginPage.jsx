import React, { useState } from "react";
import CommonSideBar from "../CommonSideBar";
import { Link, NavLink, useNavigate } from "react-router-dom";
import GoogleIcon from "../../assets/GoogleIcon.png";
import axios from "axios";
import { ApiPostRequest } from "../../axios/commonRequest";

const backendUrl = "https://physiohub.onrender.com/api/v1";

const LoginPage = () => {
  const [message, setMessage] = useState("");
  const navigator = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Validate form
  const validateForm = () => {
    let valid = true;
    const newErrors = { email: "", password: "" };

    if (!formData.email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      valid = false;
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  // Handle form submit
  const handleLogin = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsLoading(true);

      const res = axios.post(`${backendUrl}/user/login`, formData);
      res
        .then((response) => {
          console.log(response);
          if (response.data.message) {
            setMessage(response?.data?.message)
          }
          if(response.data.is)
            console.log('Login successful:', response);
          navigator("/dashboard");
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error during login:", error);
          if (error.response.data.message) {
            setMessage(error.response.data.message);
          }
          if (error.response.data.message.includes("verify")) {
            console.log("hello");
            navigator("/verifyotp", {
              state: { purpose: "emailVerification" },
            });
          }
        });
      console.log(message);
      console.log(p)
    }
  };

  return (
    <div className="w-screen flex">
      <CommonSideBar />
      <div className="w-[380px] h-[700px] mt-[100px] ml-[120px]">
        <div className="w-[380px] h-[100px]">
          <h1 className="text-[30px] font-bold">Login to Your Account</h1>
          <p className="text-[rgba(73,93,121,1)]">
            Access your personalized dashboard by logging into your account.
            Enter your credentials below to get started.
          </p>
        </div>

        <form onSubmit={handleLogin}>
          <div className="w-[380px] h-[392px] mt-[20px]">
            <div className="w-[380px] h-[188px]">
              <h3 className="text-[18px] font-normal">Email Address</h3>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full h-[40px] border border-[rgba(73,93,121,1)] rounded-[8px] pl-[12px] mt-[9px]"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              <h3 className="text-[18px] font-normal mt-[20px]">Password</h3>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full h-[40px] border border-[rgba(73,93,121,1)] rounded-[8px] pl-[12px] mt-[9px]"
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>

            <NavLink className="text-[#7240fd] ml-[255px]" to={"/reset"}>
              Forgot Password?
            </NavLink>
            {message && <p className="text-red-500 text-xs mt-1">{message}</p>}
            <div>
              <button
                type="submit"
                disabled={isLoading}
                className={`flex items-center justify-center border-2 w-full p-2 ${
                  isLoading ? "bg-[#B57FF1]" : "bg-[#9333EA] hover:bg-[#7E22CE]"
                } text-white font-semibold rounded-xl cursor-pointer transition-colors`}
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  "Login"
                )}
              </button>

              <p className="text-center mt-[10px]">or</p>

              <button className="w-full h-[40px] rounded-[10px] mt-[10px] border border-solid border-[rgba(238, 242, 246, 1)] flex justify-center items-center font-medium text-[14px] gap-[10px]">
                <img src={GoogleIcon} alt="" />
                Continue with Google
              </button>

              <p className="text-[rgba(73,93,121,1)] mt-[10px] ml-[60px]">
                Don't have an account yet?{" "}
                <Link to={"/register"}>
                  <span className="text-[rgba(114,64,253,1)]">Sign Up</span>
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
