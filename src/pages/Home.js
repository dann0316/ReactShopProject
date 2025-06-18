import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import Card from "../components/Card.js";
import { Button } from "react-bootstrap";
// import MainBanner from "../components/MainBanner.js";
import { useNavigate } from "react-router-dom";

const Home = ({ shoes, setShoes }) => {
    // 더 보기 카운트 state
    const [count, setCount] = useState(0);
    // 더 보기 상품 없음 state
    const [isDone, setIsDone] = useState(false);
    // 더 보기 시 로딩 state
    const [loading, setLoading] = useState(false);

    const [watchedItems, setWatchedItems] = useState([]);

    // 최근 본 상품 진열대
    useEffect(() => {
        const watched = JSON.parse(localStorage.getItem("watched")) || [];
        setWatchedItems(watched);

        // 미니 장바구니
        if (!localStorage.getItem("cart")) {
            localStorage.setItem("cart", JSON.stringify([]));
        }
    }, []);

    const removeFromWatched = (id) => {

        const updated = watchedItems.filter((item) => item.id !== id);
        localStorage.setItem("watched", JSON.stringify(updated));

        setWatchedItems(updated);
    };

    // navigate 변수
    const navigate = useNavigate();

    return (
        <div className="home-container">
            {/* Main Banner */}
            {/* <MainBanner /> */}
            <div className="bg-container">
                <div className="bg-img">

                </div>
            </div>

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
                            <img src={item.img} alt="" width="30%" />
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

            <div className="card-container">
                {shoes.map((a, i) => {
                    return <Card i={i} key={i} shoes={shoes} />;
                })}
            </div>
            <Button
                className="btn"
                onClick={() => {
                    if (isDone) return;

                    setLoading(true);
                    setCount(count + 1);

                    if (count === 0) {
                        axios
                            .get(
                                "https://codingapple1.github.io/shop/data2.json"
                            )
                            .then((res) => {
                                console.log(res.data);
                                let copy = [...shoes];
                                copy.push(...res.data);
                                setShoes(copy);
                            })
                            .catch(() => {
                                //예외처리
                                console.log("실패함 ㅅㄱ");
                            })
                            .finally(() => setLoading(false));
                    } else if (count === 1) {
                        axios
                            .get(
                                "https://codingapple1.github.io/shop/data3.json"
                            )
                            .then((res) => {
                                console.log(res.data);
                                let copy = [...shoes];
                                copy.push(...res.data);
                                setShoes(copy);
                            })
                            .catch(() => {
                                //예외처리
                                console.log("실패함 ㅅㄱ");
                            })
                            .finally(() => setLoading(false));
                    } else if (count === 2) {
                    } else {
                        setIsDone(true);
                        setLoading(false);
                    }
                }}
                style={{
                    cursor: isDone ? "not-allowed" : "pointer",
                }}
            >
                {isDone ? (
                    "더 이상 상품 없음"
                ) : loading ? (
                    <Spinner animation="border" size="sm" role="status" />
                ) : (
                    `더 보기 ${count}`
                )}
            </Button>
        </div>
    );
};

export default Home;
