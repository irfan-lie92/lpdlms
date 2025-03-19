"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface ProgressStats {
  overallProgress: number;
  coursesCompleted: number;
  totalCourses: number;
  certificatesEarned: number;
  hoursSpent: number;
}

interface ProgressStatsProps {
  stats?: ProgressStats;
}

export default function ProgressStatistics({ stats }: ProgressStatsProps) {
  // Default stats if none provided
  const defaultStats: ProgressStats = {
    overallProgress: 45,
    coursesCompleted: 2,
    totalCourses: 6,
    certificatesEarned: 1,
    hoursSpent: 28,
  };

  const displayStats = stats || defaultStats;

  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle className="text-xl">Kemajuan Pembelajaran</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">Kemajuan Keseluruhan</span>
              <span className="text-sm font-medium">
                {displayStats.overallProgress}%
              </span>
            </div>
            <Progress value={displayStats.overallProgress} className="h-2" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-muted/50 p-4 rounded-lg text-center">
              <p className="text-3xl font-bold">
                {displayStats.coursesCompleted}/{displayStats.totalCourses}
              </p>
              <p className="text-sm text-muted-foreground">Kursus Selesai</p>
            </div>
            <div className="bg-muted/50 p-4 rounded-lg text-center">
              <p className="text-3xl font-bold">
                {displayStats.certificatesEarned}
              </p>
              <p className="text-sm text-muted-foreground">
                Sertifikat Diperoleh
              </p>
            </div>
          </div>

          <div className="bg-muted/50 p-4 rounded-lg text-center">
            <p className="text-3xl font-bold">{displayStats.hoursSpent}</p>
            <p className="text-sm text-muted-foreground">Jam Belajar</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
