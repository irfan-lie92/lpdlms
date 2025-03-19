import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { createClient } from "../../../../../supabase/server";
import { redirect } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Trash2 } from "lucide-react";

export default async function CreateQuizPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Buat Kuis Baru</h1>
        <p className="text-muted-foreground">
          Buat kuis baru untuk menilai pemahaman siswa
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Informasi Kuis</CardTitle>
              <CardDescription>
                Masukkan detail dasar untuk kuis baru
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Judul Kuis</Label>
                <Input id="title" placeholder="Masukkan judul kuis" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Deskripsi</Label>
                <Textarea
                  id="description"
                  placeholder="Deskripsi singkat tentang kuis ini"
                  rows={4}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="course">Kursus</Label>
                  <select id="course" className="w-full border rounded-md p-2">
                    <option value="">Pilih Kursus</option>
                    <option value="1">Matematika Dasar</option>
                    <option value="2">Bahasa Inggris Percakapan</option>
                    <option value="3">Fisika untuk SMA</option>
                    <option value="4">Komputer dan Pemrograman Dasar</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="type">Tipe Kuis</Label>
                  <select id="type" className="w-full border rounded-md p-2">
                    <option value="multiple_choice">Pilihan Ganda</option>
                    <option value="essay">Esai</option>
                    <option value="mixed">Campuran</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="time_limit">Batas Waktu (menit)</Label>
                  <Input
                    id="time_limit"
                    type="number"
                    placeholder="Contoh: 30"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="passing_score">Nilai Kelulusan (%)</Label>
                  <Input
                    id="passing_score"
                    type="number"
                    placeholder="Contoh: 70"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="instructions">Instruksi</Label>
                <Textarea
                  id="instructions"
                  placeholder="Instruksi untuk siswa sebelum memulai kuis"
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Pertanyaan Kuis</CardTitle>
              <CardDescription>
                Tambahkan pertanyaan untuk kuis ini
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="multiple_choice">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="multiple_choice">
                    Pilihan Ganda
                  </TabsTrigger>
                  <TabsTrigger value="essay">Esai</TabsTrigger>
                  <TabsTrigger value="true_false">Benar/Salah</TabsTrigger>
                </TabsList>

                <TabsContent value="multiple_choice" className="mt-4">
                  <div className="space-y-6">
                    {/* Sample Multiple Choice Question */}
                    <div className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="font-medium">Pertanyaan 1</h3>
                        <Button variant="ghost" size="icon">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>

                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="question_text_1">
                            Teks Pertanyaan
                          </Label>
                          <Textarea
                            id="question_text_1"
                            placeholder="Masukkan pertanyaan di sini"
                            rows={2}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label>Pilihan Jawaban</Label>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <input
                                type="radio"
                                name="correct_answer_1"
                                id="option_1_a"
                              />
                              <Input
                                placeholder="Pilihan A"
                                className="flex-grow"
                              />
                            </div>
                            <div className="flex items-center gap-2">
                              <input
                                type="radio"
                                name="correct_answer_1"
                                id="option_1_b"
                              />
                              <Input
                                placeholder="Pilihan B"
                                className="flex-grow"
                              />
                            </div>
                            <div className="flex items-center gap-2">
                              <input
                                type="radio"
                                name="correct_answer_1"
                                id="option_1_c"
                              />
                              <Input
                                placeholder="Pilihan C"
                                className="flex-grow"
                              />
                            </div>
                            <div className="flex items-center gap-2">
                              <input
                                type="radio"
                                name="correct_answer_1"
                                id="option_1_d"
                              />
                              <Input
                                placeholder="Pilihan D"
                                className="flex-grow"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="explanation_1">Penjelasan</Label>
                          <Textarea
                            id="explanation_1"
                            placeholder="Penjelasan jawaban yang benar (opsional)"
                            rows={2}
                          />
                        </div>
                      </div>
                    </div>

                    <Button className="w-full">
                      <Plus className="mr-2 h-4 w-4" /> Tambah Pertanyaan
                      Pilihan Ganda
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="essay" className="mt-4">
                  <div className="space-y-6">
                    {/* Sample Essay Question */}
                    <div className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="font-medium">Pertanyaan Esai 1</h3>
                        <Button variant="ghost" size="icon">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>

                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="essay_question_1">
                            Teks Pertanyaan
                          </Label>
                          <Textarea
                            id="essay_question_1"
                            placeholder="Masukkan pertanyaan esai di sini"
                            rows={2}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="model_answer_1">Jawaban Model</Label>
                          <Textarea
                            id="model_answer_1"
                            placeholder="Jawaban model untuk panduan penilaian"
                            rows={4}
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="word_limit_1">Batas Kata</Label>
                            <Input
                              id="word_limit_1"
                              type="number"
                              placeholder="Contoh: 500"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="points_1">Poin</Label>
                            <Input
                              id="points_1"
                              type="number"
                              placeholder="Contoh: 10"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <Button className="w-full">
                      <Plus className="mr-2 h-4 w-4" /> Tambah Pertanyaan Esai
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="true_false" className="mt-4">
                  <div className="space-y-6">
                    {/* Sample True/False Question */}
                    <div className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="font-medium">
                          Pertanyaan Benar/Salah 1
                        </h3>
                        <Button variant="ghost" size="icon">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>

                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="tf_question_1">Teks Pertanyaan</Label>
                          <Textarea
                            id="tf_question_1"
                            placeholder="Masukkan pernyataan benar/salah di sini"
                            rows={2}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label>Jawaban yang Benar</Label>
                          <div className="flex gap-4">
                            <div className="flex items-center gap-2">
                              <input
                                type="radio"
                                name="tf_answer_1"
                                id="tf_true_1"
                              />
                              <Label htmlFor="tf_true_1">Benar</Label>
                            </div>
                            <div className="flex items-center gap-2">
                              <input
                                type="radio"
                                name="tf_answer_1"
                                id="tf_false_1"
                              />
                              <Label htmlFor="tf_false_1">Salah</Label>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="tf_explanation_1">Penjelasan</Label>
                          <Textarea
                            id="tf_explanation_1"
                            placeholder="Penjelasan jawaban yang benar (opsional)"
                            rows={2}
                          />
                        </div>
                      </div>
                    </div>

                    <Button className="w-full">
                      <Plus className="mr-2 h-4 w-4" /> Tambah Pertanyaan
                      Benar/Salah
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="sticky top-6">
            <CardHeader>
              <CardTitle>Pengaturan Kuis</CardTitle>
              <CardDescription>
                Konfigurasi pengaturan tambahan untuk kuis
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="attempts">Jumlah Percobaan</Label>
                <select id="attempts" className="w-full border rounded-md p-2">
                  <option value="1">1 kali</option>
                  <option value="2">2 kali</option>
                  <option value="3">3 kali</option>
                  <option value="unlimited">Tidak terbatas</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="shuffle">Acak Pertanyaan</Label>
                <select id="shuffle" className="w-full border rounded-md p-2">
                  <option value="yes">Ya</option>
                  <option value="no">Tidak</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="show_results">Tampilkan Hasil</Label>
                <select
                  id="show_results"
                  className="w-full border rounded-md p-2"
                >
                  <option value="immediately">Segera setelah selesai</option>
                  <option value="after_due">Setelah tenggat waktu</option>
                  <option value="manual">Setelah penilaian manual</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="feedback">Tampilkan Umpan Balik</Label>
                <select id="feedback" className="w-full border rounded-md p-2">
                  <option value="none">Tidak ada</option>
                  <option value="correct_only">Hanya jawaban benar</option>
                  <option value="full">Jawaban benar dan penjelasan</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label>Ketersediaan</Label>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label
                      htmlFor="start_date"
                      className="text-xs text-muted-foreground"
                    >
                      Tanggal Mulai
                    </Label>
                    <Input id="start_date" type="date" />
                  </div>
                  <div>
                    <Label
                      htmlFor="end_date"
                      className="text-xs text-muted-foreground"
                    >
                      Tanggal Berakhir
                    </Label>
                    <Input id="end_date" type="date" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Status</Label>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="status"
                      id="status_draft"
                      checked
                    />
                    <Label htmlFor="status_draft">Draft</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="radio" name="status" id="status_active" />
                    <Label htmlFor="status_active">Aktif</Label>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              <Button className="w-full">Simpan Kuis</Button>
              <Button variant="outline" className="w-full">
                Pratinjau Kuis
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
