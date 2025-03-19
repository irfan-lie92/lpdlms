import DashboardNavbar from "@/components/dashboard-navbar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { BookOpen, FileText, MessageSquare, Play, User } from "lucide-react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { createClient } from "../../../../../supabase/server";

interface CoursePageProps {
  params: {
    courseId: string;
  };
}

export default async function CoursePage({ params }: CoursePageProps) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  // In a real app, you would fetch the course data from your database
  const courseId = params.courseId;

  // Mock course data
  const course = {
    id: courseId,
    title: "Matematika Dasar",
    description:
      "Pelajari konsep dasar matematika untuk tingkat SD dan SMP. Kursus ini akan membantu siswa memahami konsep-konsep penting dalam matematika dan mempersiapkan mereka untuk ujian.",
    instructor: "Budi Santoso",
    instructorTitle: "Guru Matematika Senior",
    instructorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=budi",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
    progress: 35,
    duration: "8 minggu",
    startDate: "15 Juli 2024",
    totalModules: 8,
    completedModules: 3,
    modules: [
      {
        id: "1",
        title: "Pengenalan Bilangan",
        duration: "45 menit",
        completed: true,
      },
      { id: "2", title: "Operasi Dasar", duration: "1 jam", completed: true },
      {
        id: "3",
        title: "Pecahan dan Desimal",
        duration: "1.5 jam",
        completed: true,
      },
      {
        id: "4",
        title: "Aljabar Dasar",
        duration: "1 jam",
        completed: false,
      },
      {
        id: "5",
        title: "Geometri Dasar",
        duration: "2 jam",
        completed: false,
      },
      {
        id: "6",
        title: "Pengukuran",
        duration: "1.5 jam",
        completed: false,
      },
      {
        id: "7",
        title: "Statistika Dasar",
        duration: "1 jam",
        completed: false,
      },
      {
        id: "8",
        title: "Proyek Akhir",
        duration: "3 jam",
        completed: false,
      },
    ],
    assessments: [
      {
        id: "1",
        title: "Kuis Bilangan",
        type: "kuis",
        dueDate: "20 Juli 2024",
        completed: true,
      },
      {
        id: "2",
        title: "Tugas Operasi Dasar",
        type: "tugas",
        dueDate: "25 Juli 2024",
        completed: false,
      },
      {
        id: "3",
        title: "Ujian Tengah Semester",
        type: "ujian",
        dueDate: "5 Agustus 2024",
        completed: false,
      },
      {
        id: "4",
        title: "Pengumpulan Proyek Akhir",
        type: "proyek",
        dueDate: "15 Agustus 2024",
        completed: false,
      },
    ],
  };

  return (
    <>
      <DashboardNavbar />
      <main className="w-full">
        <div className="container mx-auto px-4 py-8">
          {/* Course Header */}
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="relative h-64 md:h-auto md:w-1/3 rounded-xl overflow-hidden">
              <Image
                src={course.thumbnailUrl}
                alt={course.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="md:w-2/3 space-y-4">
              <h1 className="text-3xl font-bold">{course.title}</h1>
              <p className="text-muted-foreground">{course.description}</p>

              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 rounded-full overflow-hidden">
                  <Image
                    src={course.instructorAvatar}
                    alt={course.instructor}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">{course.instructor}</p>
                  <p className="text-sm text-muted-foreground">
                    {course.instructorTitle}
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <div className="flex justify-between text-sm mb-1">
                  <span>Progres Kursus</span>
                  <span>{course.progress}%</span>
                </div>
                <Progress value={course.progress} className="h-2" />
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <Button className="gap-2">
                  <Play size={16} />
                  Lanjutkan Belajar
                </Button>
                <Button variant="outline" className="gap-2">
                  <MessageSquare size={16} />
                  Forum Diskusi
                </Button>
              </div>
            </div>
          </div>

          {/* Course Content Tabs */}
          <Tabs defaultValue="content" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="content">Konten</TabsTrigger>
              <TabsTrigger value="assessments">Penilaian</TabsTrigger>
              <TabsTrigger value="resources">Sumber Belajar</TabsTrigger>
              <TabsTrigger value="discussion">Diskusi</TabsTrigger>
            </TabsList>

            <TabsContent value="content" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-1 mb-4">
                    <h3 className="text-lg font-medium">Modul Kursus</h3>
                    <p className="text-sm text-muted-foreground">
                      {course.completedModules} dari {course.totalModules} modul
                      selesai
                    </p>
                  </div>

                  <div className="space-y-3">
                    {course.modules.map((module) => (
                      <div
                        key={module.id}
                        className={`p-4 rounded-lg border flex justify-between items-center ${module.completed ? "bg-muted/50" : ""}`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`h-8 w-8 rounded-full flex items-center justify-center ${module.completed ? "bg-primary text-primary-foreground" : "bg-muted"}`}
                          >
                            {module.completed ? (
                              <BookOpen size={16} />
                            ) : (
                              <span>{module.id}</span>
                            )}
                          </div>
                          <div>
                            <h4 className="font-medium">{module.title}</h4>
                            <p className="text-sm text-muted-foreground">
                              {module.duration}
                            </p>
                          </div>
                        </div>
                        <Button
                          variant={module.completed ? "outline" : "default"}
                          size="sm"
                        >
                          {module.completed ? "Ulang" : "Mulai"}
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="assessments" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-1 mb-4">
                    <h3 className="text-lg font-medium">Penilaian & Kuis</h3>
                    <p className="text-sm text-muted-foreground">
                      Selesaikan penilaian ini untuk menguji pemahaman Anda
                    </p>
                  </div>

                  <div className="space-y-3">
                    {course.assessments.map((assessment) => (
                      <div
                        key={assessment.id}
                        className={`p-4 rounded-lg border flex justify-between items-center ${assessment.completed ? "bg-muted/50" : ""}`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`h-8 w-8 rounded-full flex items-center justify-center ${assessment.completed ? "bg-primary text-primary-foreground" : "bg-muted"}`}
                          >
                            <FileText size={16} />
                          </div>
                          <div>
                            <h4 className="font-medium">{assessment.title}</h4>
                            <div className="flex items-center gap-2">
                              <span className="text-xs px-2 py-0.5 bg-muted rounded-full">
                                {assessment.type}
                              </span>
                              <span className="text-sm text-muted-foreground">
                                Tenggat: {assessment.dueDate}
                              </span>
                            </div>
                          </div>
                        </div>
                        <Button
                          variant={assessment.completed ? "outline" : "default"}
                          size="sm"
                        >
                          {assessment.completed ? "Ulang" : "Mulai"}
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="resources" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-1 mb-4">
                    <h3 className="text-lg font-medium">Sumber Belajar</h3>
                    <p className="text-sm text-muted-foreground">
                      Materi tambahan untuk mendukung pembelajaran Anda
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="p-4 rounded-lg border flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full flex items-center justify-center bg-muted">
                          <FileText size={16} />
                        </div>
                        <div>
                          <h4 className="font-medium">Silabus Kursus</h4>
                          <p className="text-sm text-muted-foreground">
                            PDF, 2.3 MB
                          </p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Unduh
                      </Button>
                    </div>

                    <div className="p-4 rounded-lg border flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full flex items-center justify-center bg-muted">
                          <FileText size={16} />
                        </div>
                        <div>
                          <h4 className="font-medium">Rumus Matematika</h4>
                          <p className="text-sm text-muted-foreground">
                            PDF, 1.5 MB
                          </p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Unduh
                      </Button>
                    </div>

                    <div className="p-4 rounded-lg border flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full flex items-center justify-center bg-muted">
                          <FileText size={16} />
                        </div>
                        <div>
                          <h4 className="font-medium">
                            Panduan Belajar Matematika
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            PDF, 3.1 MB
                          </p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Unduh
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="discussion" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-1 mb-4">
                    <h3 className="text-lg font-medium">Forum Diskusi</h3>
                    <p className="text-sm text-muted-foreground">
                      Terhubung dengan pengajar dan sesama siswa
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 rounded-lg border">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="relative h-10 w-10 rounded-full overflow-hidden flex-shrink-0">
                          <Image
                            src="https://api.dicebear.com/7.x/avataaars/svg?seed=instructor"
                            alt="Instructor"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-medium">Budi Santoso</h4>
                            <span className="text-xs px-2 py-0.5 bg-blue-100 text-blue-800 rounded-full">
                              Pengajar
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Diposting 2 hari yang lalu
                          </p>
                        </div>
                      </div>
                      <div className="ml-13">
                        <h5 className="font-medium mb-2">
                          Selamat Datang di Kursus Matematika Dasar!
                        </h5>
                        <p className="text-sm text-muted-foreground mb-3">
                          Halo semuanya! Selamat datang di kursus Matematika
                          Dasar. Silakan perkenalkan diri Anda dan ajukan
                          pertanyaan yang mungkin Anda miliki tentang materi
                          kursus.
                        </p>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            Balas
                          </Button>
                          <Button variant="ghost" size="sm">
                            Lihat Balasan (12)
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 rounded-lg border">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="relative h-10 w-10 rounded-full overflow-hidden flex-shrink-0">
                          <Image
                            src="https://api.dicebear.com/7.x/avataaars/svg?seed=student1"
                            alt="Student"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-medium">Siti Rahayu</h4>
                            <span className="text-xs px-2 py-0.5 bg-gray-100 text-gray-800 rounded-full">
                              Siswa
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Diposting 1 hari yang lalu
                          </p>
                        </div>
                      </div>
                      <div className="ml-13">
                        <h5 className="font-medium mb-2">
                          Pertanyaan tentang Pecahan
                        </h5>
                        <p className="text-sm text-muted-foreground mb-3">
                          Saya kesulitan memahami cara mengubah pecahan menjadi
                          desimal dan sebaliknya. Bisakah seseorang menjelaskan
                          langkah-langkahnya dengan contoh?
                        </p>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            Balas
                          </Button>
                          <Button variant="ghost" size="sm">
                            Lihat Balasan (5)
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </>
  );
}
