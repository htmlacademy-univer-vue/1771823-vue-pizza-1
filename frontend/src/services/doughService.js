import { HttpClient } from "./httpClient";
import httpProvider from "./providers";
import { getToken } from "./tokenManager";

const BASE_URL = "/api/dough";

class DoughService extends HttpClient {
  async getDough() {
    try {
      return this.get("/");
    } catch (e) {
      throw Error(e);
    }
  }
}

export default new DoughService({
  httpProvider,
  baseURL: BASE_URL,
  getToken,
});
