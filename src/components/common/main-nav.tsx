import Link from "next/link";
import React from "react";

const MainNav = () => {
  return (
    <div>
      <Link href="/" className="text-2xl font-bold text-primary">
        Hotel Booking
      </Link>
    </div>
  );
};

export default MainNav;
