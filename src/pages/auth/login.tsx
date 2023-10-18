import Link from "next/link";
import { useRouter } from "next/router";
const LoginPage = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/product");
  }

	return (
		<div>
			<h1>Login Page</h1>
      
      <button onClick={() => handleLogin()}>Login</button>
			<p>
				Belum punya akun? Registrasi dong! <Link href={"/auth/register"}> disini </Link>
			</p>
		</div>
	);
};

export default LoginPage;
