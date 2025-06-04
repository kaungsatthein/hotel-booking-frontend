import { Button } from "@/components/ui/button";
import { LogIn, ScanFace } from "lucide-react";

const UserSignUp = () => {
  return (
    <div className="flex flex-row items-center gap-2">
      <Button variant="link" size={"sm"}>
        <div className="flex items-center gap-2">
          <LogIn />
          Login
        </div>
      </Button>
      <Button variant="default" size={"sm"}>
        <div className="flex items-center gap-2">
          <ScanFace />
          Sign Up
        </div>
      </Button>
    </div>
  );
};

export default UserSignUp;
