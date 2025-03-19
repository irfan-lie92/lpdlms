import Link from "next/link";
import { Twitter, Linkedin, Instagram, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Platform Column */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Platform</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#features"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Fitur
                </Link>
              </li>
              <li>
                <Link
                  href="#pricing"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Harga
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600">
                  Mitra
                </Link>
              </li>
            </ul>
          </div>

          {/* Courses Column */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Kursus</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600">
                  Teknologi
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600">
                  Bisnis
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600">
                  Bahasa
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600">
                  Semua Kategori
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Sumber Daya</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600">
                  Panduan Pengguna
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600">
                  Pusat Bantuan
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600">
                  Komunitas
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Perusahaan</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600">
                  Karir
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600">
                  Kebijakan Privasi
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-blue-600">
                  Syarat & Ketentuan
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
          <div className="text-gray-600 mb-4 md:mb-0">
            © {currentYear} LMS LPD. Hak Cipta Dilindungi.
          </div>

          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Facebook</span>
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Instagram</span>
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Twitter</span>
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">YouTube</span>
              <Youtube className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
