"use client";
import Link from "next/link";
import {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../ui/navigation-menu";
import {
  BookmarkCheck,
  Bus,
  Hotel,
  House,
  TicketsPlane,
  Menu,
} from "lucide-react";
import { NavLinkProps } from "./props.type";
import UserSetting from "./UserSettings";
import UserSignUp from "./user-signup";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function MainNav() {
  const isAuthenticated = true; // Replace with your auth logic
  const t = useTranslations("Navigation");
  const pathname = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const navLinks: NavLinkProps[] = [
    {
      name: t("Home"),
      href: "/",
      icon: House,
    },
    {
      name: t("Hotels"),
      href: "/hotels",
      icon: Hotel,
    },
    {
      name: t("Flights"),
      href: "/flights",
      icon: TicketsPlane,
    },
    {
      name: t("Buses"),
      href: "/bus",
      icon: Bus,
    },
    {
      name: t("MyBookings"),
      href: "/my-bookings",
      icon: BookmarkCheck,
    },
  ];

  const isActive = (href: string) => {
    const pathWithoutLocale = pathname.replace(/^\/[^/]+/, "") || "/";
    return pathWithoutLocale === href;
  };

  const handleLinkClick = () => {
    setIsDrawerOpen(false);
  };

  return (
    <nav className=" sticky w-full top-0 z-50 bg-background/80 backdrop-blur-lg border-b supports-[backdrop-filter]:bg-background/60">
      <div className="flex flex-row items-center justify-between h-16 px-4 lg:px-8">
        <Link
          href="/"
          className="text-2xl font-dm-sans font-bold text-primary font-sans"
        >
          Travel Booking
        </Link>
        {/* laptop view */}
        <div className="hidden lg:flex items-center gap-2">
          <NavigationMenu>
            <NavigationMenuList className="flex flex-row gap-2">
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.name}>
                  <Link
                    href={link.href}
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "flex flex-row items-start gap-2",
                      isActive(link.href) && " bg-primary text-secondary"
                    )}
                  >
                    <link.icon className="h-4 w-4" />
                    <span>{link.name}</span>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center">
          {isAuthenticated ? <UserSetting /> : <UserSignUp />}

          <Drawer
            direction="right"
            open={isDrawerOpen}
            onOpenChange={setIsDrawerOpen}
          >
            <DrawerTrigger asChild>
              <Button variant="outline" size={"sm"} className="lg:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Our Services</DrawerTitle>
                <DrawerDescription>
                  Please select your choice.
                </DrawerDescription>
              </DrawerHeader>
              <div>
                <NavigationMenu>
                  <NavigationMenuList className="flex flex-col items-start gap-2 ml-4">
                    {navLinks.map((link) => (
                      <NavigationMenuItem key={link.name}>
                        <Link
                          href={link.href}
                          onClick={handleLinkClick}
                          className={cn(
                            navigationMenuTriggerStyle(),
                            "flex flex-row items-start gap-2",
                            isActive(link.href) && "bg-primary"
                          )}
                        >
                          <link.icon className="h-4 w-4" />
                          <span>{link.name}</span>
                        </Link>
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </nav>
  );
}
