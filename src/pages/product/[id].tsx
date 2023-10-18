import { useRouter } from "next/router";

const DetailProductPage = () => {
	const { query } = useRouter();

	return (
		<div>
			<h1>Detail Product</h1>
			<p>Product : {query.id}</p>
		</div>
	);
};

export default DetailProductPage;

// tanda [].tsx pada sebuah file, menandakan paramater yang akan dikirimkan ke router
// cth: kita punya folder product dan didalam ada file [id].tsx
// maka ketika ingin memanggil nilainya, kita sesuaikan dengan nama file td
// sehingga jadi, {query.id}
