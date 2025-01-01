<template>
  <div class="content__pizza">
    <label class="input">
      <span class="visually-hidden">Название пиццы</span>
      <input
        v-model="pizzaName"
        type="text"
        name="pizza_name"
        placeholder="Введите название пиццы"
      />
    </label>

    <AppDrop @drop="(transferData) => dropHandler(transferData)">
      <div class="content__constructor">
        <div
          class="pizza"
          :class="`pizza--foundation--${
            pizzaDough === 1 ? 'small' : 'big'
          }-${getEntityValue(pizzaSauce, 'sauce')}`"
        >
          <div class="pizza__wrapper">
            <template
              v-for="[ingredientId, value] in Object.entries(pizzaIngredients)"
            >
              <div
                v-if="value > 0"
                :key="ingredientId"
                class="pizza__filling"
                :class="[
                  `pizza__filling--${getEntityValue(
                    ingredientId,
                    'ingredient'
                  )}`,
                  value > 1 ? 'pizza__filling--second' : '',
                  value > 2 ? 'pizza__filling--third' : '',
                ]"
              ></div>
            </template>
          </div>
        </div>
      </div>
    </AppDrop>

    <div class="content__result">
      <p>Итого: {{ getPizzaPrice }} ₽</p>
      <button type="button" class="button" :disabled="pizzaName.length < 3">
        Готовьте!
      </button>
    </div>
  </div>
</template>

<script setup>
import AppDrop from "@/common/components/AppDrop.vue";
import { useDataStore } from "../../store/dataStore";
import { storeToRefs } from "pinia";
import { usePizzaStore } from "../../store/pizzaStore";
import { ref } from "vue";

defineProps({
  pizzaIngredients: {
    type: Object,
    required: true,
  },
  pizzaDough: {
    type: Number,
    required: true,
  },
  pizzaSauce: {
    type: Number,
    required: true,
  },
  dropHandler: {
    type: Function,
    required: true,
  },
});

const { getEntityValue } = storeToRefs(useDataStore());
const { getPizzaPrice } = storeToRefs(usePizzaStore());

const pizzaName = ref("");
</script>

<style lang="scss" scoped>
.pizza {
  position: relative;

  display: block;

  box-sizing: border-box;
  width: 100%;

  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;

  &--foundation--big-creamy {
    background-image: url("@assets/img/foundation/big-creamy.svg");
  }

  &--foundation--big-tomato {
    background-image: url("@assets/img/foundation/big-tomato.svg");
  }

  &--foundation--small-creamy {
    background-image: url("@assets/img/foundation/small-creamy.svg");
  }

  &--foundation--small-tomato {
    background-image: url("@assets/img/foundation/small-tomato.svg");
  }
}

.pizza__wrapper {
  width: 100%;
  padding-bottom: 100%;
}

.pizza__filling {
  $bl: &;
  position: absolute;
  top: 0;
  left: 0;

  display: block;

  width: 100%;
  height: 100%;

  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;

  &::before,
  &::after {
    display: none;

    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    content: "";

    background-image: inherit;
  }

  &--second {
    &::before {
      display: block;

      transform: rotate(45deg);
    }
  }

  &--third {
    &::before {
      display: block;

      transform: rotate(45deg);
    }

    &::after {
      display: block;

      transform: rotate(-45deg);
    }
  }

  &--ananas,
  &--ananas.pizza__filling--second::before,
  &--ananas.pizza__filling--third::after {
    background-image: url("@assets/img/filling-big/ananas.svg");
  }

  &--bacon,
  &--bacon.pizza__filling--second::before,
  &--bacon.pizza__filling--third::after {
    background-image: url("@assets/img/filling-big/bacon.svg");
  }

  &--blue_cheese,
  &--blue.pizza__filling--second::before,
  &--blue.pizza__filling--third::after {
    background-image: url("@assets/img/filling-big/blue_cheese.svg");
  }

  &--cheddar,
  &--cheddar.pizza__filling--second::before,
  &--cheddar.pizza__filling--third::after {
    background-image: url("@assets/img/filling-big/cheddar.svg");
  }

  &--chile,
  &--chile.pizza__filling--second::before,
  &--chile.pizza__filling--third::after {
    background-image: url("@assets/img/filling-big/chile.svg");
  }

  &--ham,
  &--ham.pizza__filling--second::before,
  &--ham.pizza__filling--third::after {
    background-image: url("@assets/img/filling-big/ham.svg");
  }

  &--jalapeno,
  &--jalapeno.pizza__filling--second::before,
  &--jalapeno.pizza__filling--third::after {
    background-image: url("@assets/img/filling-big/jalapeno.svg");
  }

  &--mozzarella,
  &--mozzarella.pizza__filling--second::before,
  &--mozzarella.pizza__filling--third::after {
    background-image: url("@assets/img/filling-big/mozzarella.svg");
  }

  &--mushrooms,
  &--mushrooms.pizza__filling--second::before,
  &--mushrooms.pizza__filling--third::after {
    background-image: url("@assets/img/filling-big/mushrooms.svg");
  }

  &--olives,
  &--olives.pizza__filling--second::before,
  &--olives.pizza__filling--third::after {
    background-image: url("@assets/img/filling-big/olives.svg");
  }

  &--onion,
  &--onion.pizza__filling--second::before,
  &--onion.pizza__filling--third::after {
    background-image: url("@assets/img/filling-big/onion.svg");
  }

  &--parmesan,
  &--parmesan.pizza__filling--second::before,
  &--parmesan.pizza__filling--third::after {
    background-image: url("@assets/img/filling-big/parmesan.svg");
  }

  &--salami,
  &---salami.pizza__filling--second::before,
  &---salami.pizza__filling--third::after {
    background-image: url("@assets/img/filling-big/salami.svg");
  }

  &--salmon,
  &--salmon.pizza__filling--second::before,
  &--salmon.pizza__filling--third::after {
    background-image: url("@assets/img/filling-big/salmon.svg");
  }

  &--tomatoes,
  &--tomatoes.pizza__filling--second::before,
  &--tomatoes.pizza__filling--third::after {
    background-image: url("@assets/img/filling-big/tomatoes.svg");
  }
}

.content__result {
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 25px;

  p {
    @include b-s24-h28;

    margin: 0;
  }

  button {
    margin-left: 12px;
    padding: 16px 45px;
  }
}
</style>
