import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Login = () => {
  const [mode, setMode] = useState("email");

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-gray-50 to-gray-200 px-4">
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white rounded-3xl shadow-xl p-6 sm:p-8"
      >
        
        {/* TITLE */}
        <div className="text-center mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold">
            Welcome to <span className="text-[#009185]">Savixo</span>
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            Login to continue your journey
          </p>
        </div>

        {/* GOOGLE LOGIN */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="w-full flex items-center justify-center gap-3 border py-2 rounded-full mb-5 hover:bg-gray-100 transition"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="google"
            className="w-5 h-5"
          />
          Continue with Google
        </motion.button>

        {/* DIVIDER */}
        <div className="flex items-center gap-3 my-4">
          <div className="flex-1 h-[1px] bg-gray-300" />
          <p className="text-sm text-gray-400">OR</p>
          <div className="flex-1 h-[1px] bg-gray-300" />
        </div>

        {/* TOGGLE BUTTONS */}
        <div className="flex bg-gray-100 rounded-full p-1 mb-6">
          {["email", "phone"].map((item) => (
            <button
              key={item}
              onClick={() => setMode(item)}
              className={`w-1/2 py-2 rounded-full text-sm font-medium transition ${
                mode === item
                  ? "bg-white shadow text-black"
                  : "text-gray-500"
              }`}
            >
              {item === "email" ? "Email" : "Mobile"}
            </button>
          ))}
        </div>

        {/* FORMS */}
        <AnimatePresence mode="wait">
          
          {/* EMAIL LOGIN */}
          {mode === "email" && (
            <motion.div
              key="email"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              className="flex flex-col gap-4"
            >
              <input
                type="email"
                placeholder="Email address"
                className="border px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-[#009185]"
              />
              <input
                type="password"
                placeholder="Password"
                className="border px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-[#009185]"
              />

              <div className="text-right text-sm text-[#009185] cursor-pointer">
                Forgot Password?
              </div>

              <motion.button
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#009185] to-[#032D2A] text-white py-2 rounded-full font-bold"
              >
                Login
              </motion.button>
            </motion.div>
          )}

          {/* PHONE LOGIN */}
          {mode === "phone" && (
            <motion.div
              key="phone"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              className="flex flex-col gap-4"
            >
              <input
                type="tel"
                placeholder="Mobile number"
                className="border px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-[#009185]"
              />

              <motion.button
                whileTap={{ scale: 0.95 }}
                className="bg-[#009185] text-white py-2 rounded-full font-bold"
              >
                Send OTP
              </motion.button>
            </motion.div>
          )}

        </AnimatePresence>

        {/* FOOTER */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Don’t have an account?{" "}
          <span className="text-[#009185] cursor-pointer font-medium">
            Sign up
          </span>
        </p>

      </motion.div>
    </div>
  );
};

export default Login;