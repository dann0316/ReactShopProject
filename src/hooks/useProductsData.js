import axios from "axios";
import { useState } from "react";

export const useProductsData = ({setShoes}) => {

        // 더 보기 카운트 state
    const [count, setCount] = useState(0);
    // 더 보기 상품 없음 state
    const [isDone, setIsDone] = useState(false);
    // 더 보기 시 로딩 state
    const [loading, setLoading] = useState(false);

    const [error, setError] = useState(null);

    // 최근 본 상품 진열대

    // 복잡한 로직 -> async/await + try ... catch 직관적 방식으로 에러처리
    // 간단한 로직 -> .then().catch() -> 전통적인 Promise 방식으로 에러 처리

    const fetchshoeData = async (i) => {
        setLoading(true);

        try {
            const res = await axios.get(
                `https://codingapple1.github.io/shop/data${i}.json`
            );

            // 기존 shoe state에 새 데이터 추가
            setShoes((arr) => [...arr, ...res.data]);
        } catch (err) {
            console.error("Error: ", err);
            console.log(error);
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    return { loading, setLoading, count, setCount, isDone, setIsDone, fetchshoeData }
}