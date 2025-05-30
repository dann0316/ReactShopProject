import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import Card from "../components/Card.js";
import { Button } from "react-bootstrap";

const Home = ({ shoes, setShoes }) => {

    // 더 보기 카운트 state
    let [count, setCount] = useState(0);
    // 더 보기 상품 없음 state
    const [isDone, setIsDone] = useState(false);
    // 더 보기 시 로딩 state
    const [loading, setLoading] = useState(false);

    // 최근 본 상품 진열대
    useEffect(() => {
    if (!localStorage.getItem("watched")) {
        localStorage.setItem("watched", JSON.stringify([]));
    }
}, []);

    return (
        <div className="home-container">
            
            <div className="bg-container">

                <div className="bg-img"></div>
            </div>

            <div className="latest-container">
                <h4>최근 본 상품</h4>
                {/* // localStorage에 내가 들어간 페이지의 id에 해당하는 상품 넣어주면 됨 */}
                {(localStorage.getItem("watched")
                    ? JSON.parse(localStorage.getItem("watched"))
                    : []
                ).map((item, index) => {
                    return (
                        <div key={index} className="latest-inner-container">
                            <img
                                src={item.img}
                                alt={item.title}
                                width="10%"
                            />
                            <p>{item.title}</p>
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