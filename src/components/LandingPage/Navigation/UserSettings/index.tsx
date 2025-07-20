import { Button } from "../../../ui/button";
import { LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
} from "../../../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../../../ui/avatar";
import Notifications from "./notifications";
import Appearance from "./appearance";
import Language from "./language";
import { getTranslations } from "next-intl/server";

const user = {
  name: "Mya Hmue",
  email: "myahmue302@gmail.com",
  image: "https://github.com/shadcn.png",
};

export default async function UserSetting() {
  const t = await getTranslations("UserSettings");
  return (
    <div className="flex flex-row items-center">
      <Notifications />

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="link" className="cursor-pointer">
            <Avatar className="h-8 w-8">
              <AvatarImage src={user.image} alt={user.name} />
              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            {/* <ChevronDown /> */}
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuItem className="flex flex-col items-start">
            <span>{user.name}</span>
            <span className="text-xs text-muted-foreground">{user.email}</span>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuGroup>
            {/* Appearance */}
            <Appearance />
            {/* Language */}
            <Language />
          </DropdownMenuGroup>

          <DropdownMenuSeparator />

          <DropdownMenuItem className="text-red-600 ">
            <LogOut className=" w-4 h-4" />
            <span>{t("Logout")}</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
