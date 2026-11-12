import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <div className="w-full flex justify-center mt-4 md:mt-0">
        {/* MOBILE CONTAINER */}
        <div className="w-[95%] md:w-full bg-gray-900 md:bg-transparent rounded-full md:rounded-none shadow-md md:shadow-none px-4 md:px-0">
          <div className="flex w-full h-16 md:h-20">
            {/* LEFT SIDE */}
            <div className="h-full w-1/2 md:w-1/3 flex justify-start md:justify-center items-center pl-2 md:pl-0">
              <motion.p
                whileHover={{ scale: 1.1, rotate: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-2xl md:text-3xl text-white md:text-black font-bold cursor-pointer"
              >
                Sav<span className="text-[#009185]">i</span>xo
              </motion.p>
            </div>

            {/* RIGHT SIDE DESKTOP */}
            <div className="hidden md:flex h-full w-2/3 justify-center items-center">
              <nav className="flex h-full w-3/4 items-center justify-evenly text-lg text-black font-normal">
                <p className="cursor-pointer hover:scale-110 hover:font-[600] border-b-2 border-[#009185]">
                  Home
                </p>
                <p className="cursor-pointer hover:scale-110 hover:font-[600]">
                  Recipes
                </p>
                <p className="cursor-pointer hover:scale-110 hover:font-[600]">
                  Contact
                </p>
                <p className="cursor-pointer hover:scale-110 hover:font-[600]">
                  About Us
                </p>
                <motion.p
                  whileHover={{ scale: 0.9 }}
                  whileTap={{ scale: 0.95 }}
                  className="cursor-pointer shadow-lg bg-gradient-to-r from-[#009185] to-[#032D2A] rounded-full px-8 py-1.5 mx-2 flex justify-center items-center font-bold text-white hover:font-[600] hover:border-2 hover:border-[#009185] hover:text-black hover:from-white hover:to-white"
                >
                  Login
                </motion.p>
              </nav>
            </div>

            {/* MOBILE MENU BUTTON */}
            <div className="flex md:hidden w-1/2 justify-end items-center pr-2">
              <div
                className="flex flex-col gap-1 cursor-pointer"
                onClick={() => setOpen(!open)}
              >
                <motion.span
                  animate={open ? { rotate: 45, y: 6 } : {}}
                  className="w-6 h-[2px] bg-white"
                />
                <motion.span
                  animate={open ? { opacity: 0 } : {}}
                  className="w-6 h-[2px] bg-white"
                />
                <motion.span
                  animate={open ? { rotate: -45, y: -6 } : {}}
                  className="w-6 h-[2px] bg-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE DROPDOWN (NOT FULL SCREEN) */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="md:hidden absolute top-20 left-[5%] -translate-x-1/2 w-[90%] bg-white rounded-2xl shadow-xl p-6 z-50"
          >
            <div className="flex flex-col gap-5 text-center text-lg font-medium">
              <p className="hover:text-[#009185] cursor-pointer">Home</p>
              <p className="hover:text-[#009185] cursor-pointer">Recipes</p>
              <p className="hover:text-[#009185] cursor-pointer">Contact</p>
              <p className="hover:text-[#009185] cursor-pointer">About Us</p>

              <motion.button
                whileTap={{ scale: 0.95 }}
                className="mt-2 bg-gradient-to-r from-[#009185] to-[#032D2A] text-white py-2 rounded-full font-bold"
              >
                Login
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
