import Spinner from "react-bootstrap/Spinner";
import Card from "../components/Card.js";
import { Button } from "react-bootstrap";
import LastestBanner from "../components/LatestBanner.js";
import { useProductsData } from '../hooks/useProductsData.js'
import { useState } from "react";

const Home = ({shoes, setShoes}) => {

    const { loading, setLoading, count, setCount, isDone, setIsDone, fetchshoeData } = useProductsData({ setShoes });

    return (
        <div className="home-container">

            {/* Main Banner */}
            <div className="bg-container">
                <div className="bg-img"></div>
            </div>

            <LastestBanner />

            <div className="card-container">
                {shoes.map((a, i) => {
                    return <Card i={i} key={i} shoes={shoes} />;
                })}
            </div>

            <Button
                className={`btn
                    ${isDone ? "cursor-not-allowed" : "cursor-pointer"}
                    `}
                onClick={() => {
                    if (isDone) return;

                    setLoading(true);
                    setCount(count + 1);

                    if (count === 0) {
                        setLoading(true);
                        fetchshoeData(2);
                    } else if (count === 1) {
                        setLoading(true);
                        fetchshoeData(3);
                        setIsDone(true);
                    }

                }}
            >
                {isDone ? (
                    "더 이상 상품 없음"
                ) : loading ? (
                    <Spinner animation="border" size="sm" role="status" />
                ) : (
                    "더 보기"
                )}
            </Button>
        </div>
    );
};

export default Home;
