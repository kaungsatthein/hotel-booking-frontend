"use client";

import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function NotFound() {
  const t = useTranslations("NotFound");
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="max-w-md w-full">
        <DotLottieReact
          src="https://lottie.host/a5dcf6b3-28e2-4b0e-ae19-731b626ef391/M26RhT8fej.lottie"
          loop
          autoplay
        />
      </div>

      <h1 className="mt-4 text-4xl font-bold tracking-tight text-center">
        {t("PageNotFound")}
      </h1>

      <p className="mt-4 text-lg text-center text-muted-foreground">
        {t("PageNotFoundDescription")}
      </p>

      <Button onClick={() => router.back()} className="mt-8">
        {t("GoBack")}
      </Button>
    </div>
  );
}
