<template>
  <CustomTitle>
    <h2 class="title title--small sheet__title">Выберите ингредиенты</h2>
  </CustomTitle>

  <div class="sheet__content ingredients">
    <div class="ingredients__sauce">
      <p>Основной соус:</p>
      <label
        v-for="sauce in sauces"
        :key="sauce.id"
        class="radio ingredients__input"
      >
        <input
          v-model="sauceValue"
          type="radio"
          name="sauce"
          :value="sauce.value"
        />
        <span>{{ sauce.name }}</span>
      </label>
    </div>

    <div class="ingredients__filling">
      <p>Начинка:</p>

      <ul class="ingredients__list">
        <li
          v-for="ingredient in ingredients"
          :key="ingredient.id"
          class="ingredients__item"
        >
          <AppDrag :transfer-data="{ value: ingredient.value }">
            <span :class="'filling--' + ingredient.value" class="filling">
              {{ ingredient.name }}
            </span>

            <div class="counter counter--orange ingredients__counter">
              <button
                type="button"
                class="counter__button counter__button--minus"
                :disabled="isDecrementDisabled(ingredient.value)"
                @click="removeIngredient(ingredient.value)"
              >
                <span class="visually-hidden">Меньше</span>
              </button>
              <input
                v-model="ingredientsValue[ingredient.value]"
                type="text"
                name="counter"
                class="counter__input"
              />
              <button
                type="button"
                class="counter__button counter__button--plus"
                @click="addIngredient(ingredient.value)"
              >
                <span class="visually-hidden">Больше</span>
              </button>
            </div>
          </AppDrag>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import sauces from "@/mocks/sauces.json";
import ingredients from "@/mocks/ingredients.json";
import CustomTitle from "@/common/components/CustomTitle.vue";
import AppDrag from "@/common/components/AppDrag.vue";
import { computed } from "vue";

const props = defineProps({
  sauceValue: {
    type: String,
    required: true,
  },
  ingredientsValue: {
    type: Object,
    required: true,
  },
});

const sauceValue = computed({
  get() {
    return props.sauceValue;
  },
  set(sauceValue) {
    emit("update:sauceValue", sauceValue);
  },
});

const ingredientsValue = computed({
  get() {
    return props.ingredientsValue;
  },
  set(ingredientsValue) {
    emit("update:ingredientValue", ingredientsValue);
  },
});

const addIngredient = (ingredient) => {
  ingredientsValue.value[ingredient]++;
};

const removeIngredient = (ingredient) => {
  if (ingredientsValue.value[ingredient] > 0) {
    ingredientsValue.value[ingredient]--;
  }
};

const isDecrementDisabled = (ingredient) => {
  return !(
    ingredientsValue.value[ingredient] && ingredientsValue.value[ingredient] > 0
  );
};

const emit = defineEmits(["update:sauceValue", "update:ingredientValue"]);
</script>
<style lang="scss" scoped>
.ingredients__sauce {
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  width: 100%;
  margin-bottom: 14px;

  p {
    @include r-s16-h19;

    margin-top: 0;
    margin-right: 16px;
    margin-bottom: 10px;
  }
}

.ingredients__input {
  margin-right: 24px;
  margin-bottom: 10px;
}

.ingredients__filling {
  width: 100%;

  p {
    @include r-s16-h19;

    margin-top: 0;
    margin-bottom: 16px;
  }
}

.ingredients__list {
  @include clear-list;

  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
}

.ingredients__item {
  width: 100px;
  min-height: 40px;
  margin-right: 17px;
  margin-bottom: 35px;
}

.ingredients__counter {
  width: 54px;
  margin-top: 10px;
  margin-left: 36px;
}

