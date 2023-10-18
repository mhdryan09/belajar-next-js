import { useRouter } from "next/router";

const ShopPage = () => {
	const { query } = useRouter();
  console.log(query);
  
	return (
		<div>
			<h1>Shop Page</h1>
      {/* cara pertama : */}
			{/* <p>Slug : {`${query.slug && query.slug[0]} - ${query.slug[1]}`}</p> */}
			<p>Slug : {`${query.slug && query.slug[0] + " - " + query.slug[1]}`}</p>
		</div>
	);
};

export default ShopPage;

// [...slug] adalah untuk menangkap parameter yang dikirim oleh routing/URL. Penamaannya bebas
// slug pada URL disebut sebagai segment
 
// [[..slug]] artinya untuk menangkap beberapa segment dari URL yang dikirim oleh routing / URL dan diakses sebagai index.
// sehingga slug nya bersifat optional