# Dokumentasi Optimasi CI/CD

## 1. Informasi Proyek

| Informasi | Keterangan |
|---|---|
| Nama proyek | Frontend React CI |
| Platform CI | GitHub Actions |
| Branch utama | `main` |
| Optimasi yang diterapkan | Parallel Jobs dan Dependency Cache |
| Tanggal pengujian | [Isi tanggal pengujian] |

## 2. Tabel Durasi Sebelum dan Sesudah Optimasi

Pengukuran dilakukan untuk membandingkan durasi eksekusi workflow sebelum dan sesudah penerapan parallel jobs dan dependency cache.

| No. | Job / Pengukuran | Sebelum Optimasi | Sesudah Optimasi | Selisih Durasi |
|---:|---|---:|---:|---:|
| 1 | Build Frontend React | 14 detik | 10 detik | 4 detik |
| 2 | Test Frontend React | 13 detik | 10 detik | 3 detik |
| 3 | Total durasi workflow | 32 detik | 16 detik | 16 detik |

### Analisis Hasil

- **Sebelum optimasi:** Pada konfigurasi awal, job Build Frontend React dan Test Frontend React dijalankan secara berurutan karena job testing memiliki ketergantungan terhadap job build melalui konfigurasi needs. Akibatnya, job testing baru dapat dimulai setelah job build selesai. Kondisi ini menyebabkan durasi keseluruhan workflow menjadi lebih panjang dibandingkan jika kedua job dapat berjalan secara paralel.
- **Sesudah optimasi:** Setelah konfigurasi workflow diubah agar job build dan testing berjalan secara paralel serta dependency cache diterapkan, kedua job dapat dieksekusi secara bersamaan apabila tidak memiliki ketergantungan satu sama lain. Dengan mekanisme paralel, durasi keseluruhan workflow berpotensi berkurang karena waktu eksekusi kedua job tidak perlu dijumlahkan secara berurutan. Dependency cache juga dapat mengurangi waktu persiapan dependency pada eksekusi berikutnya ketika cache berhasil digunakan.
- **Kesimpulan:** Optimasi dilakukan untuk mengurangi waktu tunggu antartugas dan mempercepat proses CI. Efektivitas optimasi dievaluasi dengan membandingkan total durasi workflow sebelum dan sesudah perubahan, serta memperhatikan durasi setiap job. Besarnya peningkatan kinerja ditentukan berdasarkan hasil pengukuran aktual dari GitHub Actions.

Catatan: Jalankan pengukuran pada kondisi yang sebanding. Cache mungkin belum menghasilkan penghematan maksimal pada eksekusi pertama. Durasi total workflow juga tidak selalu sama dengan penjumlahan durasi setiap job karena beberapa job dapat berjalan secara paralel.

## 3. Log Troubleshooting

| No. | Tanggal | Masalah | Analisis Penyebab | Solusi | Hasil |
|---:|---|---|---|---|---|
| 1 | 26/10/2026 | Workflow tidak terpicu | File workflow berada di frontend/.github/workflows, bukan root repository | Memindahkan directory .github/workflows ke root repository | Berhasil |
| 2 | 26/10/2026 | Perintah npm ci gagal | Perintah dijalankan dari root, sedangkan package-json berada di directory frontend | Mengatur defaults.run.working-directory | Berhasil |
| 3 | 26/10/2026 | Cache dependency tidak digunakan sesuai harapan | Konfigurasi cache tidak menunjuk ke lockfile di subdirectory frontend | Menyesuaikan cache-dependency-path | Berhasil |

## 4. Kesimpulan

Penerapan optimasi CI dilakukan melalui pengaturan parallel jobs dan dependency cache pada GitHub Actions. Evaluasi dilakukan dengan membandingkan durasi workflow sebelum dan sesudah perubahan serta mendokumentasikan proses troubleshooting.

Hasil akhir dan tingkat penghematan waktu ditentukan berdasarkan data aktual dari eksekusi GitHub Actions.