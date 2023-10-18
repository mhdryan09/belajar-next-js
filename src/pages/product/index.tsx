import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProductPage = () => {
	const [isLogin, setIsLogin] = useState(false);
	const {push} = useRouter();

	useEffect(() => {
		// jika belum login
		if (!isLogin) {
			// redirect ke halaman login
			push('/auth/login');
		}
	}, [])

	return (
		<div>
			<h1>Product Page</h1>
		</div>
	);
};

export default ProductPage;
