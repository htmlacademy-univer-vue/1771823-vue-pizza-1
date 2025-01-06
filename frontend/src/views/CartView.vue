<template>
  <div class="layout-form">
    <main class="content cart">
      <div class="container">
        <div class="cart__title">
          <h1 class="title title--big">Корзина</h1>
        </div>

        <ul v-if="cart.pizzas.length > 0" class="cart-list sheet">
          <li
            v-for="pizza in cart.pizzas"
            :key="pizza.id"
            class="cart-list__item"
          >
            <div class="product cart-list__product">
              <img
                src="@assets/img/product.svg"
                class="product__img"
                width="56"
                height="56"
                :alt="pizza.name"
              />
              <div class="product__text">
                <h2>{{ pizza.name ?? "" }}</h2>
                <ul>
                  <li>
                    {{ getEntity(pizza.sizeId, "size").name ?? "" }},
                    {{ getEntity(pizza.doughId, "dough").name ?? "" }}
                  </li>
                  <li>
                    Соус: {{ getEntity(pizza.sauceId, "sauce").name ?? "" }}
                  </li>
                  <li>
                    Начинка:
                    {{
                      pizza.ingredients.reduce(
                        (acc, ingredient) =>
                          acc +
                          (getEntity(ingredient.ingredientId, "ingredient")
                            .name ?? ""),
                        ""
                      )
                    }}
                  </li>
                </ul>
              </div>
            </div>

            <AppCounter
              v-model="pizza.quantity"
              :orange="true"
              class="cart-list__counter"
            />

            <div class="cart-list__price">
              <b>{{ pizza.quantity * getSinglePizzaPrice(pizza) }} ₽</b>
            </div>

            <div class="cart-list__button">
              <button type="button" class="cart-list__edit">Изменить</button>
            </div>
          </li>
        </ul>

        <div v-else class="sheet cart__empty">
          <p>В корзине нет ни одной пиццы</p>
        </div>

        <div class="cart__additional">
          <ul class="additional-list">
            <li
              v-for="misc in cart.misc"
              :key="misc.id"
              class="additional-list__item sheet"
            >
              <p class="additional-list__description">
                <img
                  :src="getPublicImage(getEntity(misc.miscId, 'misc').image)"
                  width="39"
                  height="60"
                  :alt="getEntity(misc.miscId, 'misc').name ?? ''"
                />
                <span>{{ getEntity(misc.miscId, "misc").name ?? "" }}</span>
              </p>
              <div class="additional-list__wrapper">
                <AppCounter
                  v-model="misc.quantity"
                  class="additional-list__counter"
                ></AppCounter>
                <div class="additional-list__price">
                  <b>× {{ getEntity(misc.miscId, "misc").price }} ₽</b>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div class="cart__form">
          <div class="cart-form">
            <label class="cart-form__select">
              <span class="cart-form__label">Получение заказа:</span>

              <select name="test" class="select">
                <option value="1">Заберу сам</option>
                <option value="2">Новый адрес</option>
                <option value="3">Дом</option>
              </select>
            </label>

            <label class="input input--big-label">
              <span>Контактный телефон:</span>
              <input
                v-model="cart.phone"
                type="text"
                name="tel"
                placeholder="+7 999-999-99-99"
              />
            </label>

            <div class="cart-form__address">
              <span class="cart-form__label">Новый адрес:</span>

              <div class="cart-form__input">
                <label class="input">
                  <span>Улица*</span>
                  <input
                    v-model="cart.address.street"
                    type="text"
                    name="street"
                  />
                </label>
              </div>

              <div class="cart-form__input cart-form__input--small">
                <label class="input">
                  <span>Дом*</span>
                  <input
                    v-model="cart.address.building"
                    type="text"
                    name="house"
                  />
                </label>
              </div>

              <div class="cart-form__input cart-form__input--small">
                <label class="input">
                  <span>Квартира</span>
                  <input
                    v-model="cart.address.flat"
                    type="text"
                    name="apartment"
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <section class="footer">
      <div class="footer__more">
        <RouterLink
          :to="{ name: 'Main' }"
          class="button button--border button--arrow"
          >Хочу еще одну</RouterLink
        >
      </div>
      <p class="footer__text">
        Перейти к конструктору<br />чтоб собрать ещё одну пиццу
      </p>
      <div class="footer__price">
        <b>Итого: {{ getOrderPrice() }} ₽</b>
      </div>

      <div class="footer__submit">
        <button class="button" @click="sendOrder()">Оформить заказ</button>
      </div>
    </section>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useCartStore } from "../store";
