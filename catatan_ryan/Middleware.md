# Middleware

Middleware pada Next.js adalah fungsi yang berjalan di antara permintaan (request) dari klien dan respons (response) dari server. Middleware dapat digunakan untuk melakukan tugas-tugas seperti otentikasi, otorisasi, logging, atau manipulasi permintaan sebelum mencapai handler utama.

Contohnya, jika Anda ingin melindungi halaman tertentu agar hanya dapat diakses oleh pengguna yang sudah masuk, Anda dapat menggunakan middleware untuk memeriksa status masuk pengguna sebelum mengizinkan akses ke halaman tersebut. Jika pengguna belum masuk, middleware dapat mengarahkan pengguna ke halaman login.

Middleware dapat digunakan untuk mengubah atau menambahkan properti pada objek req (permintaan) dan res (tanggapan).

// contoh middleware untuk otentikasi
const authMiddleware = (req, res, next) => {
  if (!req.user) {
    // redirect ke halaman login jika pengguna belum masuk
    res.redirect('/login');
  } else {
    // lanjutkan ke handler utama jika pengguna sudah masuk
    next();
  }
};

// menggunakan middleware pada routing Next.js
app.get('/protected-page', authMiddleware, (req, res) => {
  // handler utama halaman yang memerlukan otentikasi
  res.send('Halaman yang hanya bisa diakses setelah masuk');
});