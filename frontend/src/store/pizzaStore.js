import { defineStore } from "pinia";
import { ref } from "vue";
import { useDataStore } from "./dataStore";
import { computed } from "vue";

export const usePizzaStore = defineStore("pizza", () => {
  const { getIngredientById, getDoughById, getSizeById, getSauceById } =
    useDataStore();

  const pizzaIngredients = ref({});
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
