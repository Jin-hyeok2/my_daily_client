import axios from "axios";

const request = {
  get: async (uri, params) => {
    return await axios.get(uri, { params });
  },
  post: async (uri, requestBody) => {
    return await axios.post(uri, requestBody);
  },
  put: async (uri, requestBody) => {
    return await axios.put(uri, requestBody);
  },
  delete: async (uri, params) => {
    return await axios.delete(uri, { params });
  },
};

export default request;
