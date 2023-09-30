import axios from "axios";

const apiClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_SERVER_URL}/api`,
});
const privateApiClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_SERVER_URL}/api`,
});

privateApiClient.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response.status === 401) {
      window.location.href = "/login";
    }
    return err;
  },
);

export { apiClient, privateApiClient };
