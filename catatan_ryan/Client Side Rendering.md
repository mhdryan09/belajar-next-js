# Client Side Rendering
  Pengambilan data eksternal dan transformasi kode menjadi representasi HTML dari sebuah UI terjadi di client (client-side).

  Ciri yang dapat kita lihat ketika kita menggunakan Client Side Rendering adalah Ketika pertama kali aplikasi nya di buka, dimana pengguna akan melihat sedikit delay sebelum mereka bisa melihat halaman secara utuh. Terutama ketika kita mengambil data yang cukup besar.

  Kalau biasanya kita udah pernah membuka sekali, itu biasanya akan lebih cepat untuk me-load halaman yang sama.
  
  Pada Next js, ada beberapa cara melakukan Client Side Rendering

  1. Menggunakan fetch di dalam `useEffect()`
       ```javascript
       useEffect(() => {
          fetch("/api/product")
            .then((response) => response.json())
            .then((result) => {
              setProducts(result.data);
            });
        });
      ```
      
      Kita akan mengambil data dari API tapi dari sisi client. Cirinya adalah kita gunakan `useEffect()` . Kalau kita menggunakan server side atau static side generation, kita tidak bisa gunakan useEffect() seperti ini.

  2. Menggunakan Skeleton
    Skeleton berfungsi untuk mevisualkan sebuah data yang ditampilkan, namun perlu load data ke database atau API
    disini, kita bisa gunakan CSS sebagai custom skeleton dengan animasi sebagai loading nya.
  
  3. SWR
    SWR adalah sebuah React Hooks for Data Fetching. Jadi, kita tidak menggunakan useEffect() melainkan SWR.
    dokumentasi : https://swr.vercel.app/

    

