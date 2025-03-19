"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  BookOpen,
  FileText,
  Award,
  Settings,
  BarChart,
  MessageSquare,
  LogOut,
} from "lucide-react";
import { createClient } from "../../supabase/client";
import { useRouter } from "next/navigation";

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const supabase = createClient();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/sign-in");
  };

  const navItems = [
    {
      title: "Dashboard",
      href: "/admin",
      icon: <LayoutDashboard className="h-5 w-5" />,
    },
    {
      title: "Pengguna",
      href: "/admin/users",
      icon: <Users className="h-5 w-5" />,
    },
    {
      title: "Kursus",
      href: "/admin/courses",
      icon: <BookOpen className="h-5 w-5" />,
    },
    {
      title: "Kuis & Penilaian",
      href: "/admin/quizzes",
      icon: <FileText className="h-5 w-5" />,
    },
    {
      title: "Sertifikat",
      href: "/admin/certificates",
      icon: <Award className="h-5 w-5" />,
    },
    {
      title: "Laporan",
      href: "/admin/reports",
      icon: <BarChart className="h-5 w-5" />,
    },
    {
      title: "Pesan",
      href: "/admin/messages",
      icon: <MessageSquare className="h-5 w-5" />,
    },
    {
      title: "Pengaturan",
      href: "/admin/settings",
      icon: <Settings className="h-5 w-5" />,
    },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen flex flex-col">
      <div className="p-4 border-b">
        <Link href="/admin" className="text-xl font-bold text-blue-600">
          LMS LPD Admin
        </Link>
      </div>

      <div className="flex-1 overflow-auto py-4">
        <nav className="space-y-1 px-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${isActive ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-100"}`}
              >
                <span className="mr-3">{item.icon}</span>
                {item.title}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="p-4 border-t">
        <button
          onClick={handleSignOut}
          className="flex items-center w-full px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100"
        >
          <LogOut className="mr-3 h-5 w-5" />
          Keluar
        </button>
      </div>
    </div>
  );
}
