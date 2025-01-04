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
          :value="sauce.id"
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
          <AppDrag
            :transfer-data="{
              value: ingredient.id,
            }"
          >
            <span
              :class="[
                'filling--' + getEntityValue(ingredient.name.toLowerCase()),
              ]"
              class="filling"
            >
              {{ ingredient.name }}
            </span>
          </AppDrag>

          <AppCounter
            v-model="ingredientsValue[ingredient.id]"
            :is-increment-disabled="ingredientsValue[ingredient.id] >= 3"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useDataStore } from "../../store/dataStore";
import CustomTitle from "@/common/components/CustomTitle.vue";
import AppDrag from "@/common/components/AppDrag.vue";
import AppCounter from "@/common/components/AppCounter.vue";

const {
  saucesOptions: sauces,
  ingredientsOptions: ingredients,
  getEntityValue,
} = useDataStore();

const props = defineProps({
  sauceValue: {
    type: Number,
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
</style>
