// import { type } from "@testing-library/user-event/dist/type";
import { useDispatch } from "react-redux";
import { addProduct } from "../store.js";
import { useProductsData } from "../hooks/useProductsData.js";
import Modal from "../components/Modal.js";
import { useDetailHandler } from "../hooks/useDetailHandler.js";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "../components/ui/tabs";
import { useEffect } from "react";

const Detail = () => {
    // 커스텀 훅에서 products로 데이터 가져오기
    const { products } = useProductsData();

    const { modal, countDown, id, userEvent } = useDetailHandler();

    // products 중 지금 디테일 페이지에 보여줌 상품 id 찾기
    const product = products.find((a) => a.id === Number(id));

    // ??은 뭐였지
    const productImg = product?.image;
    const productTitle = product?.title;
    const productDes = product?.description;
    const productPrice = product?.price;

    // Detail에서 본 product id lateset products에 넣기
    useEffect(() => {
        
        if (!product) return; // 🔒 product가 없으면 아무 것도 하지 않음

        try {
            let watched = JSON.parse(localStorage.getItem("watched")) || [];
            if (!Array.isArray(watched)) watched = [];

            const exists = watched.some((item) => item?.id === product.id);
            if (!exists) {
                watched.push(product);
                localStorage.setItem("watched", JSON.stringify(watched));
            }
        } catch (e) {
            console.error(e);
        }
    }, [product]);

    // Redux store.js에서 가져온 것
    const dispatch = useDispatch();

    // useEffect 학습용 input
    // const [input, setInput] = useState("");
    // useEffect(() => {
    //     if (input !== "" && isNaN(input)) {
    //         alert("숫자만 입력해주세요.");
    //     }
    //     return () => setInput(""); //cleanup 함수 원래 input value
    // }, [input]);

    // 탭 UI 내용 애니메이션
    // useEffect(() => {
    //     const divStart = document.querySelector(".start");
    //     const timer = setTimeout(() => {
    //         divStart.classList.add("end");
    //     }, 100);

    //     return () => {
    //         clearTimeout(timer);
    //         divStart.classList.remove("end");
    //     };
    // }, [tab]);

    // 상품이 없는 것 -> 에러, 오는 중
    // 상품이 있는 것 -> 랜더링

    // 이건 오는 중
    if (!product) {
        return (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
                <h4 className="text-3xl font-extrabold text-white">
                    Loading...
                </h4>
            </div>
        );
    }

    // 옵셔널 체이닝은 안전하지만, JSX 내부에서 null 객체의 속성을 사용하려고 하면 여전히 렌더링 중 오류 발생 가능 그리고 Hook 이전에 early return 조건문이 있으면 React가 컴포넌트를 예측 못해서 에러 발생 이거 때문에 if return을 맨 아래 두는 거구나

    return (
        <div className="container py-40">
            {/* Modal Section */}
            {modal ? (
                <Modal
                    event={userEvent}
                    content={`${countDown}초 이내 클릭 시 할인!!`}
                />
            ) : null}

            {/* Product Detail Section */}
            <div className="w-3/5 border border-[#9baa95] rounded-3xl flex flex-row justify-between p-10 gap-10">
                <div className="w-1/3 flex-row-center border border-[#9baa95] rounded-3xl p-10">
                    <img
                        src={productImg}
                        alt="product-img"
                        className="max-h-70 max-w-70 h-auto w-auto min-h-5 min-w-5"
                    />
                </div>

                <div className="w-2/3 flex-col-center gap-5">
                    <h4 className="text-3xl font-semibold">{productTitle}</h4>
                    <p>{productDes}</p>
                    <p className="text-xl font-medium">{productPrice} $</p>
                    <button
                        className="btn p-5 hover-transition"
                        onClick={() => {
                            dispatch(addProduct(product));
                        }}
                    >
                        장바구니에 담기
                    </button>
                </div>
            </div>

            <Tabs defaultValue="tab0" className="w-[400px]">
                <TabsList>
                    <TabsTrigger
                        value="tab0"
                        className="text-2xl font-semibold px-2 py-1 border border-[#9baa95]"
                    >
                        Tab 0
                    </TabsTrigger>
                    <TabsTrigger
                        value="tab1"
                        className="text-2xl font-semibold"
                    >
                        Tab 1
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="tab0">Tab0 - Content0</TabsContent>
                <TabsContent value="tab1">Tab1 - Content1</TabsContent>
            </Tabs>

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
};

export default Detail;

// function TabContent(props) {
//     return (
//         <div className="start">
//             {
//                 [<div>내용 0</div>, <div>내용 1</div>, <div>내용 2</div>][
//                     props.tab
//                 ]
//             }
//         </div>
//     );
// }
