<template>
  <div class="layout__sidebar sidebar">
    <RouterLink :to="{ name: 'Index' }" class="logo layout__logo">
      <img
        src="@assets/img/logo.svg"
        alt="V!U!E! Pizza logo"
        width="90"
        height="40"
      />
    </RouterLink>

    <RouterLink
      class="layout__link"
      active-class="layout__link--active"
      :to="{ name: 'Orders' }"
      >История заказов</RouterLink
    >
    <RouterLink
      class="layout__link"
      :to="{ name: 'UserData' }"
      active-class="layout__link--active"
      >Мои данные</RouterLink
    >
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.sidebar {
  flex-grow: 1;

  background-color: rgba($green-500, 0.05);
}
</style>
