"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, FileText } from "lucide-react";

interface Deadline {
  id: string;
  title: string;
  courseTitle: string;
  dueDate: string;
  type: "assignment" | "quiz" | "exam";
  status: "upcoming" | "due-soon" | "overdue";
}

interface UpcomingDeadlinesProps {
  deadlines?: Deadline[];
}

export default function UpcomingDeadlines({
  deadlines = [],
}: UpcomingDeadlinesProps) {
  // Default deadlines if none provided
  const defaultDeadlines: Deadline[] = [
    {
      id: "1",
      title: "Final Project Submission",
      courseTitle: "Introduction to Web Development",
      dueDate: "July 30, 2024",
      type: "assignment",
      status: "upcoming",
    },
    {
      id: "2",
      title: "Mid-term Exam",
      courseTitle: "Advanced Java Programming",
      dueDate: "July 15, 2024",
      type: "exam",
      status: "due-soon",
    },
    {
      id: "3",
      title: "Data Analysis Quiz",
      courseTitle: "Data Science Fundamentals",
      dueDate: "July 10, 2024",
      type: "quiz",
      status: "overdue",
    },
  ];

  const displayDeadlines = deadlines.length > 0 ? deadlines : defaultDeadlines;

  const getStatusColor = (status: string) => {
    switch (status) {
      case "upcoming":
        return "bg-blue-100 text-blue-800";
      case "due-soon":
        return "bg-yellow-100 text-yellow-800";
      case "overdue":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "assignment":
        return <FileText className="h-4 w-4" />;
      case "quiz":
        return <Clock className="h-4 w-4" />;
      case "exam":
        return <Calendar className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle className="text-xl">Tenggat Waktu Mendatang</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {displayDeadlines.map((deadline) => (
            <div
              key={deadline.id}
              className="flex items-start p-3 rounded-lg border hover:bg-muted/50 transition-colors"
            >
              <div className="mr-3 mt-0.5">{getTypeIcon(deadline.type)}</div>
              <div className="flex-grow">
                <h4 className="font-medium">{deadline.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {deadline.courseTitle}
                </p>
                <div className="flex items-center mt-2 text-sm">
                  <Calendar className="h-3.5 w-3.5 mr-1 text-muted-foreground" />
                  <span className="text-muted-foreground">
                    {deadline.dueDate}
                  </span>
                </div>
              </div>
              <Badge className={`ml-2 ${getStatusColor(deadline.status)}`}>
                {deadline.status === "upcoming"
                  ? "Mendatang"
                  : deadline.status === "due-soon"
                    ? "Segera"
                    : "Terlambat"}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