import AppCounter from "../common/components/AppCounter.vue";
import { useDataStore } from "../store";
import { getPublicImage } from "@/common/helpers";

const cartStore = useCartStore();
const { cart, getSinglePizzaPrice, getOrderPrice } = storeToRefs(cartStore);
const { sendOrder } = cartStore;

const { getEntity } = storeToRefs(useDataStore());
</script>

<style lang="scss" scoped>
.layout-form {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.cart__title {
  margin-bottom: 15px;
}

.cart__additional {
  margin-top: 15px;
  margin-bottom: 25px;
}

.cart__empty {
  padding: 20px 30px;
}

.cart-form {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.cart-form__select {
  display: flex;
  align-items: center;

  margin-right: auto;

  span {
    margin-right: 16px;
  }
}

.cart-form__label {
  @include b-s16-h19;

  white-space: nowrap;
}

.cart-form__address {
  display: flex;
  align-items: center;

  width: 100%;
  margin-top: 20px;
}

.cart-form__input {
  flex-grow: 1;

  margin-bottom: 20px;
  margin-left: 16px;

  &--small {
    max-width: 120px;
  }
}

.cart-list {
  @include clear-list;

  padding: 15px 0;
}

.cart-list__item {
  display: flex;
  align-items: flex-start;

  margin-bottom: 15px;
  padding-right: 15px;
  padding-bottom: 15px;
  padding-left: 15px;

  border-bottom: 1px solid rgba($green-500, 0.1);

  &:last-child {
    margin-bottom: 0;
    padding-bottom: 0;

    border-bottom: none;
  }
}

.cart-list__product {
  flex-grow: 1;

  margin-right: auto;
}

.cart-list__counter {
  width: 54px;
  margin-right: auto;
  margin-left: 20px;
}

.cart-list__price {
  min-width: 100px;
  margin-right: 36px;
  margin-left: 10px;

  text-align: right;

  b {
    @include b-s16-h19;
  }
}

.cart-list__edit {
  @include l-s11-h13;

  cursor: pointer;
  transition: 0.3s;

  border: none;
  outline: none;
  background-color: transparent;

  &:hover {
    color: $green-500;
  }

  &:active {
    color: $green-600;
  }

  &:focus {
    color: $green-400;
  }
}

.additional-list {
  @include clear-list;

  display: flex;
  flex-wrap: wrap;
}

.additional-list__description {
  display: flex;
  align-items: flex-start;

  margin: 0;
  margin-bottom: 8px;
}

.additional-list__item {
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  width: 200px;
  margin-right: 15px;
  margin-bottom: 15px;
  padding-top: 15px;
  padding-bottom: 15px;

  img {
    margin-right: 10px;
    margin-left: 15px;
  }

  span {
    @include b-s14-h16;

    display: inline;

    width: 100px;
    margin-right: 15px;
  }
}

.additional-list__wrapper {
  display: flex;
  align-items: center;

  box-sizing: border-box;
  width: 100%;
  margin-top: auto;
  padding-top: 18px;
  padding-right: 15px;
  padding-left: 15px;

  border-top: 1px solid rgba($green-500, 0.1);
}

.additional-list__counter {
  width: 54px;
  margin-right: auto;
}

.additional-list__price {
  @include b-s16-h19;
}

.footer {
  display: flex;
  align-items: center;

  margin-top: auto;
  padding: 25px 2.12%;

  background-color: rgba($green-500, 0.1);
}

.footer__more {
  width: 220px;
  margin-right: 16px;

  a {
    padding-top: 16px;
    padding-bottom: 16px;
  }
}

.footer__text {
  @include l-s11-h13;

  color: rgba($black, 0.5);
}

.footer__price {
  @include b-s24-h28;

  margin-right: 12px;
  margin-left: auto;
}

.footer__submit {
  button {
    padding: 16px 14px;
  }
}

.product {
  display: flex;
  align-items: center;
}

.product__text {
  margin-left: 15px;

  h2 {
    @include b-s18-h21;

    margin-top: 0;
    margin-bottom: 10px;
  }

  ul {
    @include clear-list;
    @include l-s11-h13;
  }
}
</style>
