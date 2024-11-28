/* eslint-disable import/no-extraneous-dependencies */
import axios from "axios";

let apiSingleton = null;

// const apiUrl = "https://portfolio.benjamin-chaillan.fr:5001/api/";

const useApi = () => {
  if (!apiSingleton) {
    apiSingleton = axios.create({
      baseURL: import.meta.env.VITE_APP_API_URL,
    });
  }
  return apiSingleton;
};

export default useApi;
