# CSS Modules
Kita bisa memisahkan styling CSS berdasarkan komponen yang kita pilih, dengan menggunakan CSS Modules

CSS Modules bersifat local scope. Ketika digunakan, dia otomatis membuat unique classname

Langkah-langkah 
  1. kita buat file css di dalam folder Navbar
  2. kemudian pada komponen/page kita import style tersebut
  3. selanjutnya kita bisa panggil style nya

  ```bash
      import styles from './Navbar.module.css';

      export default function Navbar() {
        return (
          <div className={styles.navbar}>
            <div>Navbar</div>
          </div>
        );
      }
  ```
Agar terlihat terstruktur, kita bisa memisahkan nya ke dalam masing masing tampilan

1. Kita buat folder `views`
2. Lalu di dalam nya kita buat folder, misal Auth 
3. Di dalam Auth, ada Login. dan kita isi dengan file index.tsx dan Login.module.css
4. Adapun isinya sama persis dengan saat kita buat di dalam folder src/auth. Cuman kita menghilangkan kerumitan nya.
  Sehingga yang di dalam folder auth, hanya memanggil komponen `LoginViews`

Untuk Styling, jika kita membuat di global atau di dalam folder styles/globals.css maka kita bisa memanggil style nya di manapun di dalam komponen kita. 
Jadi, kita bisa kombinasikan style global atau bisa gunakan style spesifik buat komponen itu sendiri

## CSS di dalam JS
  Pada React, kita bisa memberikan styling di dalam tag html langsung sebagai properti.

  ```bash
          <p
        style={{
          color: "red",
          border: "1px solid red",
          padding: "10px",
          borderRadius: "10px",
        }}
      >
  ```

  Disini, kita gunakan camelCase apabila menggunakan style properti dari CSS.
  
Pada Belajar Next JS kali ini kita menggunakan TailwindCSS dan SCSS (CSS Pre-Processor)