"use client";

import Link from "next/link";
import { createClient } from "../../supabase/client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import {
  UserCircle,
  Home,
  BookOpen,
  Calendar,
  Award,
  Settings,
} from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

export default function DashboardNavbar() {
  const supabase = createClient();
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    {
      href: "/dashboard",
      label: "Dashboard",
      icon: <Home className="h-5 w-5" />,
    },
    {
      href: "/dashboard/courses",
      label: "Kursus",
      icon: <BookOpen className="h-5 w-5" />,
    },
    {
      href: "/dashboard/calendar",
      label: "Kalender",
      icon: <Calendar className="h-5 w-5" />,
    },
    {
      href: "/dashboard/certificates",
      label: "Sertifikat",
      icon: <Award className="h-5 w-5" />,
    },
  ];

  return (
    <nav className="w-full border-b border-gray-200 bg-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link href="/" prefetch className="text-xl font-bold">
            LPD LMS
          </Link>
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Button
                key={item.href}
                variant={pathname === item.href ? "default" : "ghost"}
                size="sm"
                className="gap-2"
                asChild
              >
                <Link href={item.href}>
                  {item.icon}
                  {item.label}
                </Link>
              </Button>
            ))}
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <UserCircle className="h-6 w-6" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="/dashboard/profile">Profil</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/dashboard/settings">Pengaturan</Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={async () => {
                  await supabase.auth.signOut();
                  router.refresh();
                }}
              >
                Keluar
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex justify-between items-center mt-3 px-4 pb-1">
        <div className="flex w-full justify-between">
          {navItems.map((item) => (
            <Button
              key={item.href}
              variant={pathname === item.href ? "default" : "ghost"}
              size="sm"
              className="flex-col gap-1 h-auto py-2"
              asChild
            >
              <Link href={item.href}>
                {item.icon}
                <span className="text-xs">{item.label}</span>
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
}
