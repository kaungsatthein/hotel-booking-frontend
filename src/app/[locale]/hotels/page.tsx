import { HotelFilterPage } from "@/components";
import Image from "next/image";

const Hotels = () => {
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
      <HotelFilterPage />
    </>
  );
};

export default Hotels;
