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
import { Search, Plus, Edit, Trash2 } from "lucide-react";

export default async function UsersPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  // In a real app, you would fetch users from your database
  // For now, we'll use mock data
  const users = [
    {
      id: "1",
      name: "Budi Santoso",
      email: "budi@example.com",
      role: "student",
      status: "active",
      createdAt: "2024-06-15",
    },
    {
      id: "2",
      name: "Siti Rahayu",
      email: "siti@example.com",
      role: "instructor",
      status: "active",
      createdAt: "2024-06-10",
    },
    {
      id: "3",
      name: "Ahmad Rizki",
      email: "ahmad@example.com",
      role: "student",
      status: "inactive",
      createdAt: "2024-06-05",
    },
    {
      id: "4",
      name: "Dewi Lestari",
      email: "dewi@example.com",
      role: "admin",
      status: "active",
      createdAt: "2024-05-20",
    },
    {
      id: "5",
      name: "Joko Widodo",
      email: "joko@example.com",
      role: "student",
      status: "active",
      createdAt: "2024-06-18",
    },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Manajemen Pengguna</h1>
          <p className="text-muted-foreground">
            Kelola semua pengguna platform
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Tambah Pengguna
        </Button>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Filter Pengguna</CardTitle>
          <CardDescription>
            Cari dan filter pengguna berdasarkan berbagai kriteria
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input placeholder="Cari pengguna..." className="pl-10" />
            </div>
            <select className="border rounded-md p-2">
              <option value="all">Semua Peran</option>
              <option value="student">Siswa</option>
              <option value="instructor">Instruktur</option>
              <option value="admin">Admin</option>
            </select>
            <select className="border rounded-md p-2">
              <option value="all">Semua Status</option>
              <option value="active">Aktif</option>
              <option value="inactive">Tidak Aktif</option>
            </select>
            <Button variant="outline">Filter</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Daftar Pengguna</CardTitle>
          <CardDescription>
            Total {users.length} pengguna terdaftar
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nama</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Peran</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Tanggal Daftar</TableHead>
                <TableHead>Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${user.role === "admin" ? "bg-purple-100 text-purple-800" : user.role === "instructor" ? "bg-blue-100 text-blue-800" : "bg-green-100 text-green-800"}`}
                    >
                      {user.role === "admin"
                        ? "Admin"
                        : user.role === "instructor"
                          ? "Instruktur"
                          : "Siswa"}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${user.status === "active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                    >
                      {user.status === "active" ? "Aktif" : "Tidak Aktif"}
                    </span>
                  </TableCell>
                  <TableCell>{user.createdAt}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
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
