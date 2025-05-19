import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Hero from "./Components/HeroPage/Hero";
import SignUp from "./Components/Login/SignUp";
import LoginPage from "./Components/Login/LoginPage";
import ResetPassword from "./Components/Login/ResetPassword";
import VerifyEmail from "./Components/Login/VerifyEmail";
import VerifyOtp from "./Components/Login/VerifyOtp";
import NavBar from "./Components/NavBar";
import MyDashbord from "./Components/Student/MyDashbord";
import TeacherBlog from "./Components/TeacherDashboard/TeacherBlog";
import TeacherQuiz from "./Components/TeacherDashboard/TeacherQuiz";
import TeacherFlashcards from "./Components/TeacherDashboard/TeacherFlashcards";
import TeacherCourse from "./Components/TeacherDashboard/TeacherCourse";
import TeacherLessons from "./Components/TeacherDashboard/TeacherLessons";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/herov1" element={<Hero />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="/verifyemail" element={<VerifyEmail />} />
        <Route path="/verifyotp" element={<VerifyOtp />} />
        <Route path="/studentdashboard" element={<MyDashbord />} />
        <Route path="/teacherdashboard" element={<TeacherBlog />} />
        <Route path="/TeacherBlog" element={<TeacherBlog />} />
        <Route path="/TeacherQuiz" element={<TeacherQuiz />} />
        <Route path="/TeacherFlashcards" element={<TeacherFlashcards />} />
        <Route path="/TeacherCourse" element={<TeacherCourse />} />
        <Route path="/TeacherLessons" element={<TeacherLessons/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
