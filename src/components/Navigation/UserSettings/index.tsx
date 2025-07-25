"use client";
import { Button } from "../../ui/button";
import { LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
} from "../../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import Notifications from "./notifications";
import Appearance from "./appearance";
import Language from "./language";
import { useTranslations } from "next-intl";
import { useSession, signOut } from "next-auth/react";

export default function UserSetting() {
  const t = useTranslations("UserSettings");
  const { data: session } = useSession();

  // Use fallback user data if not authenticated
  const user = session?.user || {
    name: "Mya Hmue",
    email: "myahmue302@gmail.com",
    image: "https://github.com/shadcn.png",
  };

  const handleSignOut = async () => {
    await signOut({ redirect: false });
  };

  return (
    <div className="flex flex-row items-center">
      <Notifications />

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="link" className="cursor-pointer">
            <Avatar className="h-8 w-8">
              <AvatarImage src={user.image || ""} alt={user.name || "User"} />
              <AvatarFallback>
                {user.name?.charAt(0) || user.email?.charAt(0) || "U"}
              </AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuItem className="flex flex-col items-start">
            <span>{user.name || "Unknown User"}</span>
            <span className="text-xs text-muted-foreground">
              {user.email || "No email"}
            </span>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuGroup>
            {/* Appearance */}
            <Appearance />
            {/* Language */}
            <Language />
          </DropdownMenuGroup>

          <DropdownMenuSeparator />

          <DropdownMenuItem
            className="text-red-600 cursor-pointer"
            onClick={handleSignOut}
          >
            <LogOut className="w-4 h-4" />
            <span>{t("Logout")}</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
