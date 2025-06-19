import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LastestBanner = () => {
  const [watchedItems, setWatchedItems] = useState([]);

  useEffect(() => {
    const watched = JSON.parse(localStorage.getItem("watched")) || [];
    setWatchedItems(watched);
  }, []);

  const removeFromWatched = (id) => {
    const updated = watchedItems.filter((item) => item.id !== id);
    localStorage.setItem("watched", JSON.stringify(updated));

    setWatchedItems(updated);
  };

  const navigate = useNavigate();

  return (
    <div className="latest-container">
      <h4 className="latest-heading">최근 본 상품</h4>
      {/* // localStorage에 내가 들어간 페이지의 id에 해당하는 상품 넣어주면 됨 */}
      {(localStorage.getItem("watched")
        ? JSON.parse(localStorage.getItem("watched"))
        : []
      ).map((item, index) => {
        return (
          <div
            key={index}
            className="latest-inner-container"
            onClick={() => {
              navigate(`/detail/${item.id}`);
            }}
          >
            <img src={item.img} alt="item-img" width="30%" />
            <p>{item.title}</p>
            <button
              className="remove-btn"
              onClick={(e) => {
                e.stopPropagation(); // 상위 div 클릭 방지 이거 이벤트 버블링인가
                removeFromWatched(item.id); // ❗ 삭제 함수 실행
              }}
            >
              DEL
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default LastestBanner;
