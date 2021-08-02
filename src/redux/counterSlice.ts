import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import axiosClient from "../api";
import postApi from "../api/postApi";
import { RootState } from "./store";
export interface Data {
  name: string;
  age: number;
  address: string;
  fisrtName: string;
}

export interface DataPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface CounterState {
  value: number;
  arr: Data[];
  postArr: DataPost[];
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
  postArr: [],
};

export const fetchPost = createAsyncThunk(
  "counter/fetchPost",
  async (userId: number, { getState }) => {
    const { counterReducer } = getState() as RootState;
    console.log(counterReducer);
    const response = await postApi.getAll();
    return response;
  }
);

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    addArr: (state, action: PayloadAction<Data>) => {
      state.arr.push(action.payload);
    },
    removeArr: (state, action: PayloadAction<number>) => {
      let newarr = state.arr.filter((e) => e.age !== action.payload);
      state.arr = newarr;
    },
    editArr: (state, action: PayloadAction<number>) => {
      state.arr.find((e) => {
        if (e.age === action.payload) {
          e.fisrtName = "Anh";
        }
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchPost.fulfilled,
      (state, action: PayloadAction<DataPost[]>) => {
        state.postArr = action.payload;
      }
    );
  },
});

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  incrementByAmount,
  addArr,
  removeArr,
  editArr,
} = counterSlice.actions;

export default counterSlice.reducer;
