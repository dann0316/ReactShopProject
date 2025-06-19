import Card from "../components/Card.js";
import LastestBanner from "../components/LatestBanner.js";
import { useProductsData } from "../hooks/useProductsData.js";

const Home = () => {
    const { visibleProducts, loading, error, isDone, handleLoadMore } =
        useProductsData();

    return (
        <div className="home-container">
            <div className="bg-container">
                <div className="bg-img"></div>
            </div>

            <LastestBanner />

            <div className="card-container">
                {visibleProducts.map((a, i) => (
                    <Card key={i} i={i} data={a} />
                ))}
            </div>

            {error && (
                <p style={{ color: "red" }}>에러 발생: {error.message}</p>
            )}

            <button
                className={`btn ${isDone ? "cursor-not-allowed" : "cursor-pointer"}`}
                onClick={handleLoadMore}
                disabled={loading || isDone}
            >
                {isDone ? (
                    "더 이상 상품 없음"
                ) : loading ? (
                    <div className="animate-spin rounded-full h-8 w-8 border-4 border-t-transparent border-blue-500"></div>
                ) : (
                    "더 보기"
                )}
            </button>
        </div>
    );
};

export default Home;
