"use client";
import Link from "next/link";
import Image from "next/image";
import { Search } from "lucide-react";
import { useAuth, UserButton } from "@clerk/nextjs";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Topbar = () => {
  const { userId } = useAuth();

  const topRoutes = [
    {
      label: "Instructor",
      path: "/instructor/courses",
    },
    {
      label: "Learning",
      path: "/learning",
    },
  ];

  return (
    <div className="flex justify-between items-center p-4 border-b">
      <Link href={"/"}>
        <Image src={"/logo.png"} height={65} width={115} alt="logo" />
      </Link>

      <div className="flex max-md:hidden w-[400px] ">
        <Input type="text" placeholder="Search for courses" />
        <Button className="ml-2">
          <Search />
        </Button>
      </div>

      <div className="flex gap-6 items-center">
        {topRoutes.map((route) => (
          <Link
            href={route.path}
            key={route.path}
            className="text-sm font-medium text-primary hover:text-primary/90"
          >
            {route.label}
          </Link>
        ))}
        {userId ? (
          <UserButton />
        ) : (
          <Button>
            <Link href="/sign-in">Sign In</Link>
          </Button>
        )}
      </div>
    </div>
  );
};

export default Topbar;
