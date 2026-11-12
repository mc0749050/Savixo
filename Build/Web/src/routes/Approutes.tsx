import { Routes, Route } from "react-router-dom";
import Home from "../components/home/Home";
import PageNotFound from "../components/pagenotfound/PageNotFound.tsx";
import Login from "../components/Auth/Login.tsx";
import Signup from "../components/Auth/Signup.tsx";
const Approutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

      </Routes>
    </>
  );
};

export default Approutes;
