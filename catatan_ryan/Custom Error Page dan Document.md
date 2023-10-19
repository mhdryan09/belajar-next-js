# Custom Error Page dan Document

Pada file _document.tsx, itu menyimpan seluruh dokumen yang akan ditampilkan ke browser.
Biasanya, pada file tersebut bisa diisi link seperti cdn bootstrap, meta tag untuk SEO, setup Anaylitic dll
tidak disarankan menggunakan tag title di file _document. Karena nanti setiap halaman yg dipanggil akan menggunakan title yang sama.
Disarankan untuk membuat title di masing-masing page

_document.tsx itu bersifat general, semua nya akan berubah,
kalau di index.tsx, ini berdasarkan halaman nya.

=================================================================

Custom Error Page biasa diisi dengan error 404 atau error 500

erorr 404 berarti halaman yang diminta tidak ada di URL/routing kita.

