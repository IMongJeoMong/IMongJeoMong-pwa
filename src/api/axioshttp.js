import axios from "axios";
// 8800 <- 백   80 <- 프론트

export default axios.create({

  baseURL: "백 서버",
  // 서로 다른 도메인(크로스 도메인)에 요청을 보낼 때 요청에 credential 정보를 담아서 보낼 지를 결정하는 항목
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
  },
});
