import { motion } from "framer-motion";

const AppSection = () => {
  return (
    <div className="w-full flex justify-center items-center my-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="w-4/5 bg-gradient-to-r from-green-100 to-[#009185] rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-8"
      >
        {/* LEFT CONTENT */}
        <div className="w-full md:w-1/2">
          <p className="text-3xl font-bold mb-4">
            Discover Recipes on the Savixo App 🍲
          </p>

          <p className="text-lg mb-6">
            Explore thousands of recipes, like your favorites, and connect with
            top chefs from around the community.
          </p>

          <ul className="mb-6 space-y-2 text-md">
            <li>🔥 Browse trending recipes</li>
            <li>❤️ Like and save your favorites</li>
            <li>👨‍🍳 Follow top creators</li>
          </ul>

          {/* BUTTON */}
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-black text-white px-6 py-3 rounded-full font-semibold shadow-md"
          >
            Download App
          </motion.a>
        </div>

        {/* RIGHT IMAGE (APP PREVIEW) */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img
            src="/app-preview.png" // replace with your app screenshot
            alt="Savixo App mobile frame homeoage"
            className="w-[250px] md:w-[300px] rounded-lg shadow-lg"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AppSection;
