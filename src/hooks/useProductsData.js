import axios from "axios";
import { useEffect, useState } from "react";

export const useProductsData = () => {
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);

  const [isDone, setIsDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setProducts(res.data);
    } catch (err) {
      setError(err);
      console.error("Error fetching products:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleLoadMore = () => {
    const newCount = visibleCount + 3;

    if (newCount >= products.length) {
      setVisibleCount(products.length);
      setIsDone(true);
    } else {
      setVisibleCount(newCount);
    }
  };

  const visibleProducts = products.slice(0, visibleCount);

  return {
    visibleProducts,
    loading,
    error,
    isDone,
    handleLoadMore,
    products,
  };
};
