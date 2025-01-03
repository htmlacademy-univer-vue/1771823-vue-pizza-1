import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { getToken, removeToken } from "./services/tokenManager";
import { useAuthStore } from "./store/authStore";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");

const token = getToken();
if (token) {
  try {
    const authStore = useAuthStore();
    authStore.getMe();
    router.push("/");
  } catch (e) {
    removeToken();
    console.log(e);
  }
}
