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
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const Language = () => {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || "en";
  const [language, setLanguage] = useState(currentLocale);

  const t = useTranslations("UserSettings");

  const handleChange = (value: string) => {
    setLanguage(value);
    const segments = pathname.split("/");
    segments[1] = value;
    router.push(segments.join("/"));
  };

  const languageOptions = [
    { value: "en", label: t("English") },
    { value: "mm", label: t("Myanmar") },
  ];

  return (
    <DropdownMenuSub>
      <DropdownMenuSubTrigger>
        <Globe className="mr-2 w-4 h-4" />
        <span>{t("Language")}</span>
      </DropdownMenuSubTrigger>
      <DropdownMenuPortal>
        <DropdownMenuSubContent>
          <DropdownMenuRadioGroup value={language} onValueChange={handleChange}>
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
