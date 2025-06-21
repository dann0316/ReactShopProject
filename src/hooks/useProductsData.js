import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";

// fetchFn
const fetchProducts = async () => {
  const res = await axios.get("https://fakestoreapi.com/products");
  return res.data;
};

export const useProductsData = () => {
  // 상품 처음 보여지는 state 초기값 6
  const [visibleCount, setVisibleCount] = useState(6);
  // 상품 더 이상 볼 거 없을 때 state
  const [isDone, setIsDone] = useState(false);

  // useQuery 에서 가져오는 상태관리 항목들
  // 캐시 키: ["products"] 단일 보다는 배열이 나음 연속때문인가? fetchFn: fetchProducus
  const {
    data: products = [],
    isLoading,
    isError,
    error,
  } = useQuery(["products"], fetchProducts);

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
    loading: isLoading,
    error: isError ? error : null,
    isDone,
    handleLoadMore,
    products,
  };
};
