import AboutImg from "../../assets/About.png";

const HomePage2 = () => {
  return (
    <div className="w-full min-h-[70vh] flex justify-center items-center my-3 md:my-20 px-4">
      
      <div className="w-full md:w-4/5 border border-dashed border-gray-900 rounded-tr-3xl rounded-bl-3xl flex flex-col text-sm sm:text-base md:text-lg p-6 sm:p-8 md:p-10 gap-6 md:gap-10 py-10 md:py-14">
        
        {/* TEXT 1 */}
        <p>
          Hello, I'm{" "}
          <span className="font-bold text-[#009185]">
            Mukesh Choudhary
          </span>
          , the creator of Savixo. I started Savixo to combine my interest in
          development with the universal love for food and cooking.
        </p>

        {/* TEXT 2 */}
        <p>
          <span className="font-bold text-[#009185]">Savixo</span> is a recipe
          community designed to help food lovers discover and share amazing
          recipes. The platform allows users to explore different dishes, learn
          new cooking ideas, and contribute their own recipes to inspire others.
          The main goal of Savixo is to build a simple and modern space where
          people who love cooking can connect, learn, and grow together.
        </p>

        {/* IMAGE */}
        <div className="flex justify-center sm:justify-end">
          <img
            className="h-[60px] sm:h-[70px] md:h-[80px] object-contain"
            src={AboutImg}
            alt="About"
          />
        </div>

      </div>
    </div>
  );
};

export default HomePage2;