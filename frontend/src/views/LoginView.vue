<template>
  <div class="sign-form">
    <a href="#" class="close close--white">
      <span class="visually-hidden">Закрыть форму авторизации</span>
    </a>
    <div class="sign-form__title">
      <CustomTitle class="title--small">Авторизуйтесь на сайте </CustomTitle>
    </div>
    <form @submit.prevent="onSubmit">
      <div class="sign-form__input">
        <label class="input">
          <span>E-mail</span>
          <AppInput
            v-model="email"
            type="email"
            name="email"
            placeholder="example@mail.ru"
          />
        </label>
      </div>

      <div class="sign-form__input">
        <label class="input">
          <span>Пароль</span>
          <AppInput
            v-model="password"
            type="password"
            name="pass"
            placeholder="***********"
          />
        </label>
      </div>
      <button type="submit" class="button">Авторизоваться</button>
    </form>
  </div>
</template>

<script setup>
import CustomTitle from "@/common/components/CustomTitle.vue";
import AppInput from "../common/components/AppInput.vue";
import { useAuthStore } from "@/store/authStore";
import { ref } from "vue";
import { storeToRefs } from "pinia";
import router from "../router";

const authStore = useAuthStore();
const { login } = authStore;
const { isAuthenticated } = storeToRefs(authStore);

const email = ref("");
const password = ref("");

const onSubmit = async () => {
  try {
    await login(email.value, password.value);
    if (isAuthenticated) {
      router.push({ name: "Main" });
    }
  } catch (e) {
    throw e.message;
  }
};
</script>

<style lang="scss" scoped>
.sign-form {
  @include pf_center-all;

  z-index: 10;

  display: block;

  box-sizing: border-box;
  width: 455px;
  padding-top: 146px;
  padding-right: 32px;
  padding-bottom: 32px;
  padding-left: 32px;

  background: $white url("@assets/img/popup.svg") no-repeat center top;
  box-shadow: $shadow-light;

  button {
    margin: 0 auto;
    padding: 16px 14px;
  }
}

.sign-form__title {
  margin-bottom: 24px;

  text-align: center;
}

.sign-form__input {
  margin-bottom: 16px;
}
</style>
