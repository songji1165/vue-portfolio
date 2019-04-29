// 백엔드 api를 가져오는 파일들

import axios from "axios";
import router from "../router";

//api호출할 도메인 필요
const DOMAIN = "http://localhost:3000";
const UNAUTHORIZED = 401;
const onUnathrorozed = () => {
  router.push("/login");
};

const request = (methods, url, data) => {
  return axios({
    methods,
    url: DOMAIN + url,
    data
  })
    .then(result => result.data)
    .catch(result => {
      const { status } = result.response;
      if (status === UNAUTHORIZED) return onUnathrorozed();
      throw Error(result);
    });
};

export const board = {
  fetch() {
    return request("get", "/boards");
  }
};
