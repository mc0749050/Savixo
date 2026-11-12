import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import RisingChef from "../../assets/RisingChef.png";
import MasterChef from "../../assets/MasterChef.png";
import LegendChef from "../../assets/LegendChef.png";

const Reward = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariant: Variants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="w-full flex justify-center items-center my-12 md:my-20 px-4">
      {/* Main Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-4/5 border border-black rounded-lg overflow-hidden"
      >
        {/* Header */}
        <div className="w-full h-[50px] sm:h-[60px] bg-gradient-to-r from-[#ffffff] via-[#009185] to-[#ffffff] flex justify-center items-center">
          <p className="text-lg sm:text-xl md:text-2xl font-bold text-white text-center px-2">
            Savixo Creator Rewards
          </p>
        </div>

        {/* Subtitle */}
        <div className="w-full flex justify-center items-center px-4">
          <p className="bg-[#FFE2BC] py-2 px-4 sm:px-8 md:px-16 my-6 md:my-8 rounded-full text-center text-xs sm:text-sm md:text-base">
            Share your recipes and earn recognition from the community.
          </p>
        </div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="w-full flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap justify-center items-stretch gap-6 px-4 md:px-6 pb-8"
        >
          {[
            {
              title: "Rising Chef",
              img: RisingChef,
              desc: "Get your first recipe to 1,000 likes and unlock your journey as a rising star in the Savixo kitchen.",
            },
            {
              title: "Master Chef",
              img: MasterChef,
              desc: "Reach 10,000 likes on a single recipe and prove your skills as a true master of flavors.",
            },
            {
              title: "Legend Chef",
              img: LegendChef,
              desc: "Hit 100,000 likes on a recipe and earn your place among Savixo’s legendary chefs.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={cardVariant}
              whileHover={{
                y: -10,
                scale: 1.03,
                boxShadow: "0px 15px 30px rgba(0,0,0,0.15)",
              }}
              transition={{ type: "spring", stiffness: 200 }}
              className="w-full sm:w-[48%] lg:w-1/4 border border-dashed border-black rounded-md p-4 flex flex-col items-center text-center min-h-[380px] cursor-pointer"
            >
              {/* Title */}
              <p className="text-lg sm:text-xl md:text-2xl font-bold my-4">
                {item.title}
              </p>

              {/* Image */}
              <motion.img
                src={item.img}
                alt={item.title}
                className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] my-4 object-contain"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Description */}
              <p className="text-xs sm:text-sm md:text-base mt-4 px-2">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Reward;
