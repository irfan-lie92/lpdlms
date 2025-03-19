import DashboardNavbar from "@/components/dashboard-navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Download, Share2 } from "lucide-react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { createClient } from "../../../../supabase/server";

export default async function CertificatesPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  // Mock certificates data
  const certificates = [
    {
      id: "1",
      title: "Introduction to Web Development",
      issueDate: "June 15, 2024",
      instructor: "John Doe",
      organization: "EduLMS Academy",
      imageUrl:
        "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=800&q=80",
    },
    {
      id: "2",
      title: "Advanced JavaScript Programming",
      issueDate: "May 20, 2024",
      instructor: "Jane Smith",
      organization: "EduLMS Academy",
      imageUrl:
        "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?w=800&q=80",
    },
  ];

  // Mock in-progress courses
  const inProgressCourses = [
    {
      id: "3",
      title: "Data Science Fundamentals",
      progress: 65,
      estimatedCompletion: "August 10, 2024",
    },
    {
      id: "4",
      title: "UI/UX Design Principles",
      progress: 40,
      estimatedCompletion: "September 5, 2024",
    },
  ];

  return (
    <>
      <DashboardNavbar />
      <main className="w-full">
        <div className="container mx-auto px-4 py-8">
          <header className="mb-8">
            <h1 className="text-3xl font-bold">Sertifikat Saya</h1>
            <p className="text-muted-foreground">
              Lihat dan unduh sertifikat yang telah Anda peroleh
            </p>
          </header>

          {/* Earned Certificates */}
          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-6">
              Sertifikat yang Diperoleh
            </h2>

            {certificates.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certificates.map((certificate) => (
                  <Card key={certificate.id} className="overflow-hidden">
                    <div className="relative h-48 w-full">
                      <Image
                        src={certificate.imageUrl}
                        alt={certificate.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-3 right-3 bg-primary text-white p-2 rounded-full">
                        <Award className="h-5 w-5" />
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-1">
                        {certificate.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {certificate.organization}
                      </p>

                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">
                            Pengajar:
                          </span>
                          <span>{certificate.instructor}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">
                            Tanggal Terbit:
                          </span>
                          <span>{certificate.issueDate}</span>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 gap-1"
                        >
                          <Download className="h-4 w-4" />
                          Unduh
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 gap-1"
                        >
                          <Share2 className="h-4 w-4" />
                          Bagikan
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  <Award className="h-12 w-12 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-medium mb-2">
                  Belum Ada Sertifikat
                </h3>
                <p className="text-muted-foreground mb-4">
                  Selesaikan kursus untuk mendapatkan sertifikat pertama Anda
                </p>
                <Button>Jelajahi Kursus</Button>
              </Card>
            )}
          </section>

          {/* In Progress Certificates */}
          <section>
            <h2 className="text-xl font-semibold mb-6">
              Sertifikat dalam Proses
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {inProgressCourses.map((course) => (
                <Card key={course.id} className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-muted h-12 w-12 rounded-full flex items-center justify-center">
                      <Award className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <div>
                      <h3 className="font-medium">{course.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        Perkiraan selesai: {course.estimatedCompletion}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progres</span>
                      <span>{course.progress}%</span>
                    </div>
                    <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-primary h-full rounded-full"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
