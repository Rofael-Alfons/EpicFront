import axios from "axios";
import store from "../Store/store";
import { useSelector } from "react-redux";

const axiosInstance = axios.create({
  // https://api.rawg.io/api/games?key=37838b368bf34ab0bb5403e02b716a84
  // localhost:5555/Games
  // https://localhost:5555/Games

  // baseURL:'https://api.rawg.io/api/',

  baseURL: "http://localhost:5555",

  headers: {
    // 'authorization':"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjI1N2NjM2E0NjEyYzlmNGE4NjEyMjA0ZDZhNGIwYyIsInN1YiI6IjY0MGU2NTcxYjQyMjQyMDA4YTJkYTAzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BgiR1EugUT2ZQnyrgk-_tkCtCY5cNMOPjRY31qhhhPI",
    authorization: "",
  },
  params: {
    // 'key':'37838b368bf34ab0bb5403e02b716a84',
  },
});

// axiosInstance.interceptors.request.use(
//   (config) => {
//     store.dispatch(changeLoader(true));
//     // setTimeout(() => {

//     // }, 10000);
//     return config;
//   },
//   (err) => {
//     return Promise.reject(err);
//   }
// );

// axiosInstance.interceptors.response.use(
//   (res) => {
//     store.dispatch(changeLoader(false));
//     return res;
//   },
//   (err) => {
//     Promise.reject(err);
//   }
// );

export default axiosInstance;
