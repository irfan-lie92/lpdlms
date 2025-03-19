import DashboardNavbar from "@/components/dashboard-navbar";
import CourseGrid from "@/components/course-grid";
import { redirect } from "next/navigation";
import { createClient } from "../../../../supabase/server";

export default async function CoursesPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <>
      <DashboardNavbar />
      <main className="w-full">
        <div className="container mx-auto px-4 py-8">
          <header className="mb-8">
            <h1 className="text-3xl font-bold">Kursus Saya</h1>
            <p className="text-muted-foreground">
              Jelajahi dan lanjutkan kursus yang telah Anda ikuti
            </p>
          </header>

          <CourseGrid />
        </div>
      </main>
    </>
  );
}
