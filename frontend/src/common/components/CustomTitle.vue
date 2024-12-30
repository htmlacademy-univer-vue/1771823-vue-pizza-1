<template>
  <h1 class="title"><slot /></h1>
</template>

<script setup></script>

<style lang="scss" scoped>
.title {
  box-sizing: border-box;
  width: 100%;
  margin: 0;

  font-size: 36px;
  font-weight: 700;
  font-style: normal;
  line-height: 42px;

  color: $black;

  &--big {
    @include b-s36-h42;
  }

  &--small {
    @include b-s18-h21;
  }
}
</style>
