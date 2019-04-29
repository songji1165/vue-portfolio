import axios from "axios"; //aixos 호출
import router from "../router";

const DOMAIN = "http://localhost:3000";
const UNAUTHORIZED = 401;
const onUnauthorized = () => {
  router.push(`/login?rPath=${encodeURIComponent(location.pathname)}`);
};

//백엔드에 요청
const request = (method, url, data) => {
  return axios({
    method,
    url: DOMAIN + url,
    data //페이로드에 해당하는 데이터
  })
    .then(result => result.data) //성공시 바디데이터만 남김
    .catch(result => {
      //실패시 axios.get().catch부분이된다.

      //response값을 가져옴
      const { status } = result.response;

      if (status === UNAUTHORIZED) onUnauthorized();
      throw result.response; //에러를 던지다
    });
};

// token정보를 받아서 axios라이브러리 안에 기능 추가
// 모든 리퀘스트를 날리기 정해 해더 값을 설정

export const setAuthInHeader = token => {
  axios.defaults.headers.common["Authorization"] = token
    ? `Bearer ${token}`
    : null;
};

// const { token } = localStorage;
// if (token) setAuthInHeader(token);

export const board = {
  fetch() {
    return request("get", "/boards");
  }
};
export const auth = {
  login(email, password) {
    return request("post", "/login", { email, password });
  }
};
