# Link dan Navigation

ada 2 cara untuk kita memindahkan halaman pada Next JS

1. Link
  Kita gunakan bawaan dari next yaitu next/link
  Penggunaanya adalah dengan tag `<Link>` dan untuk mengarahkan halaman, gunakan `href`

  `import Link from "next/link";`

  `<Link href={"/auth/login"}>disini</Link>`

2. Navigation
  Kita menggunakan `useRouter()` untuk mendapatkan paramater/slug dari URL/routing yang ingin kita targetkan
  Semisal, kita ingin melakukan redirect setelah menekan tombol login

  - Buat button lalu panggil fungsi `handleLogin()`
     <button onClick={() => handleLogin()}>Login</button>
  - Selanjutnya, panggil `useRouter()` dan buat fungsi `handleLogin()`
     `const router = useRouter();

      const handleLogin = () => {
        router.push("/product"); // redirect halaman
      }`

