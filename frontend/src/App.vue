<template>
  <AppLayout>
    <RouterView></RouterView>
  </AppLayout>
</template>

<script setup>
import { onMounted } from "vue";
import { useDataStore, useProfileStore } from "./store";
import AppLayout from "./layouts/AppLayout.vue";
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
});
</script>

<style lang="scss"></style>
