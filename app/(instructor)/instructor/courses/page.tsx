import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";

import { Button } from "@/components/ui/button";

const CoursesPage = async () => {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <div className="px-6 py-4">
      <Button>
        <Link href="/instructor/create-course">Create New Course</Link>
      </Button>
    </div>
  );
};

export default CoursesPage;
