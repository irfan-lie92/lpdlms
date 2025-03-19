import DashboardNavbar from "@/components/dashboard-navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import { redirect } from "next/navigation";
import { createClient } from "../../../../supabase/server";

export default async function CalendarPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  // Mock events data
  const events = [
    {
      id: "1",
      title: "CSS Assignment Due",
      date: "2024-07-15",
      type: "assignment",
      course: "Web Development",
    },
    {
      id: "2",
      title: "Java Mid-term Exam",
      date: "2024-07-20",
      type: "exam",
      course: "Java Programming",
    },
    {
      id: "3",
      title: "Data Analysis Workshop",
      date: "2024-07-22",
      type: "workshop",
      course: "Data Science",
    },
    {
      id: "4",
      title: "Group Project Meeting",
      date: "2024-07-25",
      type: "meeting",
      course: "Web Development",
    },
  ];

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split("T")[0];

  // Filter events for today
  const todayEvents = events.filter((event) => event.date === today);

  // Filter upcoming events (after today)
  const upcomingEvents = events.filter((event) => event.date > today);

  return (
    <>
      <DashboardNavbar />
      <main className="w-full">
        <div className="container mx-auto px-4 py-8">
          <header className="mb-8">
            <h1 className="text-3xl font-bold">Kalender</h1>
            <p className="text-muted-foreground">
              Kelola jadwal dan acara mendatang Anda
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Calendar Widget */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Kalender Kursus</CardTitle>
                </CardHeader>
                <CardContent>
                  <Calendar mode="single" className="rounded-md border" />
                </CardContent>
              </Card>
            </div>

            {/* Events List */}
            <div className="space-y-6">
              {/* Today's Events */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Acara Hari Ini</CardTitle>
                </CardHeader>
                <CardContent>
                  {todayEvents.length > 0 ? (
                    <div className="space-y-3">
                      {todayEvents.map((event) => (
                        <div key={event.id} className="p-3 border rounded-lg">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-medium">{event.title}</h4>
                              <p className="text-sm text-muted-foreground">
                                {event.course}
                              </p>
                            </div>
                            <Badge
                              className={`
                                ${event.type === "assignment" ? "bg-blue-100 text-blue-800" : ""}
                                ${event.type === "exam" ? "bg-red-100 text-red-800" : ""}
                                ${event.type === "workshop" ? "bg-green-100 text-green-800" : ""}
                                ${event.type === "meeting" ? "bg-purple-100 text-purple-800" : ""}
                              `}
                            >
                              {event.type}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-center text-muted-foreground py-4">
                      Tidak ada acara terjadwal untuk hari ini
                    </p>
                  )}
                </CardContent>
              </Card>

              {/* Upcoming Events */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Acara Mendatang</CardTitle>
                </CardHeader>
                <CardContent>
                  {upcomingEvents.length > 0 ? (
                    <div className="space-y-3">
                      {upcomingEvents.map((event) => (
                        <div key={event.id} className="p-3 border rounded-lg">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-medium">{event.title}</h4>
                              <p className="text-sm text-muted-foreground">
                                {event.course}
                              </p>
                              <p className="text-xs text-muted-foreground mt-1">
                                {new Date(event.date).toLocaleDateString(
                                  "en-US",
                                  {
                                    weekday: "long",
                                    month: "short",
                                    day: "numeric",
                                  },
                                )}
                              </p>
                            </div>
                            <Badge
                              className={`
                                ${event.type === "assignment" ? "bg-blue-100 text-blue-800" : ""}
                                ${event.type === "exam" ? "bg-red-100 text-red-800" : ""}
                                ${event.type === "workshop" ? "bg-green-100 text-green-800" : ""}
                                ${event.type === "meeting" ? "bg-purple-100 text-purple-800" : ""}
                              `}
                            >
                              {event.type}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-center text-muted-foreground py-4">
                      Tidak ada acara mendatang
                    </p>
                  )}
                </CardContent>
              </Card>

              {/* Add Event Button */}
              <Button className="w-full">Tambah Acara Baru</Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
