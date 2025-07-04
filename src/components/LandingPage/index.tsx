import MainNav from "./Navigation";
import Hero from "./Hero";

const LandingPage = () => {
  return (
    <div>
      <MainNav />
      <div className="px-0 py-0 lg:px-8 lg:py-6">
        <Hero />
      </div>
    </div>
  );
};

export default LandingPage;
