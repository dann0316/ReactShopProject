import { useSelector, useDispatch } from "react-redux";
import {
  addCount,
  reduceCount,
  sortProduct,
  reverseSortProduct,
  deleteProduct,
} from "../store.js";

const Cart = () => {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

  return (
    <div className="container py-40">
      <div className="w-3/5 flex flex-row items-center gap-5">
        <button
          className="btn hover-transition px-3 py-2"
          onClick={() => {
            dispatch(sortProduct("name"));
          }}
        >
          정렬
        </button>
        <button
          className="btn hover-transition px-3 py-2"
          onClick={() => {
            dispatch(reverseSortProduct("name"));
          }}
        >
          역정렬
        </button>
      </div>

      <table className="w-3/5 flex flex-col gap-5">
        <thead className="w-full border border-[#9dab96] p-5 rounded-3xl">
          <tr className="w-full flex flex-row font-extrabold">
            <th className="w-1/12">ID</th>
            <th className="w-7/12">상품명</th>
            <th className="w-1/12">수량</th>
            <th className="w-1/12">수량 +</th>
            <th className="w-1/12">수량 -</th>
            <th className="w-1/12">상품 제거</th>
          </tr>
        </thead>

        <tbody className="w-full border border-[#9dab96] flex flex-col gap-5 p-5 rounded-3xl">
          {data.map((item, index) => {
            return (
              <tr
                key={index}
                className="w-full flex flex-row border border-[#9dab96] rounded-3xl py-3"
              >
                <td className="w-1/12 flex justify-center items-center">
                  {item.id}
                </td>
                <td className="w-7/12 flex justify-center items-center">
                  {item.name}
                </td>
                <td className="w-1/12 flex justify-center items-center">
                  {item.count}
                </td>
                <td className="w-1/12 flex justify-center items-center">
                  <button
                    className="cursor-pointer"
                    onClick={() => {
                      dispatch(addCount(index));
                    }}
                  >
                    ++
                  </button>{" "}
                </td>
                <td className="w-1/12 flex justify-center items-center">
                  <button
                    className="cursor-pointer"
                    onClick={() => {
                      dispatch(reduceCount(index));
                    }}
                  >
                    --
                  </button>{" "}
                </td>
                <td className="w-1/12 flex justify-center items-center">
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
