import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import {
    Routes,
    Route,
    Link,
    Router,
    useNavigate,
    Outlet,
} from "react-router-dom";
//index.js에서도 추가할 게 있음 그건 react 디렉토리 구조랑 react 라이브러리 사용법에 따라 다른가?
import Detail from "./pages/Detail.js";
import Cart from "./pages/Cart.js";
import Home from "./pages/Home.js"
import data from "./data.js";
import Header from "./components/Header.js";

function App() {

    let [shoes, setShoes] = useState(data);

    return (
        <div className="App">
            <Header />

            <Routes>
                <Route path="/" element={<Home shoes={shoes} setShoes={setShoes} />}/>
                <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
                <Route path="cart" element={<Cart />} />
                {/* <Route path="/event" element={
                        <>
                            <h1>오늘의 이벤트</h1>
                            <Outlet />
                        </>
                    }>
                    <Route
                        path="one"
                        element={<h2>첫 주문시 양배추즙 서비스</h2>}/>
                    <Route path="two" element={<h2>생일기념 쿠폰 받기</h2>} />
                </Route> */}
            </Routes>
        </div>
    );
}

export default App;
