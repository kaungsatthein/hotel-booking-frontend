"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { ScanFace } from "lucide-react";

const UserSignUp = () => {
  const handleSignIn = async () => {
    await signIn("google");
  };

  return (
    <Button
      onClick={handleSignIn}
      variant="default"
      size={"sm"}
      className=" md: mr-2"
    >
      <div className="flex items-center gap-2">
        <ScanFace />
        Sign in with Google
      </div>
    </Button>
  );
};

export default UserSignUp;
