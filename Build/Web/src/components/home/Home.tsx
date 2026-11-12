import Navbar from "../navbar/Navbar";
import AppSection from "./AppSection";
import ChefIdentity from "./ChefIdentity";
import Footer from "./Footer";
import HomePage1 from "./HomePage1";
import HomePage2 from "./HomePage2";
import Reward from "./Reward";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomePage1 />
      <HomePage2 />
      <AppSection />
      <ChefIdentity />
      <Reward />
      <Footer />
    </div>
  );
};

export default Home;
