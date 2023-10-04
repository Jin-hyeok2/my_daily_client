import axios from "axios";

const request = {
  get: async (uri, params = undefined) => {
    return await axios.get(uri, { params });
  },
  post: async (uri, requestBody, params = undefined) => {
    return await axios.post(uri, requestBody, { params });
  },
  put: async (uri, requestBody, params = undefined) => {
    return await axios.put(uri, requestBody, { params });
  },
  delete: async (uri, params) => {
    return await axios.delete(uri, { params });
  },
};

export default request;
