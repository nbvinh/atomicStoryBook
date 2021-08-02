import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface Data {
  name: string;
  age: number;
  address: string;
  fisrtName: string;
}

export interface CounterState {
  value: number;
  arr: Data[];
}
const initialState: CounterState = {
  value: 0,
  arr: [
    {
      name: "khong",
      age: 20,
      address: "hanoi",
      fisrtName: "Biet",
    },
  ],
};

export const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    increments: (state) => {
      state.value += 1;
    },
    decrements: (state) => {
      state.value -= 1;
    },
    incrementByAmounts: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    addArrs: (state, action) => {
      state.arr.push(action.payload);
    },
    removeArrs: (state, action) => {
      let newarr = state.arr.filter((e) => e.age !== action.payload);
      state.arr = newarr;
    },
    editArrs: (state, action) => {
      state.arr.find((e) => {
        if (e.age === action.payload) {
          e.fisrtName = "Anh";
        }
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  increments,
  decrements,
  incrementByAmounts,
  addArrs,
  removeArrs,
  editArrs,
} = testSlice.actions;

export default testSlice.reducer;
