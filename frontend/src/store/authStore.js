import { defineStore } from "pinia";
import { setToken, removeToken } from "@/services/tokenManager";
import { ref, computed } from "vue";
import { authService } from "../services";

export const useAuthStore = defineStore("auth", () => {
  const user = ref(null);

  const isAuthenticated = computed(() => {
    return !!user.value;
  });

  const getUserAttribute = computed(() => (attr) => {
    return user.value ? user.value[attr] : "";
  });

  const login = async (email, password) => {
    try {
      const data = await authService.login(email, password);

      setToken(data.token);
      await getMe();
    } catch (e) {
      return e.message;
    }
  };

  const getMe = async () => {
    user.value = await authService.whoAmI();
  };

  const logout = async () => {
    await authService.logout();
    user.value = null;
    removeToken();
  };

  return {
    user,
    isAuthenticated,
    getUserAttribute,

    login,
    getMe,
    logout,
  };
});
