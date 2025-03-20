# LMS LPD - Sistem Manajemen Pembelajaran LKP Les Privat Digital

## Deskripsi

LMS LPD adalah platform Sistem Manajemen Pembelajaran (Learning Management System) komprehensif yang dirancang untuk pendidikan online di Indonesia. Platform ini menyediakan antarmuka yang intuitif untuk pendaftaran kursus, kelas virtual, dan alat penilaian interaktif.

## Fitur Utama

### 1. Dasbor Pengguna
- Antarmuka bersih yang menampilkan kursus yang diikuti
- Tenggat waktu yang akan datang
- Statistik kemajuan
- Jalur pembelajaran yang dipersonalisasi

### 2. Penampil Kursus
- Tampilan konten responsif dengan integrasi video
- Materi yang dapat diunduh
- Elemen interaktif

### 3. Pusat Penilaian
- Pembuat kuis dengan berbagai jenis pertanyaan
- Penilaian otomatis
- Analitik kinerja terperinci

### 4. Forum Diskusi
- Percakapan berulir dengan postingan yang disematkan oleh instruktur
- Balasan siswa
- Kemampuan penyematan media

### 5. Sistem Keamanan
- Kontrol akses berbasis peran
- Enkripsi data
- Metode autentikasi yang aman

## Proses Instalasi

### Prasyarat
- Node.js (versi 18 atau lebih tinggi)
- npm atau yarn
- Akun Supabase

### Langkah-langkah Instalasi

1. **Kloning Repositori**
   ```bash
   git clone https://github.com/irfan-lie92/lpdlms.git
   cd lms-lpd
   ```

2. **Instal Dependensi**
   ```bash
   npm install
   # atau
   yarn install
   ```

3. **Konfigurasi Variabel Lingkungan**
   - Salin file `.env.example` ke `.env.local`
   ```bash
   cp .env.example .env.local
   ```
   - Isi variabel lingkungan yang diperlukan di file `.env.local`:
     - `NEXT_PUBLIC_SUPABASE_URL`: URL proyek Supabase Anda
     - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Kunci anonim Supabase Anda
     - `SUPABASE_SERVICE_KEY`: Kunci layanan Supabase Anda
     - `SUPABASE_PROJECT_ID`: ID proyek Supabase Anda

4. **Jalankan Migrasi Database**
   ```bash
   # Pastikan Anda telah menginstal CLI Supabase jika ingin menjalankan migrasi secara lokal
   npx supabase migration up
   ```

5. **Jalankan Server Pengembangan**
   ```bash
   npm run dev
   # atau
   yarn dev
   ```

6. **Akses Aplikasi**
   - Buka browser dan kunjungi `http://localhost:3000`

## Struktur Proyek

```
-- src
   -- app                  # Direktori utama aplikasi Next.js
      -- (auth)            # Rute autentikasi
      -- dashboard         # Rute dasbor pengguna
      -- layout.tsx        # Layout utama aplikasi
      -- page.tsx          # Halaman beranda
   -- components           # Komponen yang dapat digunakan kembali
      -- ui                # Komponen UI dasar
   -- lib                  # Utilitas dan fungsi pembantu
   -- types                # Definisi tipe TypeScript
   -- utils                # Fungsi utilitas
-- supabase                # Konfigurasi dan migrasi Supabase
```

## Penggunaan

### Sebagai Siswa
1. Daftar atau masuk ke akun Anda
2. Jelajahi kursus yang tersedia di halaman beranda
3. Daftar untuk kursus yang diminati
4. Akses materi kursus, kuis, dan forum diskusi
5. Pantau kemajuan Anda di dasbor

### Sebagai Instruktur
1. Masuk dengan akun instruktur
2. Kelola kursus Anda dari dasbor instruktur
3. Buat penilaian dan kuis
4. Nilai pengajuan siswa
5. Berinteraksi dengan siswa melalui forum diskusi

### Sebagai Admin
1. Masuk dengan akun admin
   - Username: admin@lmslpd.id
   - Password: Admin123!
2. Kelola semua kursus dan pengguna
3. Konfigurasikan pengaturan keamanan
4. Tinjau log keamanan

## Dukungan

Jika Anda mengalami masalah atau memiliki pertanyaan, silakan hubungi tim dukungan kami di [email_dukungan@lmslpd.id].

## Lisensi

Hak Cipta © 2024 LMS LPD. Semua hak dilindungi undang-undang.
