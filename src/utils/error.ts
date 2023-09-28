import { AxiosError } from "axios";

export const getServerErrorMessage = (error: any) => {
  if (
    error instanceof AxiosError &&
    error.response &&
    error.response.data.message
  ) {
    return error.response.data.message;
  }
  return "System error";
};
