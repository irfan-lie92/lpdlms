import Link from "next/link";
import { createClient } from "../../supabase/server";
import { Button } from "./ui/button";
import {
  BookOpen,
  GraduationCap,
  Users,
  HelpCircle,
  UserCircle,
} from "lucide-react";
import UserProfile from "./user-profile";

export default async function Navbar() {
  const supabase = createClient();

  const {
    data: { user },
  } = await (await supabase).auth.getUser();

  return (
    <nav className="w-full border-b border-gray-200 bg-white py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link
            href="/"
            prefetch
            className="text-xl font-bold text-blue-600 mr-10"
          >
            LMS LPD
          </Link>

          <div className="hidden md:flex space-x-6">
            <Link
              href="#"
              className="text-gray-600 hover:text-blue-600 font-medium flex items-center"
            >
              <BookOpen className="w-4 h-4 mr-1" />
              Kursus
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-blue-600 font-medium flex items-center"
            >
              <GraduationCap className="w-4 h-4 mr-1" />
              Instruktur
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-blue-600 font-medium flex items-center"
            >
              <Users className="w-4 h-4 mr-1" />
              Komunitas
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-blue-600 font-medium flex items-center"
            >
              <HelpCircle className="w-4 h-4 mr-1" />
              Bantuan
            </Link>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          {user ? (
            <>
              <Link
                href="/dashboard"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                <Button>Dashboard</Button>
              </Link>
              <UserProfile />
            </>
          ) : (
            <>
              <Link
                href="/sign-in"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600"
              >
                Masuk
              </Link>
              <Link
                href="/sign-up"
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                Daftar
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
