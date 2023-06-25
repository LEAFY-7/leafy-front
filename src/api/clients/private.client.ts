import axios, { AxiosResponse } from "axios";
import queryString from "query-string";

const baseURL = process.env.REACT_APP_BASE_PATH;

const privateClient = axios.create({
  baseURL,
  paramsSerializer: {
    encode: (params) => queryString.stringify(params),
  },
});

privateClient.interceptors.request.use(
  async (config) => {
    const headers = {
      "Content-type": "application/json;charset=UTF-8",
      Authorization: `Bearer ${localStorage.getItem("leafy")}`,
    };
    return {
      ...config,
      ...headers,
    };
  },
  (error) => {
    return Promise.reject(error);
  }
);

privateClient.interceptors.response.use(
  (response: AxiosResponse) => {
    // 응답이 성공적으로 처리된 경우
    if (response && response.data) {
      console.info("응답을 받았습니다.");
      return response;
    }
    return response;
  },
  (error) => {
    throw error.response.data;

    // return Promise.reject(error);
  }
);

export default privateClient;
