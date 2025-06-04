import Link from "next/link";
import {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../ui/navigation-menu";
import { BookmarkCheck, Hotel, House } from "lucide-react";
import { NavLinkProps } from "./props.type";
import UserSetting from "./UserSettings";
import UserSignUp from "./user-signup";

const navLinks: NavLinkProps[] = [
  {
    name: "Home",
    href: "/",
    icon: House,
  },
  {
    name: "Hotels",
    href: "/hotels",
    icon: Hotel,
  },
  {
    name: "My Bookings",
    href: "/my-bookings",
    icon: BookmarkCheck,
  },
];

const MainNav = () => {
  const isAuthenticated = true; // Replace with your auth logic

  return (
    <nav className=" sticky w-full top-0 z-50 bg-background/80 backdrop-blur-lg border-b supports-[backdrop-filter]:bg-background/60">
      <div className="flex flex-row items-center justify-between h-16 px-16">
        <Link href="/" className="text-2xl font-bold text-primary">
          Hotel Booking
        </Link>

        <NavigationMenu>
          <NavigationMenuList className="flex flex-row gap-2">
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.name}>
                <Link
                  href={link.href}
                  className={
                    navigationMenuTriggerStyle() +
                    " flex flex-row items-start gap-2"
                  }
                >
                  <link.icon className="h-4 w-4" />
                  <span>{link.name}</span>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {isAuthenticated ? <UserSetting /> : <UserSignUp />}
      </div>
    </nav>
  );
};

export default MainNav;
