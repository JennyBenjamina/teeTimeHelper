import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GenerateTeeTimes from './Pages/GenerateTeeTimes';
import LandingPage from './Pages/LandingPage';
import LoginPage from './Pages/LoginPage';
import NotFound from './Pages/NotFound.js';
import RegisterPage from './Pages/RegisterPage';
import MyNav from './Components/MyNav';
import Home from './Pages/Home';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <BrowserRouter>
      <MyNav />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/generate_exams" element={<GenerateTeeTimes />} />
        <Route path="/home" element={<Home />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
