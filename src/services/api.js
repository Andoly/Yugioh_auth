import axios from "axios";

const api = axios.create({
  baseURL: "https://ygo.kofastools.com/",
});

export default api;
