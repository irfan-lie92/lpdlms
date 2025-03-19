"use client";

import { useState } from "react";
import CourseCard from "./course-card";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Search } from "lucide-react";

interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  thumbnailUrl: string;
  progress: number;
  duration: string;
  startDate: string;
  category: string;
}

interface CourseGridProps {
  courses?: Course[];
}

export default function CourseGrid({ courses = [] }: CourseGridProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");

  // Default courses if none provided
  const defaultCourses: Course[] = [
    {
      id: "1",
      title: "Matematika Dasar",
      description: "Pelajari konsep dasar matematika untuk tingkat SD dan SMP",
      instructor: "Budi Santoso",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
      progress: 35,
      duration: "8 minggu",
      startDate: "15 Juli 2024",
      category: "matematika",
    },
    {
      id: "2",
      title: "Bahasa Inggris Percakapan",
      description:
        "Kursus bahasa Inggris untuk percakapan sehari-hari dan situasi bisnis",
      instructor: "Dewi Lestari",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&q=80",
      progress: 65,
      duration: "10 minggu",
      startDate: "10 Juni 2024",
      category: "bahasa",
    },
    {
      id: "3",
      title: "Fisika untuk SMA",
      description:
        "Persiapan ujian nasional dan SBMPTN untuk mata pelajaran Fisika",
      instructor: "Ahmad Rizki",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=800&q=80",
      progress: 20,
      duration: "12 minggu",
      startDate: "5 Juli 2024",
      category: "sains",
    },
    {
      id: "4",
      title: "Komputer dan Pemrograman Dasar",
      description:
        "Pengenalan dasar komputer dan logika pemrograman untuk pemula",
      instructor: "Siti Nurhaliza",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
      progress: 50,
      duration: "6 minggu",
      startDate: "20 Juni 2024",
      category: "komputer",
    },
  ];

  const displayCourses = courses.length > 0 ? courses : defaultCourses;

  // Filter courses based on search term and category
  const filteredCourses = displayCourses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      categoryFilter === "all" || course.category === categoryFilter;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Cari kursus..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Select value={categoryFilter} onValueChange={setCategoryFilter}>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Semua Kategori</SelectItem>
            <SelectItem value="matematika">Matematika</SelectItem>
            <SelectItem value="bahasa">Bahasa</SelectItem>
            <SelectItem value="sains">Sains</SelectItem>
            <SelectItem value="komputer">Komputer</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCourses.map((course) => (
            <CourseCard
              key={course.id}
              id={course.id}
              title={course.title}
              description={course.description}
              instructor={course.instructor}
              thumbnailUrl={course.thumbnailUrl}
              progress={course.progress}
              duration={course.duration}
              startDate={course.startDate}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            Tidak ada kursus yang sesuai dengan kriteria pencarian.
          </p>
        </div>
      )}
    </div>
  );
}
