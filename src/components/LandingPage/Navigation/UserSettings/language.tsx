"use client";
import {
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioItem,
} from "../../../ui/dropdown-menu";
import { Globe } from "lucide-react";
import { useState } from "react";

const languageOptions = [
  { value: "en", label: "English" },
  { value: "mm", label: "Burmese" },
];

const Language = () => {
  const [language, setLanguage] = useState("en");
  return (
    <DropdownMenuSub>
      <DropdownMenuSubTrigger>
        <Globe className="mr-2 w-4 h-4" />
        <span>Language</span>
      </DropdownMenuSubTrigger>
      <DropdownMenuPortal>
        <DropdownMenuSubContent>
          <DropdownMenuRadioGroup value={language} onValueChange={setLanguage}>
            {languageOptions.map((option) => (
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

export default Language;
