import axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";

const fetchProducts = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    return res.data;
};

export const useProductsData = () => {
    const [visibleCount, setVisibleCount] = useState(6);
    const [isDone, setIsDone] = useState(false);

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
