import DashboardNavbar from "@/components/dashboard-navbar";
import CourseGrid from "@/components/course-grid";
import UpcomingDeadlines from "@/components/upcoming-deadlines";
import ProgressStatistics from "@/components/progress-stats";
import LearningPaths from "@/components/learning-paths";
import { Button } from "@/components/ui/button";
import { InfoIcon, BookOpen, ArrowRight } from "lucide-react";
import { redirect } from "next/navigation";
import { createClient } from "../../../supabase/server";
import Link from "next/link";

export default async function Dashboard() {
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
        <div className="container mx-auto px-4 py-8 flex flex-col gap-8">
          {/* Header Section */}
          <header className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold">Dashboard</h1>
              <Button asChild>
                <Link href="/dashboard/courses">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Lihat Semua Kursus
                </Link>
              </Button>
            </div>
            <div className="bg-secondary/50 text-sm p-3 px-4 rounded-lg text-muted-foreground flex gap-2 items-center">
              <InfoIcon size="14" />
              <span>
                Selamat datang di dashboard pembelajaran Anda. Pantau kemajuan
                dan lanjutkan kursus Anda.
              </span>
            </div>
          </header>

          {/* Recent Courses Section */}
          <section>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Lanjutkan Pembelajaran</h2>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/dashboard/courses" className="flex items-center">
                  Lihat Semua <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <CourseGrid />
            </div>
          </section>

          {/* Dashboard Widgets */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <UpcomingDeadlines />
            </div>
            <div>
              <ProgressStatistics />
            </div>
          </div>

          {/* Learning Paths */}
          <section>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">
                Jalur Pembelajaran yang Direkomendasikan
              </h2>
            </div>
            <LearningPaths />
          </section>
        </div>
      </main>
    </>
  );
}
