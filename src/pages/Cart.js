import { useSelector, useDispatch } from "react-redux";
import {
  addCount,
  sortProduct,
  reverseSortProduct,
  deleteProduct,
} from "../store.js";

function Cart() {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="cart-btn-container">
        <button
          className="btn"
          onClick={() => {
            dispatch(sortProduct("name"));
          }}
        >
          정렬
        </button>
        <button
          className="btn"
          onClick={() => {
            dispatch(reverseSortProduct("name"));
          }}
        >
          역정렬
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>수량 추가</th>
            <th>상품 제거</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.count}</td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(addCount(index));
                    }}
                  >
                    +
                  </button>{" "}
                </td>
                <td>
                  <button
                    onClick={(e) => {
                      console.log(item.id);
                      dispatch(deleteProduct(item.id));
                    }}
                  >
                    🗑️
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Cart;
