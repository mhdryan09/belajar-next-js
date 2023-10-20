# Static Side Generation
HTML akan di generate di Server namun hanya di generate sekali saat `build time`. Sehingga content yang ditampilkan bersifat statis.

## Client Side vs Server Side vs Static

- Client Side dan Server side, ketika ada perubahan di sebuah API maka dia akan langsung konek atau terhubung untuk mengupdate data dan menampilkan nya.

- Static side, dia hanya menampilkan data pada saat dia terakhir di build. Jadi, jika ada perubahan API, maka dia tidak update. Harus di build ulang untuk mendapatkan perubahan tersebut.

Jadi, dari ketiga tersebut, perbedaan nya ada di saat build nya. kalau Client dan Server side, di build saat fase run time alias fase development.

sedangkan Static, di build saat proses untuk production.

-------------------------------------------------

Pada Next JS, kita dibebaskan untuk menerapkan ketiga cara di atas untuk setiap masing masing halaman yang kita punya.

Kalau kita membuat dengan Static side, disarankan untuk tidak membuatnya dengan data yang dinamis. 

Contoh, Landing Page yang menggunakan templating.

