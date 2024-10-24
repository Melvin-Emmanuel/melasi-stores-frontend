import axios, {
    AxiosInstance,
    AxiosRequestConfig,
    AxiosResponse,
  } from "axios";
  import { notify } from "./notification";
  import "react-toastify/dist/ReactToastify.css";

  interface ApiClient extends AxiosInstance {}

  //create an Axios instance
  const apiClient: ApiClient = axios.create({
    baseURL: "https://melasi-stores.koyeb.app/api/v1",

    timeout: 6000,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  //request interceptor
  apiClient.interceptors.request.use(
    (config: any) => {
      const token = localStorage.getItem("token");
      if (token) {
        if (config.headers) {
          config.headers.Authorization = `Bearer ${token}`;
        } else {
          config.headers = {
            Authorization: `Bearer ${token}`,
          };
        }
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );
  // apiClient.interceptors.request.use(
  //   (config) => {
  //     const token = localStorage.getItem("authToken");
  //     console.log("token", token)
  //     if (token) {
  //       config.headers.Authorization = `Bearer ${token}`;
  //     }
  //     return config;
  //   },
  //   (error) => {
  //     return Promise.reject(error);
  //   }
  // );


  //response interceptor
  apiClient.interceptors.response.use(
    (Response: AxiosResponse) => {
      return Response;
    },
    (error) => {
      if (error.response) {
        if (error.response.status === 401) {
          //handle unauthorised errors
        }
      }
      return Promise.reject(error);
    },
  );

  export const handleError = (error: any) => {
    if (error.response) {
      const { message } = error.response.data;
      switch (error.response.status) {
        case 500:
          notify("error", message);
          break;
        case 409:
          notify("error", message);
          break;
        case 401:
          notify("error", message);
          break;
        case 400:
          notify("error", message);
          break;
        case 404:
          notify("error", message);
          break;
        case 403:
          notify("error", message);
          break;
        default:
          notify("error", message);
          break;
      }
    } else if (error.request) {
      // The request was made but no response was received
      // console.error(error.request);
    } else {
      // Something happened in setting up the request and triggered an error
      // console.error('Error', error.message);
    }
  };
  export const apiGet = (url: string, headers?: AxiosRequestConfig) => apiClient.get(url, headers);
  export const apiPost = (url: string, data: unknown, headers?: AxiosRequestConfig) =>
    apiClient.post(url, data, headers);
  export const apiPut = (url: string, data: unknown) => apiClient.put(url, data);
  export const apiDelete = (url: string) => apiClient.delete(url);
  export default apiClient;
