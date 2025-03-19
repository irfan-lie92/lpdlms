import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { createClient } from "../../../../supabase/server";
import { redirect } from "next/navigation";
import { Search, Plus, Edit, Trash2, Eye } from "lucide-react";

export default async function QuizzesPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  // In a real app, you would fetch quizzes from your database
  // For now, we'll use mock data
  const quizzes = [
    {
      id: "1",
      title: "Kuis Bilangan",
      course: "Matematika Dasar",
      type: "multiple_choice",
      questions: 10,
      timeLimit: 15,
      status: "active",
      createdAt: "2024-06-15",
    },
    {
      id: "2",
      title: "Ujian Tengah Semester",
      course: "Bahasa Inggris Percakapan",
      type: "mixed",
      questions: 25,
      timeLimit: 60,
      status: "active",
      createdAt: "2024-06-10",
    },
    {
      id: "3",
      title: "Kuis Hukum Newton",
      course: "Fisika untuk SMA",
      type: "multiple_choice",
      questions: 15,
      timeLimit: 20,
      status: "draft",
      createdAt: "2024-06-05",
    },
    {
      id: "4",
      title: "Tugas Pemrograman",
      course: "Komputer dan Pemrograman Dasar",
      type: "essay",
      questions: 5,
      timeLimit: 120,
      status: "active",
      createdAt: "2024-05-20",
    },
    {
      id: "5",
      title: "Kuis Senyawa Organik",
      course: "Kimia Organik",
      type: "multiple_choice",
      questions: 20,
      timeLimit: 30,
      status: "draft",
      createdAt: "2024-06-18",
    },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Manajemen Kuis</h1>
          <p className="text-muted-foreground">
            Kelola semua kuis dan penilaian
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Buat Kuis Baru
        </Button>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Filter Kuis</CardTitle>
          <CardDescription>
            Cari dan filter kuis berdasarkan berbagai kriteria
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input placeholder="Cari kuis..." className="pl-10" />
            </div>
            <select className="border rounded-md p-2">
              <option value="all">Semua Kursus</option>
              <option value="matematika">Matematika Dasar</option>
              <option value="bahasa">Bahasa Inggris Percakapan</option>
              <option value="fisika">Fisika untuk SMA</option>
              <option value="komputer">Komputer dan Pemrograman Dasar</option>
            </select>
            <select className="border rounded-md p-2">
              <option value="all">Semua Tipe</option>
              <option value="multiple_choice">Pilihan Ganda</option>
              <option value="essay">Esai</option>
              <option value="mixed">Campuran</option>
            </select>
            <select className="border rounded-md p-2">
              <option value="all">Semua Status</option>
              <option value="active">Aktif</option>
              <option value="draft">Draft</option>
            </select>
            <Button variant="outline">Filter</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Daftar Kuis</CardTitle>
          <CardDescription>
            Total {quizzes.length} kuis terdaftar
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Judul Kuis</TableHead>
                <TableHead>Kursus</TableHead>
                <TableHead>Tipe</TableHead>
                <TableHead>Jumlah Soal</TableHead>
                <TableHead>Batas Waktu</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Tanggal Dibuat</TableHead>
                <TableHead>Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {quizzes.map((quiz) => (
                <TableRow key={quiz.id}>
                  <TableCell className="font-medium">{quiz.title}</TableCell>
                  <TableCell>{quiz.course}</TableCell>
                  <TableCell>
                    <span className="px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-800">
                      {quiz.type === "multiple_choice"
                        ? "Pilihan Ganda"
                        : quiz.type === "essay"
                          ? "Esai"
                          : "Campuran"}
                    </span>
                  </TableCell>
                  <TableCell>{quiz.questions}</TableCell>
                  <TableCell>{quiz.timeLimit} menit</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${quiz.status === "active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}`}
                    >
                      {quiz.status === "active" ? "Aktif" : "Draft"}
                    </span>
                  </TableCell>
                  <TableCell>{quiz.createdAt}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="icon">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
