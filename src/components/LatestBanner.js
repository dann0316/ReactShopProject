import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LastestBanner = () => {
  const [watchedItems, setWatchedItems] = useState([]);

  useEffect(() => {
    // 키가 watched인 값 변수에 넣기
    const data = localStorage.getItem("watched");

    // watched에 해당하는 값이 없다면
    if (!data) {
      // watched에 빈 배열 넣기
      localStorage.setItem("watched", JSON.stringify([]));

      // watched에 해당하는 값이 있다면
    } else {
      // try-catch
      try {
        // watched 해당하는 값 parse한 거 변수에 넣기
        const parsed = JSON.parse(data);

        // parsed가 배열이면 parsed를 watchedItems에 parsed 넣기
        if (Array.isArray(parsed)) setWatchedItems(parsed);
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const removeFromWatched = (id) => {
    const updated = watchedItems.filter((item) => item?.id !== id);
    localStorage.setItem("watched", JSON.stringify(updated));
    setWatchedItems(updated);
  };

  const navigate = useNavigate();

  return (
    <div className="bg-white fixed top-96 left-5 z-40 w-1/6 min-h-[2rem] border border-[#9dab96] rounded-3xl flex flex-col justify-center items-start p-5 gap-5">
      <h4 className="text-base md:text-lx lg:text-2xl font-semibold uppercase">latest products</h4>
      {/* // localStorage에 내가 들어간 페이지의 id에 해당하는 상품 넣어주면 됨 */}
      {watchedItems.map((item, i) => {
        return (
          <div
            key={i}
            className="w-full h-auto flex flex-row justify-between items-center border border-[#9dab96] rounded-3xl p-5 cursor-pointer gap-5"
            onClick={() => {
              navigate(`/detail/${item.id}`);
            }}
          >
            <div className="h-16 w-2/6 flex justify-center items-center">
              <img
                src={item?.image}
                alt="item-img"
                className="h-full w-auto object-contain"
              />
            </div>
            <p className="w-3/6">
              {item?.title.length > 30
                ? item?.title.slice(0, 30) + "..."
                : item?.title}
            </p>
            <div className="w-1/6">
              <button
                className="btn hover-transition px-2 py-1 text-sm"
                onClick={(e) => {
                  e.stopPropagation(); // 상위 div 클릭 방지 이거 이벤트 버블링인가 gpt 메모
                  removeFromWatched(item?.id);
                }}
              >
                DEL
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LastestBanner;
