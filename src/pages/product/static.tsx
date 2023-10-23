import ProductView from "@/views/Product";
import ProductType from "@/types/product.type";

const ProductPage = (props: { products: ProductType[] }) => {
  const { products } = props;
  return (
    <div>
      <ProductView products={products} />
    </div>
  );
};

export default ProductPage;

export async function getStaticProps() {
  // fetch data
  const res = await fetch("http://localhost:3000/api/product");
  const response = await res.json();

  return {
    props: {
      products: response.data,
    },
    revalidate: 10,
  };
}

// revalidate adalah sebuah trigger untuk mengecek apakah ada perubahan data atau tidak setelah 10 detik 
// jika ada perubahan maka akan di refresh, jika tidak ada perubahan, maka tidak di refresh
// yang di cek perubahan adalah data yang ada dari API. 
