import { HttpClient } from "./httpClient";
import httpProvider from "./providers";
import { getToken } from "./tokenManager";

const BASE_URL = "/api/sizes";

class SizesService extends HttpClient {
  async getSizes() {
    try {
      return this.get("/");
    } catch (e) {
      throw Error(e);
    }
  }
}

export default new SizesService({
  httpProvider,
  baseURL: BASE_URL,
  getToken,
});