.filling {
  @include r-s14-h16;

  position: relative;

  display: block;

  padding-left: 36px;

  &::before {
    @include p_center-v;

    display: block;

    width: 32px;
    height: 32px;

    content: "";

    border-radius: 50%;
    background-color: $white;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 80% 80%;
  }

  &--tomatoes::before {
    background-image: url("@assets/img/filling/tomatoes.svg");
  }

  &--ananas::before {
    background-image: url("@assets/img/filling/ananas.svg");
  }

  &--bacon::before {
    background-image: url("@assets/img/filling/bacon.svg");
  }

  &--blue_cheese::before {
    background-image: url("@assets/img/filling/blue_cheese.svg");
  }

  &--cheddar::before {
    background-image: url("@assets/img/filling/cheddar.svg");
  }

  &--chile::before {
    background-image: url("@assets/img/filling/chile.svg");
  }

  &--ham::before {
    background-image: url("@assets/img/filling/ham.svg");
  }

  &--jalapeno::before {
    background-image: url("@assets/img/filling/jalapeno.svg");
  }

  &--mozzarella::before {
    background-image: url("@assets/img/filling/mozzarella.svg");
  }

  &--mushrooms::before {
    background-image: url("@assets/img/filling/mushrooms.svg");
  }

  &--olives::before {
    background-image: url("@assets/img/filling/olives.svg");
  }

  &--onion::before {
    background-image: url("@assets/img/filling/onion.svg");
  }

  &--parmesan::before {
    background-image: url("@assets/img/filling/parmesan.svg");
  }

  &--salami::before {
    background-image: url("@assets/img/filling/salami.svg");
  }

  &--salmon::before {
    background-image: url("@assets/img/filling/salmon.svg");
  }
}

.radio {
  cursor: pointer;

  span {
    @include r-s16-h19;

    position: relative;

    padding-left: 28px;

    &:before {
      @include p_center-v;

      display: block;

      box-sizing: border-box;
      width: 20px;
      height: 20px;

      content: "";
      transition: 0.3s;

      border: 1px solid $purple-400;
      border-radius: 50%;
      background-color: $white;
    }
  }

  &:hover {
    input:not(:checked):not(:disabled) + span {
      &:before {
        border-color: $purple-800;
      }
    }
  }

  input {
    display: none;

    &:checked + span {
      &:before {
        border: 6px solid $green-500;
      }
    }

    &:disabled {
      & + span {
        &:before {
          border-color: $purple-400;
          background-color: $silver-200;
        }
      }

      &:checked + span {
        &:before {
          border: 6px solid $purple-400;
        }
      }
    }
  }
}

.counter {
  display: flex;

  justify-content: space-between;
  align-items: center;
}

.counter__button {
  $el: &;
  $size_icon: 50%;

  position: relative;

  display: block;

  width: 16px;
  height: 16px;
  margin: 0;
  padding: 0;

  cursor: pointer;
  transition: 0.3s;

  border: none;
  border-radius: 50%;
  outline: none;

  &--minus {
    background-color: $purple-100;

    &::before {
      @include p_center-all;

      width: $size_icon;
      height: 2px;

      content: "";

      border-radius: 2px;
      background-color: $black;
    }

    &:hover:not(:active):not(:disabled) {
      background-color: $purple-200;
    }

    &:active:not(:disabled) {
      background-color: $purple-300;
    }

    &:focus:not(:disabled) {
      box-shadow: $shadow-regular;
    }

    &:disabled {
      cursor: default;

      &::before {
        opacity: 0.1;
      }
    }
  }

  &--plus {
    background-color: $green-500;

    &::before {
      @include p_center-all;

      width: $size_icon;
      height: 2px;

      content: "";

      border-radius: 2px;
      background-color: $white;
    }

    &::after {
      @include p_center-all;

      width: $size_icon;
      height: 2px;

      content: "";
      transform: translate(-50%, -50%) rotate(90deg);

      border-radius: 2px;
      background-color: $white;
    }

    &:hover:not(:active):not(:disabled) {
      background-color: $green-400;
    }

    &:active:not(:disabled) {
      background-color: $green-600;
    }

    &:focus:not(:disabled) {
      box-shadow: $shadow-regular;
    }

    &:disabled {
      cursor: default;

      opacity: 0.3;
    }
  }

  &--orange {
    background-color: $orange-200;

    &:hover:not(:active):not(:disabled) {
      background-color: $orange-100;
    }

    &:active:not(:disabled) {
      background-color: $orange-300;
    }
  }
}

.counter__input {
  @include r-s14-h16;

  box-sizing: border-box;
  width: 22px;
  margin: 0;
  padding: 0 3px;

  text-align: center;

  color: $black;
  border: none;
  border-radius: 10px;
  outline: none;
  background-color: transparent;

  &:focus {
    box-shadow: inset $shadow-regular;
  }
}
</style>
