import { fetcher } from "@/lib/swr/fetcher";
import ProductType from "@/types/product.type";
import DetailProduct from "@/views/DetailProduct";
import { useRouter } from "next/router";
import useSWR from "swr";

const DetailProductPage = ({ product }: { product: ProductType }) => {
  const { query } = useRouter();
  // Client Side
  // const { data, error, isLoading } = useSWR(`/api/product/${query.product}`, fetcher);

  return (
    <div>
      {/* Client Side */}
      {/* <DetailProduct product={isLoading ? {} : data.data} /> */}

      {/* Server Side & Static Side */}
      <DetailProduct product={product} />
    </div>
  );
};

export default DetailProductPage;

// tanda [].tsx pada sebuah file, menandakan paramater yang akan dikirimkan ke router
// cth: kita punya folder product dan didalam ada file [id].tsx
// maka ketika ingin memanggil nilainya, kita sesuaikan dengan nama file td
// sehingga jadi, {query.id}

// Jika ingin menggunakan Server Side
export async function getServerSideProps({
  params,
}: {
  params: { product: string };
}) {
  // fetch data
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/product/${params.product}`
  );
  const response = await res.json();

  return {
    props: {
      product: response.data,
    },
  };
}


// Jika ingin menggunakan static side, maka kita perlu mendaftarkan path nya
// export async function getStaticPaths() {
//   const res = await fetch("http://localhost:3000/api/product");
//   const response = await res.json();

//   const paths = response.data.map((product: ProductType) => ({
//     params: {
//       product: product.id,
//     },
//   }))
  
//   return { paths, fallback: false };
// }

// export async function getStaticProps({
//   params,
// }: {
//   params: { product: string };
// }) {
//   // fetch data
//   const res = await fetch(
//     `http://localhost:3000/api/product/${params.product}`
//   );
//   const response = await res.json();

//   return {
//     props: {
//       product: response.data,
//     },
//   };
// }
