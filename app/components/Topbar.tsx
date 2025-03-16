import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const Topbar = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <Link href={"/"}>
        <Image src={"/logo.png"} height={100} width={200} alt="logo" />
      </Link>
    </div>
  );
};

export default Topbar;
