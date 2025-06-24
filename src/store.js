import { configureStore, createSlice } from "@reduxjs/toolkit";

// 장바구니 관련 state
const data = createSlice({
  name: "data",
  initialState: [],
  reducers: {
    addCount(state, action) {
      state[action.payload].count += 1;
    },
    reduceCount(state, action) {
      if (state[action.payload].count > 1) {
        state[action.payload].count -= 1;
      } else {
        alert("최소 수량입니다!");
      }
    },
    sortProduct(state, action) {
      state.sort((a, b) => {
        return a[action.payload] > b[action.payload] ? 1 : -1;
      });
    },
    reverseSortProduct(state, action) {
      state.sort((a, b) => {
        return a[action.payload] > b[action.payload] ? -1 : 1;
      });
    },
    addProduct(state, action) {
      const item = state.find((item) => item.id === action.payload?.id);
      if (!item) {
        state.push({
          id: action.payload?.id,
          name: action.payload?.title,
          count: 1,
        });
        alert("장바구니에 담겼습니다.");
      } else {
        const index = state.findIndex((a) => a.id === action.payload?.id);
        state[index].count += 1;
        alert("이미 장바구니에 담긴 상품입니다.");
      }
    },
    deleteProduct(state, action) {
      // 쓰는 곳에 item.id 보내면 그거 받고 그걸 같은 id를 삭제
      const id = action.payload;
      let copy = [...state];
      const index = copy.findIndex((a) => a.id === id);
      copy.splice(index, 1);
      alert("장바구니에서 삭제되었습니다.");
      return copy;
    },
  },
});

export const {
  addCount,
  reduceCount,
  sortProduct,
  reverseSortProduct,
  addProduct,
  deleteProduct,
} = data.actions;

const store = configureStore({
  reducer: {
    data: data.reducer,
  },
});

export default store;
