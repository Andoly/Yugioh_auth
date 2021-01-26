import axios from "axios";

const api = axios.create({
  baseURL: "http://ygo.kofastools.com/",
});

export default api;
