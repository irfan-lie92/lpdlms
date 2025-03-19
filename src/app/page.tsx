import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import {
  ArrowUpRight,
  BookOpen,
  GraduationCap,
  BarChart,
  Users,
  Clock,
  FileText,
  MessageSquare,
  Award,
} from "lucide-react";
import { createClient } from "../../supabase/server";
import Image from "next/image";

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="min-h-screen to-gray-50 from-[#c88989] flex flex-col">
      <Navbar />
      <Hero />
      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Fitur Unggulan</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Platform pembelajaran online terlengkap dengan berbagai fitur yang
              dirancang untuk memaksimalkan pengalaman belajar Anda.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="w-6 h-6" />,
                title: "Materi Interaktif",
                description:
                  "Akses materi pembelajaran interaktif dengan video, quiz, dan latihan",
              },
              {
                icon: <GraduationCap className="w-6 h-6" />,
                title: "Kelas Virtual",
                description:
                  "Ikuti kelas langsung dengan instruktur terbaik dari seluruh Indonesia",
              },
              {
                icon: <BarChart className="w-6 h-6" />,
                title: "Analisis Kemajuan",
                description:
                  "Pantau perkembangan belajar dengan analisis data yang komprehensif",
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Kolaborasi Tim",
                description:
                  "Belajar bersama dalam kelompok dengan fitur kolaborasi real-time",
              },
              {
                icon: <Clock className="w-6 h-6" />,
                title: "Belajar Fleksibel",
                description:
                  "Akses materi kapan saja dan di mana saja sesuai jadwal Anda",
              },
              {
                icon: <FileText className="w-6 h-6" />,
                title: "Ujian Online",
                description:
                  "Ikuti ujian online dengan berbagai jenis soal dan penilaian otomatis",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Course Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Kategori Kursus</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Temukan berbagai kategori kursus yang sesuai dengan minat dan
              kebutuhan Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                image:
                  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&q=80",
                title: "Teknologi Informasi",
                courses: "120+ kursus",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&q=80",
                title: "Bisnis & Manajemen",
                courses: "85+ kursus",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&q=80",
                title: "Bahasa & Komunikasi",
                courses: "65+ kursus",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500&q=80",
                title: "Pendidikan",
                courses: "90+ kursus",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80",
                title: "Seni & Desain",
                courses: "70+ kursus",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&q=80",
                title: "Kesehatan",
                courses: "50+ kursus",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80",
                title: "Keuangan",
                courses: "45+ kursus",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=500&q=80",
                title: "Pengembangan Diri",
                courses: "60+ kursus",
              },
            ].map((category, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-w-16 aspect-h-9 w-full h-48 relative">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-lg font-semibold mb-1">
                    {category.title}
                  </h3>
                  <p className="text-sm text-gray-200">{category.courses}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10.000+</div>
              <div className="text-blue-100">Siswa Aktif</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Kursus Tersedia</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-blue-100">Instruktur Ahli</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Tingkat Kepuasan</div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Testimoni Siswa</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Apa kata mereka yang telah belajar bersama kami
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Budi Santoso",
                role: "Mahasiswa Teknik Informatika",
                image: "https://api.dicebear.com/7.x/avataaars/svg?seed=budi",
                quote:
                  "Platform ini sangat membantu saya dalam memahami materi kuliah. Kursus-kursusnya sangat interaktif dan mudah dipahami.",
              },
              {
                name: "Siti Rahayu",
                role: "Profesional HR",
                image: "https://api.dicebear.com/7.x/avataaars/svg?seed=siti",
                quote:
                  "Saya bisa belajar kapan saja dan di mana saja. Materi yang disajikan sangat relevan dengan kebutuhan industri saat ini.",
              },
              {
                name: "Ahmad Fauzi",
                role: "Guru SMA",
                image: "https://api.dicebear.com/7.x/avataaars/svg?seed=ahmad",
                quote:
                  "Sebagai seorang guru, platform ini membantu saya mengembangkan metode pengajaran yang lebih interaktif dan efektif.",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Siap Untuk Mulai Belajar?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan ribuan siswa yang telah merasakan manfaat
            belajar di platform kami.
          </p>
          <a
            href="/sign-up"
            className="inline-flex items-center px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Daftar Sekarang
            <ArrowUpRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
}
