import Card from "../components/Card.js";
import LastestBanner from "../components/LatestBanner.js";
import { useProductsData } from "../hooks/useProductsData.js";
import bg from "../img/bg.png";

const Home = () => {
  const { visibleProducts, loading, isDone, handleLoadMore } =
    useProductsData();

  // 로딩화면이랑 에러화면도 해야함
  
  return (
    <main className="container overflow-y-auto">
      {/* Main Banner Section */}
      <div className="w-full h-auto py-24 flex justify-center items-center bg-[#a0b39d]">
        <img src={bg} alt="bg-img" className="h-80" />
      </div>

      <LastestBanner />

      {/* Products Section */}
      <div className="w-3/5 flex flex-col justify-center items-center border border-[#9dab96] rounded-3xl p-5 gap-5 mb-5 bg-[#a0b39d]">
        <div class="w-full grid grid-cols-3 gap-4">
          {visibleProducts.map((a, i) => (
            <Card key={i} i={i} data={a} />
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
            "Load More"
          )}
        </button>
      </div>
    </main>
  );
};

export default Home;
