import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { useQuery } from "react-query";

// fetchFn - 상품 전체 데이터 불러오기
const fetchProducts = async () => {
  const res = await axios.get("https://fakestoreapi.com/products");
  return res.data;
};

export const useProductsData = () => {
  // 초기 보여줄 상품 수
  const [visibleCount, setVisibleCount] = useState(6);
  // 더 이상 보여줄 상품 없을 때
  const [isDone, setIsDone] = useState(false);
  // 실제 렌더링할 상품 목록
  const [visibleProducts, setVisibleProducts] = useState([]);

  // react-query로 데이터 fetch
  const {
    data: products = [],
    isLoading,
    isError,
    error,
  } = useQuery(["products"], fetchProducts);

  // 새롭게 보여줄 상품 슬라이스 계산 (useMemo로 메모리 최적화)
  const slicedProducts = useMemo(() => {
    return products.slice(0, visibleCount);
  }, [products, visibleCount]);

  // 슬라이스된 상품 목록이 변경될 때만 상태 업데이트
  useEffect(() => {
    setVisibleProducts(slicedProducts);
  }, [slicedProducts]);

  // 🔹 상품 더 보기 핸들러
  const handleLoadMore = () => {
    const newCount = visibleCount + 3;

    if (newCount >= products.length) {
      setVisibleCount(products.length);
      setIsDone(true);
    } else {
      setVisibleCount(newCount);
    }
  };

  // 최종 리턴 객체
  return {
    visibleProducts,
    loading: isLoading,
    error: isError ? error : null,
    isDone,
    handleLoadMore,
    products,
  };
};
