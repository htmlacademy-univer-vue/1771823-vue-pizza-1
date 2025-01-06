<template>
  <AppLayout>
    <RouterView></RouterView>
  </AppLayout>
</template>

<script setup>
import { onMounted } from "vue";
import { useDataStore, useProfileStore, useAuthStore } from "./store";
import AppLayout from "./layouts/AppLayout.vue";
import { getToken, removeToken } from "./services/tokenManager";
import router from "./router";

const { fetchDough, fetchSizes, fetchSauces, fetchMisc, fetchIngredients } =
  useDataStore();
const { fetchAddresses, fetchOrders } = useProfileStore();

onMounted(async () => {
  await fetchDough();
  await fetchSizes();
  await fetchSauces();
  await fetchMisc();
  await fetchIngredients();
  await fetchAddresses();
  await fetchOrders();

  const token = getToken();
  if (token) {
    try {
      const authStore = useAuthStore();
      authStore.getMe();
      router.push({ name: "Main" });
    } catch (e) {
      removeToken();
      console.log(e);
    }
  }
});
</script>

<style lang="scss"></style>
