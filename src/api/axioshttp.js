import axios from "axios";
// 8800 <- 백   80 <- 프론트

export default axios.create({
  // baseURL: process.env.VUE_APP_AWS_API_URL,
  // baseURL: "http://localhost:8800",
  baseURL: "https://imjm-back.store",
  //baseURL: "http://3.34.77.175:8800",
  // 서로 다른 도메인(크로스 도메인)에 요청을 보낼 때 요청에 credential 정보를 담아서 보낼 지를 결정하는 항목
  withCredentials: false,
  headers: {
    //"access-token": `Bearer eyJ0eXAiOiJKV1QiLCJyZWdEYXRlIjoxNjg4MDE5NzUyNjIzLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhY2Nlc3MtdG9rZW4iLCJleHAiOjE2ODgwMjE1NTIsIm1lbWJlcklkIjoxLCJlbWFpbCI6ImRAbmF2ZXIuY29tIiwibmlja25hbWUiOiJtZW9sZGFlIn0.KWb7AqKBBJ0qziNSZdCzpWubhIiC9IPVc6NDOQW0jjo`,
    "Content-Type": "application/json",
  },
});
