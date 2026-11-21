# Panduan lengkap — terbitkan website eskape lewat GitHub Pages

## Pembaruan harga ESKAPE Tracing v2.5.1
- **Free:** Rp0 (fitur terbatas)
- **Full Monthly:** Rp16.000 / bulan
- **Full Yearly:** Rp79.000 / tahun
- **Full Lifetime:** Rp199.000 / sekali bayar

Website telah diperbarui dengan 4 kartu harga dan tombol pemesanan WhatsApp spesifik untuk masing-masing paket. Nomor WhatsApp tetap seperti pada file sumber.

Paket ini sudah dikonfigurasi:
- WhatsApp publisher: +62 858-1114-3043 (format 6285811143043)
- Tombol download berisi `downloads/eskape_SketchUp_v2.5.1_Free_Full_Beta.rbz`
- Situs HTML statis: GitHub Pages tanpa biaya hosting pada repository publik GitHub Free.
- Website **belum online** sampai Anda unggah dan aktifkan Pages pada akun GitHub sendiri.

## A. Persiapan — di komputer
1. Download `eskape_Website_GitHub_Pages_v2_Harga_Terbaru.zip` dari percakapan.
2. Klik kanan → **Extract All...** (Windows 10/11). Jangan upload file ZIP langsung sebagai satu file.
3. Buka hasil ekstrak. Pastikan di level teratas terdapat:
   - `index.html`
   - `style.css`
   - `script.js`
   - `config.js`
   - `.nojekyll` (file tersembunyi; aktifkan View → Show → Hidden items jika perlu)
   - folder `assets/`
   - folder `downloads/`
4. Buka `downloads/`: harus ada `eskape_SketchUp_v2.5.1_Free_Full_Beta.rbz`.
5. Jangan menambahkan file `license_private.pem`, generator key pribadi, atau token admin ke dalam folder website.

## B. Buat repository GitHub
1. Kunjungi https://github.com dan login. Jika belum memiliki akun, pilih Sign up lalu verifikasi email.
2. Kunjungi https://github.com/new (atau tombol **+** kanan atas → **New repository**).
3. Masukkan nama Repository: **eskape** (huruf kecil, tanpa spasi).
4. Pilih **Public**. Pada GitHub Free, GitHub Pages dapat dipublikasikan dari repository publik.
5. `Add a README file` boleh dicentang; bila dicentang, repository langsung punya branch `main`.
6. Klik **Create repository**.

## C. Upload file website
1. Masuk ke halaman repository, buka tab **Code**, pilih branch **main**.
2. Klik **Add file → Upload files**.
3. Drag seluruh **isi folder website**, bukan folder pembungkus (root zip), ke area upload. Termasuk `index.html`, `style.css`, `script.js`, `config.js`, `.nojekyll`, `assets/`, dan `downloads/`.
   - Alternatif yang praktis: seret file-file lalu folder `assets` dan `downloads` ke kotak upload. GitHub mendukung unggah folder via drag-and-drop di browser modern.
   - Jika file tersembunyi `.nojekyll` tidak ikut: buat file baru `.nojekyll` melalui **Add file → Create new file** bila diperlukan.
4. Tunggu daftar file selesai tampil. Pastikan `index.html` terlihat di root repository, bukan `eskape-website/index.html`.
5. Di kolom **Commit changes**, tulis `Update harga eskape v2.5.1 (Free / Monthly / Yearly / Lifetime)`.
6. Pilih **Commit directly to the main branch** jika tersedia, lalu klik **Commit changes**.
7. Kembali ke tab **Code**. Periksa folder `assets/` dan `downloads/` berisi file.

Struktur yang benar:

```text
eskape (repository)
├── index.html
├── config.js
├── script.js
├── style.css
├── .nojekyll
├── assets/
│   ├── eskape-logo.png
│   └── eskape_product.png
└── downloads/
    └── eskape_SketchUp_v2.5.1_Free_Full_Beta.rbz
```

