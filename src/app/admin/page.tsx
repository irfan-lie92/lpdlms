import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { createClient } from "../../../supabase/server";
import { redirect } from "next/navigation";
import { BookOpen, Users, FileText, Award } from "lucide-react";

export default async function AdminDashboard() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  // Mock statistics data (in a real app, you would fetch this from your database)
  const stats = {
    totalUsers: 1250,
    totalCourses: 45,
    totalQuizzes: 120,
    totalCertificates: 780,
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-muted-foreground">
          Kelola semua aspek platform LMS LPD
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Total Pengguna
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalUsers}</div>
            <p className="text-xs text-muted-foreground">Pengguna terdaftar</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Kursus</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalCourses}</div>
            <p className="text-xs text-muted-foreground">Kursus aktif</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Kuis</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalQuizzes}</div>
            <p className="text-xs text-muted-foreground">Kuis dan penilaian</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Sertifikat</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalCertificates}</div>
            <p className="text-xs text-muted-foreground">
              Sertifikat diterbitkan
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Aktivitas Terbaru</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-b pb-2">
                <p className="font-medium">Pengguna Baru Terdaftar</p>
                <p className="text-sm text-muted-foreground">
                  15 pengguna baru dalam 24 jam terakhir
                </p>
              </div>
              <div className="border-b pb-2">
                <p className="font-medium">Kursus Baru Ditambahkan</p>
                <p className="text-sm text-muted-foreground">
                  3 kursus baru ditambahkan minggu ini
                </p>
              </div>
              <div className="border-b pb-2">
                <p className="font-medium">Kuis Diselesaikan</p>
                <p className="text-sm text-muted-foreground">
                  45 kuis diselesaikan hari ini
                </p>
              </div>
              <div>
                <p className="font-medium">Sertifikat Diterbitkan</p>
                <p className="text-sm text-muted-foreground">
                  12 sertifikat baru diterbitkan
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tugas Admin</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-b pb-2">
                <p className="font-medium">Persetujuan Instruktur</p>
                <p className="text-sm text-muted-foreground">
                  5 permintaan menunggu persetujuan
                </p>
              </div>
              <div className="border-b pb-2">
                <p className="font-medium">Ulasan Konten</p>
                <p className="text-sm text-muted-foreground">
                  8 kursus menunggu ulasan
                </p>
              </div>
              <div className="border-b pb-2">
                <p className="font-medium">Tiket Dukungan</p>
                <p className="text-sm text-muted-foreground">
                  12 tiket belum diselesaikan
                </p>
              </div>
              <div>
                <p className="font-medium">Pembaruan Sistem</p>
                <p className="text-sm text-muted-foreground">
                  Pembaruan terjadwal pada 15 Juli 2024
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
