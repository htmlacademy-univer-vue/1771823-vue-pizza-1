import { HttpClient } from "./httpClient";
import httpProvider from "./providers";
import { getToken } from "./tokenManager";

const BASE_URL = "/api/orders";
class OrdersService extends HttpClient {
  async getOrders() {
    try {
      return this.get("/");
    } catch (e) {
      throw Error(e);
    }
  }

  async createOrder(order) {
    try {
      return this.post("/", { data: order });
    } catch (e) {
      throw Error(e);
    }
  }

  async deleteOrder(id) {
    try {
      return this.delete(`/${id}`);
    } catch (e) {
      throw Error(e);
    }
  }
}

export default new OrdersService({
  httpProvider,
  baseURL: BASE_URL,
  getToken,
});
