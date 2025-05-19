import React,{useState} from 'react'
import LogoDark from "../../assets/logo-on-dark.png";
import LogoLight from "../../assets/logo-on-light.png";
import OverTime from "../../assets/$40k.png";
import PerformanceTime from "../../assets/performanceOverTime.png";
import mailIcon from "../../assets/mailIcon.png";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import LottiePlayer from '../../animations/LottiePlayer';
import Happy from "../../animations/data/Happy.json"
import CommonSideBar from '../CommonSideBar';
import axios from "axios";


const VerifyEmail = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState();
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  // const { purpose } = useLocation().state;
  const location = useLocation();
  const purpose = location?.state?.purpose;

  console.log(location.state)


  const handleSendOTP = async () => {
    setIsLoading(true);
    console.log(email);
    try{
      const response = await axios.post("https://physiohub.onrender.com/api/v1/user/verify-email", { email });
      if (response) {
      setIsLoading(false);
      setErrors({});
      setSuccess(response.data.message);
      navigate("/verifyotp", {state:{email, purpose}});
      }
      
      console.log("Purpose:", purpose)
      
    } catch (error) {
      setIsLoading(false);
      setErrors(error.response.data.errorMessage.message);
    }
}

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
                Master your physiotherepist skills <br /> Now!
              </h1>
              <p className="text-[18px] font-medium w-[442px] h-[56px] mt-[20px]">
                Maximize your physiotherapy skills with our expert- <br /> led
                courses and tailored resources.
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
                  src={PerformanceTime}
                  alt=""
                />
              </div>
              <img
                className="w-[211px] h-[212px] mt-[70px] ml-[-80px]"
                src={QuizScore}
                alt=""
              />
              <LottiePlayer animationFile={Happy}/>
            </div>
          </div>
        </div> */}
        <CommonSideBar />

        <div className="w-[480px] h-[650px] mt-[15px] ml-[120px] flex flex-col justify-center items-center bg-gray-100 p-6 rounded shadow-[inset_2px_2px_0px_0px_white,inset_-2px_-2px_0px_0px_#a3a3a3]">
          <div className="w-[380px] h-[100px] ">
            <h1 className="text-[30px] font-bold ml-[35px]">
              Please verify your email
            </h1>
            <img
              src={LogoLight}
              alt=""
              className="w-[200px] m-auto mt-[10px]"
            />
            <img src={mailIcon} alt="" className="w-[50px] m-auto mt-[5px]" />
          </div>
          <div className="w-[380px] h-[392px] mt-[70px]">
            <div className="w-[380px] h-[188px]">
              <h3 className="text-[14px] pt-[10px]">
                we'll send a one time password(OTP) to your email Address.
              </h3>
              <input
                type="email"
                placeholder="Please Enter your email Adress"
                className="w-full h-[40px] border border-[rgba(73,93,121,1)] rounded-[8px] pl-[12px] mt-[20px]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <h3 className="text-[18px] font-normal mt-[30px]">
                OTP will be sent to this email.
              </h3>
            </div>
            {success && (
              <p className="mt-2 text-sm text-green-400 text-center">
                {success}
              </p>
            )}
            {errors && (
              <p className="mt-2 text-sm text-red-400 text-center">{errors}</p>
            )}
            <div>
              <button
                className="text-[16px] bg-[rgba(114,64,253,1)] text-white h-[42px] w-[380px] rounded-[12px] cursor-pointer"
                onClick={handleSendOTP}
              >
                Send OTP
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerifyEmail
