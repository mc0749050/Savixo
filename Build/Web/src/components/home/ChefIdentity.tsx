import { motion } from "framer-motion";
import ChefProfileImg from "../../assets/chefprofileimg.jpg";
const ChefIdentity = () => {
  return (
    <div className="w-full flex justify-center items-center my-24">
      <div className="w-4/5 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2"
        >
          <p className="text-4xl font-bold mb-4">Build Your Chef Identity 👨‍🍳</p>

          <p className="text-lg mb-6">
            On Savixo, every recipe you share builds your identity. Grow your
            profile, earn badges, and become a recognized chef in the community.
          </p>

          <ul className="space-y-3 text-md">
            <li>🔥 Start as a Rising Chef</li>
            <li>⚡ Level up with likes</li>
            <li>👑 Become a Legend</li>
          </ul>
        </motion.div>

        {/* RIGHT CARD */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="w-[300px] bg-white rounded-xl shadow-xl p-6 border border-gray-200"
          >
            {/* Profile */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-gray-300">
                <img src={ChefProfileImg} alt="user" />
              </div>
              <div>
                <p className="font-bold">Chef</p>
                <p className="text-sm text-gray-500">@savixo_chef</p>
              </div>
            </div>

            {/* Progress */}
            <div className="mb-4">
              <p className="text-sm mb-2">Level Progress</p>
              <div className="w-full h-2 bg-gray-200 rounded-full">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "70%" }}
                  transition={{ duration: 1 }}
                  className="h-2 bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full"
                ></motion.div>
              </div>
              <p className="text-xs mt-1 text-gray-500">7.2K / 10K Likes</p>
            </div>

            {/* Badges */}
            <div className="flex justify-between mt-6">
              {["🔥", "⚡", "👑"].map((icon, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5, scale: 1.2 }}
                  className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full text-xl"
                >
                  {icon}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ChefIdentity;
