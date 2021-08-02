import React from "react";
import Button from "./components/atoms/button";
import Card from "./components/atoms/card";
import Title from "./components/atoms/title";
import { useAppDispatch, useAppSelector } from "./hook/useRedux";
import {
  Data,
  increment,
  incrementByAmount,
  removeArr,
  addArr,
  editArr,
  fetchPost,
} from "./redux/counterSlice";
function Home() {
  const count = useAppSelector((state) => state.counterReducer.value);
  const arr = useAppSelector((state) => state.counterReducer.arr);
  const postArr = useAppSelector((state) => state.counterReducer.postArr);
  const dispatch = useAppDispatch();
  let data = {
    name: "Anh Vinh",
    age: 18,
    fisrtName: "Truong",
    address: "Ninh Binh",
  };
  console.log(postArr, "posthi");
  return (
    <div>
      <Button onClick={() => dispatch(incrementByAmount(3))}>
        Count+ {count}{" "}
      </Button>
      <Button onClick={() => dispatch(addArr(data))}>Add Array</Button>
      <Button onClick={() => dispatch(fetchPost(2))}>POST Array</Button>
      {arr.map((e) => {
        return (
          <Card>
            <Title>name: {e.name}</Title>
            <Title>First Name: {e.fisrtName}</Title>
            <Title>Address :{e.address}</Title>
            <Title>Age :{e.age}</Title>
            <Button onClick={() => dispatch(removeArr(e.age))}>Remove</Button>
            <Button onClick={() => dispatch(editArr(e.age))}>Edit</Button>
          </Card>
        );
      })}
    </div>
  );
}

export default Home;
