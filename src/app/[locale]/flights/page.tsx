import FlightFilterPage from "@/components/FlightFilterPage";
import Image from "next/image";

const Flights = () => {
  return (
    <>
      <div className=" w-full h-56 relative">
        <Image
          src={"https://images.unsplash.com/photo-1583435292794-4803a56c5043"}
          fill
          alt="Hero Image"
          className="object-cover"
        />
      </div>
      <FlightFilterPage />
    </>
  );
};

export default Flights;
