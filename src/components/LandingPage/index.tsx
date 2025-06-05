import MainNav from "./Navigation";
import Hero from "./Hero";

const LandingPage = () => {
  return (
    <div>
      <MainNav />
      <div className="px-16 py-6">
        <Hero />
      </div>
    </div>
  );
};

export default LandingPage;
