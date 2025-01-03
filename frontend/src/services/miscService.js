import { HttpClient } from "./httpClient";
import httpProvider from "./providers";
import { getToken } from "./tokenManager";

const BASE_URL = "/api/misc";

class MiscService extends HttpClient {
  async getMisc() {
    try {
      return this.get("/");
    } catch (e) {
      throw Error(e);
    }
  }
}

export default new MiscService({
  httpProvider,
  baseURL: BASE_URL,
  getToken,
});
