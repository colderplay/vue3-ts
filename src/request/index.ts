import axios from "axios";
import { ToDo } from "../components/types";
const http = axios.create({
  baseURL: import.meta.env.BASE_URL,
  timeout: 500,
});

export default http;

//约束返回数据类型
// http.get<ToDo>("https://www.baidu.com").then((res) => {
//   console.log(res);
// });
