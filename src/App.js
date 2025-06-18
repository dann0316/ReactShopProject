import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes,Route } from "react-router-dom";
//index.js에서도 추가할 게 있음 그건 react 디렉토리 구조랑 react 라이브러리 사용법에 따라 다른가?
import Detail from "./pages/Detail.js";
import Cart from "./pages/Cart.js";
import Home from "./pages/Home.js";
import Header from "./components/Header.js";

function App() {

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
