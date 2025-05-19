import React, { useState } from "react";
import { Link } from "react-router-dom";
import GoogleIcon from "../../assets/GoogleIcon.png";
import CommonSideBar from "../CommonSideBar";
import { Eye, EyeOff } from "lucide-react"; // Eye icons
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const backendurl = "https://physiohub.onrender.com/api/v1";

function SignUp() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    password: "",
    mobile: "",
    confirmPassword:""
  });

  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigator = useNavigate();
  const [message, setMessage] = useState();
  const [isLoading, setIsLoading] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ""
      });
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {...errors};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    }

    else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email";
      valid = false;
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
      valid = false;
    }
    else if (!/^\d{10}$/.test(formData.mobile))
      newErrors.mobile = "Enter a valid 10-digit mobile number";

    if (!formData.password) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      valid = false;
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
      valid = false;
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      valid = false;
    }

      
    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsLoading(true);

      const userData = {
        name: formData.fullName,
        email: formData.email,
        password: formData.password,
        mobileNumber: formData.mobile,
        role: "user",
      };

      const res = axios.post(`${backendurl}/user/register`, userData);
      res.then(response => {  
        if (response.data.message) {
          setMessage(response?.data?.message)
        }
        console.log('Login successful:', response);
        navigator("/verifyemail", { state: { purpose: "emailVerification" } });
        console.log(purpose);
        setIsLoading(false);
      })
        .catch(error => {
          if (error.response && error.response.data && error.response.data.errorMessage) {
          setMessage(error?.response.data?.errorMessage.message)
          }
          console.log('Login failed:', error);
          navigator("/login")
      })
      




      console.log('Form data to be submitted:', userData);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };



  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen bg-white">
      <CommonSideBar />

      <div className="flex-1 flex justify-center items-center p-6">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold mb-2">Sign Up</h1>
          <p className="text-gray-500 mb-6">
            Join our community and start your learning journey today!
          </p>

          <form onSubmit={handleSubmit}>
            {/* Full Name */}
            <label className="block mb-1">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="input"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm">{errors.fullName}</p>
            )}

            {/* Email */}
            <label className="block mt-4 mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="input"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}

            {/* Mobile */}
            <label className="block mt-4 mb-1">Mobile No.</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Enter your mobile number"
              className="input"
            />
            {errors.mobile && (
              <p className="text-red-500 text-sm">{errors.mobile}</p>
            )}

            {/* Password */}
            <label className="block mt-4 mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a password"
                className="input pr-10"
              />
              <span
                className="absolute top-2.5 right-3 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </span>
            </div>
            <p className="text-sm text-gray-500">
              Must be at least 6 characters
            </p>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}

            {/* Confirm Password */}
            <label className="block mt-4 mb-1">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Re-enter your password"
              className="input"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full h-10 ${isLoading ? "bg-[#B57FF1]" : "bg-[#9333EA] hover:bg-[#7E22CE]"}
               mt-6 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium cursor-pointer
               transition-colors font-semibold `}
            >
              {isLoading ? (<>
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
                  </>):("Create Account")}
            </button>

            {/* Divider */}
            <p className="text-center mt-4 text-gray-500">or</p>

            {/* Google Signup */}
            <button
              type="button"
              className="w-full h-10 mt-3 border border-gray-300 rounded-lg flex items-center justify-center gap-2 font-medium text-sm"
            >
              <img src={GoogleIcon} alt="Google" className="h-5 w-5" />
              Sign Up with Google
            </button>

            {/* Login Link */}
            <p className="text-center mt-4 text-sm">
              Already have an account?{" "}
              <Link to="/login" className="text-purple-600 font-medium">
                Log in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
