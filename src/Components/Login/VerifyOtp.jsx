import React,{useState, useEffect} from 'react'
import LogoLight from "../../assets/logo-on-light.png";
import CommonSideBar from '../CommonSideBar';
import { useLocation, useNavigate } from 'react-router-dom';


function VerifyOtp() {

  const [otp, setotp] = useState(["", "", "", "", "", ""])
  const [oldemail, setoldEmail] = useState("");
  const navigate = useNavigate();
  // const { email ,purpose} = useLocation().state;
  const location = useLocation();
  const email = location?.state?.email || "";
  const purpose = location?.state?.purpose || "";


  useEffect(() => {
    setoldEmail(email);
  }, [email]);

  const handleOtpChange = (e, index) => {
    const { value } = e.target;

    if (!/^[0-9]?$/.test(value)) return;

    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setotp(updatedOtp);

    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleVerifyOtp = async () => {
    const enterdOtp = otp.join("");

    if (enterdOtp.length !== 6 || !email) {
      alert("Please enter a valid email and 6-digit OTP.");
      return;
    }

    try {
      const response = await fetch("https://physiohub.onrender.com/api/v1/user/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ email: oldemail, otp: enterdOtp, purpose }),
        
      });
      console.log(oldemail), console.log(enterdOtp), console.log(purpose);


      navigate("/login");
        const data = await response.json();
      console.log("Response from OTP verification API:", data);

    } catch (error) {
      console.error("Error verifying OTP:", error);
    }
  }; 


  return (
    <div>
      <div className="flex mt-[50px]">
        {/* <div className="mt-[15px] ml-[45px] bg-[linear-gradient(to_right,_rgba(156,125,243,1),_rgba(114,64,253,1))] w-[600px] rounded-xl  text-white h-[650px]">
          <div className="w-[256px] h-[68px] pt-[24px] pl-[28px]">
            <img src={LogoDark} alt="" />
          </div>
          <div className="w-[520px] h-[726.28px] pt-[50px] pl-[82px]">
            <div className="w-[520px] h-[175px] gap-[20px]">
              <h1 className="text-[28px] font-bold">
                Build stronger recovery programs.
              </h1>
              <p className="text-[18px] font-medium w-[442px] h-[56px] mt-[20px]">
                Learn how to design effective and safe recovery routines for all
                kinds of patients.
              </p>
            </div>
            <div className="w-[520px] h-[487.28px]  ml-[27px] flex">
              <div>
                <img className="w-[231px] h-[235px]" src={OverTime} alt="" />
                <img
                  className="w-[100px]"
                  //    src={musclePain}
                  alt=""
                />
                <img
                  className="w-[261px] h-[220px] mt-[-70px] ml-[-15px]"
                  // src={PerformaceTime}
                  alt=""
                />
              </div>
              <img
                className="w-[211px] h-[212px] mt-[70px] ml-[-80px]"
                src={QuizScore}
                alt=""
              />
              <LottiePlayer animationFile={Happy} />
            </div>
          </div>
        </div> */}
        <CommonSideBar />

        <div className="w-[480px] h-[650px] mt-[15px] ml-[120px] flex flex-col justify-center items-center bg-gray-100 p-6 rounded shadow-[inset_2px_2px_0px_0px_white,inset_-2px_-2px_0px_0px_#a3a3a3] border-none outline-none">
          <div>
            <div className="w-[380px] h-[100px] ">
              <img
                src={LogoLight}
                alt=""
                className="w-[200px] m-auto mt-[10px]"
              />
              <h1 className="text-[30px] font-normal w-[150px] ml-[125px] mt-[20px]">
                Verify OTP
              </h1>
            </div>
            <div className="w-[380px] h-[392px] mt-[70px]">
              <div className="w-[380px] h-[188px]">
                <h3 className="text-[14px] m-auto text-center">
                  Enter the OTP sent to
                </h3>
                <div className="m-auto">
                  <input
                    type="email"
                    placeholder="Please Enter your email"
                    className="border border-black w-full h-[30px]"
                    value={oldemail}
                    readOnly
                  />
                </div>
                <div className="h-[50px] w-[380px] borde flex justify-between items-center mt-[30px]">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      id={`otp-${index}`}
                      type="text"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOtpChange(e, index)} // 🔥 this is the magic!
                      className="h-[50px] w-[50px] border border-black rounded-[5px] text-center text-xl"
                    />
                  ))}
                </div>
                <div className="w-[380px]">
                  <h3 className="text-[18px] font-normal text-center mt-[30px]">
                    Time left :
                    <span className="text-[rgba(114,64,253,1)]"> 2:06s</span>
                  </h3>
                </div>
              </div>
              <div className="w-[380px] text-center">
                <button className="text-[16px] bg-[rgba(114,64,253,1)] text-white h-[42px] w-[100px] rounded-[12px] "
                  onClick={handleVerifyOtp}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerifyOtp
