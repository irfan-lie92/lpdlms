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

export default async function CoursesPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  // In a real app, you would fetch courses from your database
  // For now, we'll use mock data
  const courses = [
    {
      id: "1",
      title: "Matematika Dasar",
      instructor: "Budi Santoso",
      category: "matematika",
      status: "published",
      students: 125,
      createdAt: "2024-06-15",
    },
    {
      id: "2",
      title: "Bahasa Inggris Percakapan",
      instructor: "Dewi Lestari",
      category: "bahasa",
      status: "published",
      students: 87,
      createdAt: "2024-06-10",
    },
    {
      id: "3",
      title: "Fisika untuk SMA",
      instructor: "Ahmad Rizki",
      category: "sains",
      status: "draft",
      students: 0,
      createdAt: "2024-06-05",
    },
    {
      id: "4",
      title: "Komputer dan Pemrograman Dasar",
      instructor: "Siti Nurhaliza",
      category: "komputer",
      status: "published",
      students: 56,
      createdAt: "2024-05-20",
    },
    {
      id: "5",
      title: "Kimia Organik",
      instructor: "Joko Widodo",
      category: "sains",
      status: "review",
      students: 0,
      createdAt: "2024-06-18",
    },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Manajemen Kursus</h1>
          <p className="text-muted-foreground">Kelola semua kursus platform</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Tambah Kursus
        </Button>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Filter Kursus</CardTitle>
          <CardDescription>
            Cari dan filter kursus berdasarkan berbagai kriteria
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input placeholder="Cari kursus..." className="pl-10" />
            </div>
            <select className="border rounded-md p-2">
              <option value="all">Semua Kategori</option>
              <option value="matematika">Matematika</option>
              <option value="bahasa">Bahasa</option>
              <option value="sains">Sains</option>
              <option value="komputer">Komputer</option>
            </select>
            <select className="border rounded-md p-2">
              <option value="all">Semua Status</option>
              <option value="published">Dipublikasikan</option>
              <option value="draft">Draft</option>
              <option value="review">Dalam Review</option>
            </select>
            <Button variant="outline">Filter</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Daftar Kursus</CardTitle>
          <CardDescription>
            Total {courses.length} kursus terdaftar
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Judul Kursus</TableHead>
                <TableHead>Instruktur</TableHead>
                <TableHead>Kategori</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Siswa</TableHead>
                <TableHead>Tanggal Dibuat</TableHead>
                <TableHead>Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {courses.map((course) => (
                <TableRow key={course.id}>
                  <TableCell className="font-medium">{course.title}</TableCell>
                  <TableCell>{course.instructor}</TableCell>
                  <TableCell>
                    <span className="px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-800">
                      {course.category}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${course.status === "published" ? "bg-green-100 text-green-800" : course.status === "draft" ? "bg-gray-100 text-gray-800" : "bg-yellow-100 text-yellow-800"}`}
                    >
                      {course.status === "published"
                        ? "Dipublikasikan"
                        : course.status === "draft"
                          ? "Draft"
                          : "Dalam Review"}
                    </span>
                  </TableCell>
                  <TableCell>{course.students}</TableCell>
                  <TableCell>{course.createdAt}</TableCell>
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
