import axiosClient from ".";
import { ListResponse } from "../models/commons";
import { DataPost } from "../redux/counterSlice";

const postApi = {
  getAll(): Promise<DataPost[]> {
    const url = `/posts`;
    return axiosClient.get(url);
  },
};

export default postApi;
