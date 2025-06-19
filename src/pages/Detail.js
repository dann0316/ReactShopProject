import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { type } from "@testing-library/user-event/dist/type";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../store.js";
import { useProductsData } from "../hooks/useProductsData.js";

function Detail() {

    const { products } = useProductsData();

    let [removeDiv, setRemoveDiv] = useState(true);
    const { id } = useParams();
    console.log(id);
    
    const productImg = products.find((a) => a.id === Number(id))?.image;
    const productTitle = products.find((a) => a.id === Number(id))?.title;
    const productDes = products.find((a) => a.id === Number(id))?.description;
    const productPrice = products.find((a) => a.id === Number(id))?.price;



    // let findProduct = props.shoes.find((a) => a.id === id);
    let [input, setInput] = useState("");
    const [tab, setTab] = useState(0);

    let timeoutId;

    const stock = useSelector((state) => state.stock);
    const dispatch = useDispatch();

    useEffect(() => {
        // setRemoveDiv(true); 이렇게 해야 생기지 의존성 배열이 [count]면은
        timeoutId = setTimeout(() => {
            setRemoveDiv(false);
        }, 2000);

        return () => clearTimeout(timeoutId);
    }, []);

    // useEffect 학습용 input
    useEffect(() => {
        if (input !== "" && isNaN(input)) {
            alert("숫자만 입력해주세요.");
        }

        return () => setInput(""); //cleanup 함수 원래 input value
    }, [input]);

    const userEvent = () => {
        clearTimeout(timeoutId);
        console.log("User's Event Detected!");
        alert("축하드립니다! 할인 쿠폰 드립니다!");
    };

    useEffect(() => {
        const divStart = document.querySelector(".start");
        const timer = setTimeout(() => {
            divStart.classList.add("end");
        }, 100);

        return () => {
            clearTimeout(timer);
            divStart.classList.remove("end");
        };
    }, [tab]);

    return (
        <div className="container">
            {/* Detail 페이지 방문 후 2초 지나면 위 div 숨기기 */}
            {removeDiv ? (
                <div
                    onClick={userEvent}
                    className="alert alert-warning text-center"
                >
                    2초 이내 클릭시 할인
                </div>
            ) : null}

            <div className="row">
                <div className="col-md-6">
                    <img
                        src={productImg}
                        alt="shoe img"
                        width="100%"
                    />
                </div>
                <div className="col-md-6">
                    {/* useEffect 학습용 input */}
                    {/* <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="숫자만 입력하세요"
                    /> */}
                    <h4 className="pt-5">{productTitle}</h4>
                    <p>{productDes}</p>
                    <p>{productPrice}$</p>
                    <button
                        className="btn btn-danger"
                        onClick={() => {
                            console.log(products.id);
                            dispatch(addProduct(products.id));
                        }}
                    >
                        장바구니에 담기
                    </button>
                </div>
            </div>
            {/* <Nav justify variant="tabs" defaultActiveKey="link-0">
                <Nav.Item>
                    <Nav.Link
                        eventKey="link-0"
                        onClick={() => {
                            setTab(0);
                        }}
                    >
                        Tab 0
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link
                        eventKey="link-1"
                        onClick={() => {
                            setTab(1);
                        }}
                    >
                        Tab 1
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link
                        eventKey="link-2"
                        onClick={() => {
                            setTab(2);
                            //이벤트에는 무조건 콜백?
                            // 또 다른 곳에는?
                        }}
                    >
                        Tab 2
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContent tab={tab} /> */}
        </div>
    );
}

export default Detail;
//컴포넌트마다 key prop이 있는건 뭐였더라

function TabContent(props) {
    return (
        <div className="start">
            {
                [<div>내용 0</div>, <div>내용 1</div>, <div>내용 2</div>][
                    props.tab
                ]
            }
        </div>
    );
}
