"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, BookOpen, CheckCircle } from "lucide-react";

interface LearningPath {
  id: string;
  title: string;
  description: string;
  totalCourses: number;
  completedCourses: number;
  estimatedTime: string;
  level: "beginner" | "intermediate" | "advanced";
}

interface LearningPathsProps {
  paths?: LearningPath[];
}

export default function LearningPaths({ paths = [] }: LearningPathsProps) {
  // Default paths if none provided
  const defaultPaths: LearningPath[] = [
    {
      id: "1",
      title: "Jalur Karir Pengembangan Web",
      description: "Jalur lengkap untuk menjadi pengembang web full-stack",
      totalCourses: 8,
      completedCourses: 2,
      estimatedTime: "6 bulan",
      level: "beginner",
    },
    {
      id: "2",
      title: "Spesialisasi Data Science",
      description: "Kuasai analisis data dan machine learning",
      totalCourses: 6,
      completedCourses: 1,
      estimatedTime: "4 bulan",
      level: "intermediate",
    },
    {
      id: "3",
      title: "Pengembangan Aplikasi Mobile",
      description: "Belajar membangun aplikasi mobile native",
      totalCourses: 5,
      completedCourses: 0,
      estimatedTime: "3 bulan",
      level: "advanced",
    },
  ];

  const displayPaths = paths.length > 0 ? paths : defaultPaths;

  const getLevelBadge = (level: string) => {
    switch (level) {
      case "beginner":
        return (
          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
            Pemula
          </span>
        );
      case "intermediate":
        return (
          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
            Menengah
          </span>
        );
      case "advanced":
        return (
          <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
            Lanjutan
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle className="text-xl">Jalur Pembelajaran</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {displayPaths.map((path) => (
            <div key={path.id} className="border rounded-lg overflow-hidden">
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium">{path.title}</h3>
                  {getLevelBadge(path.level)}
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  {path.description}
                </p>

                <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                  <div className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-1" />
                    <span>
                      {path.completedCourses}/{path.totalCourses} Kursus
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-4 w-4 mr-1" />
                    <span>{path.estimatedTime}</span>
                  </div>
                </div>

                <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-primary h-full rounded-full"
                    style={{
                      width: `${(path.completedCourses / path.totalCourses) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>

              <div className="bg-muted/50 p-3 flex justify-between items-center">
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 mr-1 text-primary" />
                  <span>
                    {Math.round(
                      (path.completedCourses / path.totalCourses) * 100,
                    )}
                    % Selesai
                  </span>
                </div>
                <Button variant="ghost" size="sm" className="text-sm">
                  Lanjutkan <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
