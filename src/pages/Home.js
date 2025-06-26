import LoadingSpinner from "../components/LoadingSpinner.js";
import ErrorMessage from "../components/ErrorMessage.js";
import Card from "../components/Card.js";
import LastestBanner from "../components/LatestBanner.js";
import { useProductsData } from "../hooks/useProductsData.js";
import MainBanner from "../components/MainBanner.js";

const Home = () => {
    const {
        visibleProducts,
        setVisibleProducts,
        loading,
        error,
        isDone,
        handleLoadMore,
    } = useProductsData();
    return (
        <main className="container overflow-y-auto">
            {error && <ErrorMessage />}

            {loading && <LoadingSpinner />}

            {!error && !loading && (
                <>
                    {/* Main Banner Section */}
                    <div className="w-full h-auto py-24 flex justify-center items-center bg-[#a0b39d]">
                        <MainBanner />
                    </div>

                    {/* Latest Banner Section */}
                    <LastestBanner />

                    {/* Products Section */}
                    <div className="min-w-96 w-11/12 lg:w-3/5 flex flex-col justify-center items-center border border-[#9dab96] rounded-3xl p-5 gap-5 mb-5 bg-[#a0b39d]">
                        <button
                            onClick={() => {
                                const copy = [...visibleProducts];
                                copy.sort((a, b) =>
                                    a.title.localeCompare(b.title)
                                );
                                setVisibleProducts(copy);
                            }}
                        >
                            정렬
                        </button>
                        <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-4">
                            {visibleProducts.map((a, i) => (
                                <Card key={i} data={a} />
                            ))}
                        </div>
                        <button
                            className={`hover-transition p-5 btn font-semibold uppercase ${isDone ? "cursor-not-allowed" : "cursor-pointer"}`}
                            onClick={handleLoadMore}
                            disabled={loading || isDone}
                        >
                            {isDone ? (
                                "No More Products"
                            ) : loading ? (
                                <div className="animate-spin rounded-full h-8 w-8 border-4 border-t-transparent border-[#9dab96]"></div>
                            ) : (
                                "load more"
                            )}
                        </button>
                    </div>
                </>
            )}
        </main>
    );
};

export default Home;