## D. Aktifkan GitHub Pages
1. Pada repository `eskape`, klik **Settings** (tab di atas repository).
2. Pada sidebar kiri cari **Code and automation → Pages**.
3. Di bagian **Build and deployment → Source** pilih **Deploy from a branch**.
4. Di bawah **Branch**, pilih `main`, folder `/(root)`.
5. Klik **Save**.
6. Kembali ke halaman **Settings → Pages**; setelah publikasi sukses biasanya muncul tautan **Visit site**.
7. URL hasil:
   `https://USERNAME.github.io/eskape/`
   Ganti USERNAME dengan username GitHub akun Anda. URL ini **contoh pola**, bukan URL situs yang sudah live.
8. Jika belum tampil, buka tab **Actions** repository dan periksa status pekerjaan *pages build and deployment*. GitHub menyatakan proses publikasi dapat memerlukan hingga sekitar 20 menit.

## E. Uji tombol publik
1. Buka website melalui `https://USERNAME.github.io/eskape/`.
2. Klik **Download Free**. Nama berkas yang diunduh harus `eskape_SketchUp_v2.5.1_Free_Full_Beta.rbz`.
3. Pastikan kartu harga menunjukkan Rp0, Rp16.000/bulan, Rp79.000/tahun, dan Rp199.000/Lifetime. Klik tombol tiap paket Full; pesan WhatsApp harus memuat paket serta harga yang dipilih, ke `+62 858-1114-3043`.
4. Klik navigasi `Features`, `Pricing`, dan `Get started`.
5. Uji juga melalui HP.
6. Masuk ke SketchUp, buka ekstensi **eskape**, lalu About → Buy Full; periksa WhatsApp membuka nomor yang sama dan memasukkan Installation ID.

## F. Jika ada masalah
- **404 Not Found**: pastikan GitHub Pages memakai `main / (root)` dan file `index.html` berada di root. Lihat tab Actions jika ada error.
- **Tampilan tanpa CSS/gambar**: pastikan file `style.css`, folder `assets/`, dan `config.js` ada, dan kapitalisasi namanya sesuai.
- **Download 404**: periksa path file `downloads/eskape_SketchUp_v2.5.1_Free_Full_Beta.rbz` sesuai nama persis (huruf besar-kecil penting).
- **WhatsApp gagal**: pastikan browser tidak memblokir tab baru; file `config.js` mengandung `6285811143043`.
- **Halaman terlihat lama**: lakukan hard refresh `Ctrl+F5` dan pastikan commit sudah masuk branch main.
- **Akun tidak melihat menu Pages**: periksa izin admin/maintainer di repository dan visibility/plan.

## G. Update website dan file rilis di masa depan
1. Siapkan RBZ versi baru yang benar-benar lolos uji.
2. Upload RBZ ke folder `downloads/` di repository.
3. Edit dua href tombol Download Free di `index.html` agar menunjuk nama RBZ baru; lakukan commit.
4. GitHub Pages akan memublikasikan perubahan setelah deploy.
5. Sistem updater di dalam SketchUp yang mengandalkan Apps Script/Google Drive adalah sistem terpisah. GitHub Pages tidak otomatis memasukkan file rilis ke Google Drive.

## H. Keamanan penting
- **Jangan pernah upload** ZIP generator lisensi admin, `license_private.pem`, atau token rahasia ke GitHub. GitHub Pages bersifat publik.
- `config.js` boleh berisi nomor WhatsApp publik, **bukan** token akses dan bukan kunci admin.
- Website ini hanya untuk informasi, download, dan menghubungkan WhatsApp; bukan sistem pembayaran ataupun validator lisensi online.

Sumber resmi:
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository

## I. Khusus memperbarui repository GitHub yang sudah live
1. Buka repository GitHub lama dan pastikan branch yang dipakai GitHub Pages (umumnya `main`).
2. Unggah untuk **mengganti** `index.html`, `style.css`, `script.js`, serta `README_GITHUB_PAGES_ID.md`.
3. File `config.js`, folder `assets/`, dan `downloads/` tidak perlu diganti jika isinya memang sama.
4. Commit perubahan, lalu cek Settings → Pages dan buka situs; refresh paksa jika harga lama masih terlihat.
5. Jangan mengunggah file `.zip` langsung ke root repo dan berharap GitHub Pages mengekstraknya. Ekstrak ZIP terlebih dahulu.
