import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  BookOpen,
  Video,
  MessageSquare,
  Award,
} from "lucide-react";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-70" />

      <div className="relative pt-24 pb-32 sm:pt-32 sm:pb-40">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
              Belajar{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Lebih Mudah
              </span>{" "}
              dengan Platform LMS Modern
            </h1>

            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Platform pembelajaran online terlengkap dengan materi berkualitas,
              kelas virtual interaktif, dan sistem penilaian otomatis untuk
              pengalaman belajar terbaik.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/sign-up"
                className="inline-flex items-center px-8 py-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium"
              >
                Daftar Sekarang
                <ArrowUpRight className="ml-2 w-5 h-5" />
              </Link>

              <Link
                href="/sign-in"
                className="inline-flex items-center px-8 py-4 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors text-lg font-medium"
              >
                Masuk
              </Link>
            </div>

            <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>Materi berkualitas tinggi</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>Kelas virtual interaktif</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>Sertifikat resmi</span>
              </div>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-blue-600 mb-4">
                  <BookOpen className="w-10 h-10 mx-auto" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Materi Lengkap</h3>
                <p className="text-gray-600 text-sm">
                  Akses ribuan materi pembelajaran berkualitas tinggi
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-blue-600 mb-4">
                  <Video className="w-10 h-10 mx-auto" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Kelas Virtual</h3>
                <p className="text-gray-600 text-sm">
                  Ikuti kelas langsung dengan instruktur terbaik
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-blue-600 mb-4">
                  <MessageSquare className="w-10 h-10 mx-auto" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Forum Diskusi</h3>
                <p className="text-gray-600 text-sm">
                  Diskusikan materi dengan instruktur dan sesama siswa
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-blue-600 mb-4">
                  <Award className="w-10 h-10 mx-auto" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Sertifikasi</h3>
                <p className="text-gray-600 text-sm">
                  Dapatkan sertifikat resmi setelah menyelesaikan kursus
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
