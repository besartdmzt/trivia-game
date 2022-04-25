import { store } from "../app/store";
import axios from "axios";
import { openMessage } from "src/features/slices/messageSlice";
import I18n from "src/i18n/i18n";

const baseURL = "https://opentdb.com/api.php";
const axiosInstance = axios.create({
  baseURL,
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async () => {
    store.dispatch(
      openMessage({
        header: I18n.t("ERROR.TITLE"),
        content: I18n.t("ERROR.SOMETHING_WENT_WRONG"),
        confirm: I18n.t("OK"),
      })
    );
  }
);

export default axiosInstance;
