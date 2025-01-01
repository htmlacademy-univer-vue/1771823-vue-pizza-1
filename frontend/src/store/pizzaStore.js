import { defineStore } from "pinia";
import { ref } from "vue";
import { useDataStore } from "./dataStore";
import { computed } from "vue";

export const usePizzaStore = defineStore("pizza", () => {
  const { getIngredientById, getDoughById, getSizeById, getSauceById } =
    useDataStore();

  const pizzaIngredients = ref({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0,
    11: 0,
    12: 0,
    13: 0,
    14: 0,
    15: 0,
  });
  const pizzaDough = ref(1);
  const pizzaSize = ref(1);
  const pizzaSauce = ref(1);

  const getPizzaPrice = computed(() => {
    let ingredientsSum = 0;

    for (let [id, count] of Object.entries(pizzaIngredients.value)) {
      ingredientsSum += getIngredientById(id).price * count;
    }
    return (
      (getDoughById(pizzaDough.value).price +
        getSauceById(pizzaSauce.value).price +
        ingredientsSum) *
      getSizeById(pizzaSize.value).multiplier
    );
  });

  return { pizzaIngredients, pizzaDough, pizzaSize, pizzaSauce, getPizzaPrice };
});
