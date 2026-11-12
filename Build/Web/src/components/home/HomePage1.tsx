import { motion } from "framer-motion";
import FoodImg from "../../assets/HomePageFoodSketchImage.png";

const HomePage1 = () => {
  return (
    <div className="w-full min-h-[90vh] flex justify-center items-center px-4">
      <div className="w-full md:w-4/5 min-h-[70vh] border border-dashed border-gray-900 rounded-3xl flex flex-col md:flex-row overflow-hidden">
        {/* LEFT */}
        <div className="left w-full md:w-2/5 flex justify-center items-center py-8 md:py-0 overflow-hidden">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{
              duration: 10,
              ease: "linear",
              repeat: Infinity,
            }}
            className="w-[clamp(200px,35vw,400px)] h-[clamp(200px,35vw,400px)] bg-gradient-to-tr from-green-100 via-green-200 to-green-300 rounded-full shadow-sm cursor-pointer"
          >
            <img
              className="w-full h-full object-cover rounded-full opacity-70"
              src={FoodImg}
              alt="Food"
            />
          </motion.div>
        </div>

        {/* RIGHT */}
        <div className="right w-full md:w-3/5 flex flex-col justify-center items-center px-4 md:px-0 text-center">
          {/* TITLE */}
          <div className="flex justify-center items-end w-full mb-6 md:mb-4">
            <p className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl flex flex-wrap justify-center">
              {"Cook. Share. Inspire.".split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={
                    char === "C" || char === "S" || char === "I"
                      ? "text-[#009185]"
                      : ""
                  }
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </p>
          </div>

          {/* DESCRIPTION */}
          <div className="flex w-full justify-center items-center mb-6">
            <p className="w-full sm:w-[80%] md:w-[60%] text-sm sm:text-base md:text-lg">
              Join the Savixo community to explore new recipes, share your
              cooking creations, and inspire food lovers everywhere.
            </p>
          </div>

          {/* BUTTON */}
          <div className="flex justify-center items-start w-full">
            <button className="py-2 px-6 font-bold text-black border border-[#585858] hover:text-white rounded-full shadow-md bg-gradient-to-r hover:from-[#009185] hover:to-[#032D2A] transition-all duration-300">
              Join Savixo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage1;
