<template>
  <div class="sheet">
    <h2 class="title title--small sheet__title">{{ title }}</h2>

    <div class="sheet__content" :class="contentClass">
      <label class="dough__input dough__input--light">
        <input
          type="radio"
          :name="contentClass"
          value="light"
          class="visually-hidden"
          checked
        />
        <b>Тонкое</b>
        <span>Из твердых сортов пшеницы</span>
      </label>

      <label class="dough__input dough__input--large">
        <input
          type="radio"
          name="dought"
          value="large"
          class="visually-hidden"
        />
        <b>Толстое</b>
        <span>Из твердых сортов пшеницы</span>
      </label>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.sheet {
  padding-top: 15px;

  border-radius: 8px;
  background-color: $white;
  box-shadow: $shadow-light;
}

.sheet__title {
  padding-right: 18px;
  padding-left: 18px;
}

.sheet__content {
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  margin-top: 8px;
  padding-top: 18px;
  padding-right: 18px;
  padding-left: 18px;

  border-top: 1px solid rgba($green-500, 0.1);
}
</style>
