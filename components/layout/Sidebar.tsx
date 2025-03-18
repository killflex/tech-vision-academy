"use client";

import Link from "next/link";
import { BarChart4, MonitorPlay } from "lucide-react";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathName = usePathname();

  const sideBarRoutes = [
    { icon: <MonitorPlay />, label: "Courses", path: "/instructor/courses" },
    {
      icon: <BarChart4 />,
      label: "Performance",
      path: "/instructor/performance",
    },
  ];

  return (
    <div className="max-sm:hidden flex flex-col w-64 border-r shadow-card p-3 gap-2 text-sm font-medium">
      {sideBarRoutes.map((route) => (
        <Link
          href={route.path}
          key={route.path}
          className={`flex items-center gap-2 p-3 rounded-md hover:bg-gray-100 ${
            pathName.startsWith(route.path) ? "bg-gray-100" : ""
          }`}
        >
          {route.icon}
          {route.label}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
