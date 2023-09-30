import axios from "axios";

const apiServer = axios.create({
  baseURL: `${process.env.PROXY_URL}/api`,
});

export { apiServer };
