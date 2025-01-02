import { HttpClient } from "./httpClient";
import httpProvider from "./providers";
import { getToken } from "./tokenManager";

const BASE_URL = "/api/addresses";
class AddressesService extends HttpClient {
  async fetchAddresses() {
    try {
      return this.get("/");
    } catch (e) {
      throw Error(e);
    }
  }

  async createAddress(address) {
    try {
      return this.post("/", { data: address });
    } catch (e) {
      throw Error(e);
    }
  }

  async updateAddress(address) {
    try {
      return this.put(`/${address.id}`, { data: address });
    } catch (e) {
      throw Error(e);
    }
  }

  async deleteAddress(id) {
    try {
      return this.delete(`/${id}`);
    } catch (e) {
      throw Error(e);
    }
  }
}

export default new AddressesService({
  httpProvider,
  baseUrl: BASE_URL,
  getToken,
});
