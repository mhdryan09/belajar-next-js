import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type productType = {
  id: number;
  name: string;
  price: number;
  size: string;
};

const ProductPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [products, setProducts] = useState([]);
  const { push } = useRouter();

  useEffect(() => {
    // jika belum login
    if (!isLogin) {
      // redirect ke halaman login
      push("/auth/login");
    }
  }, []);

  // fetch data product
  useEffect(() => {
    fetch("/api/product")
      .then((response) => response.json())
      .then((result) => {
        setProducts(result.data);
      });
  });

  return (
    <div>
      <h1>Product Page</h1>
      <ul>
        {products.map((product: productType) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductPage;
