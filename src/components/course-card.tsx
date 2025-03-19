"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Clock, Calendar } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  instructor: string;
  thumbnailUrl: string;
  progress: number;
  duration: string;
  startDate: string;
}

export default function CourseCard({
  id = "1",
  title = "Matematika Dasar",
  description = "Pelajari konsep dasar matematika untuk tingkat SD dan SMP",
  instructor = "Budi Santoso",
  thumbnailUrl = "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
  progress = 35,
  duration = "8 minggu",
  startDate = "15 Juli 2024",
}: CourseCardProps) {
  const router = useRouter();

  return (
    <Card className="overflow-hidden flex flex-col h-full bg-white hover:shadow-md transition-shadow duration-300">
      <div className="relative h-48 w-full">
        <Image src={thumbnailUrl} alt={title} fill className="object-cover" />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          Instructor: {instructor}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{description}</p>
        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Progres</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock size={14} />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar size={14} />
            <span>Mulai: {startDate}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        <Button
          onClick={() => router.push(`/dashboard/courses/${id}`)}
          className="w-full"
        >
          <BookOpen className="mr-2 h-4 w-4" />
          Lanjutkan Belajar
        </Button>
      </CardFooter>
    </Card>
  );
}
