"use client";
import {
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioItem,
} from "../../../ui/dropdown-menu";
import { SunMoon } from "lucide-react";
import React, { useState } from "react";

const appearanceOptions = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
  { value: "system", label: "System" },
];

const Appearance = () => {
  const [theme, setTheme] = useState("light");
  return (
    <DropdownMenuSub>
      <DropdownMenuSubTrigger>
        <SunMoon className="mr-2 w-4 h-4" />
        <span>Appearance</span>
      </DropdownMenuSubTrigger>
      <DropdownMenuPortal>
        <DropdownMenuSubContent>
          <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
            {appearanceOptions.map((option) => (
              <DropdownMenuRadioItem key={option.value} value={option.value}>
                {option.label}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuSubContent>
      </DropdownMenuPortal>
    </DropdownMenuSub>
  );
};

export default Appearance;
