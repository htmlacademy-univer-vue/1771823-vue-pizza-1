import { HttpClient } from "./httpClient";
import httpProvider from "./providers";
import { getToken } from "./tokenManager";

const BASE_URL = "/api/ingredients";

class IngredientsService extends HttpClient {
  async getIngredients() {
    try {
      return this.get("/");
    } catch (e) {
      throw Error(e);
    }
  }
}

export default new IngredientsService({
  httpProvider,
  baseURL: BASE_URL,
  getToken,
});
