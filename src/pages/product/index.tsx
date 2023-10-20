import { fetcher } from "@/lib/swr/fetcher";
import ProductView from "@/views/Product";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";

const ProductPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  // const [products, setProducts] = useState([]);
  const { push } = useRouter();

  useEffect(() => {
    // jika belum login
    if (!isLogin) {
      // redirect ke halaman login
      push("/auth/login");
    }
  }, []);

  const { data, error, isLoading } = useSWR("/api/product", fetcher);
  
  // fetch data product
  // useEffect(() => {
  //   fetch("/api/product")
  //     .then((response) => response.json())
  //     .then((result) => {
  //       setProducts(result.data);
  //     });
  // });

  return (
    <div>
      <ProductView products={isLoading ? [] : data.data} />
    </div>
  );
};

export default ProductPage;
