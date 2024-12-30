import { defineStore, storeToRefs } from "pinia";
import { ref } from "vue";
import { useDataStore } from "./dataStore";

export const useCartStore = defineStore("cart", () => {
  const {
    saucesOptions,
    ingredientsOptions,
    sizeOptions,
    miscOptions,
    doughOptions,
  } = storeToRefs(useDataStore());

  const cart = ref({
    id: 0,
    userId: "string",
    addressId: 0,
    orderPizzas: [
      {
        id: 0,
        name: "Капричоза",
        sauceId: 1,
        doughId: 1,
        sizeId: 2,
        quantity: 1,
        orderId: 0,
        ingredients: [
          {
            id: 0,
            pizzaId: 0,
            ingredientId: 1,
            quantity: 0,
          },
        ],
      },
      {
        id: 0,
        name: "Любимая пицца",
        sauceId: 1,
        doughId: 1,
        sizeId: 1,
        quantity: 1,
        orderId: 0,
        ingredients: [
          {
            id: 0,
            pizzaId: 0,
            ingredientId: 1,
            quantity: 0,
          },
        ],
      },
    ],
    orderMisc: [
      {
        id: 0,
        orderId: 0,
        miscId: 1,
        quantity: 1,
      },
      {
        id: 0,
        orderId: 0,
        miscId: 2,
        quantity: 1,
      },
      {
        id: 0,
        orderId: 0,
        miscId: 3,
        quantity: 1,
      },
    ],
  });

  const getSauceById = (id) =>
    saucesOptions.value.find((option) => option.id === id);

  const getDoughById = (id) =>
    doughOptions.value.find((options) => options.id === id);

  const getSizeById = (id) =>
    sizeOptions.value.find((options) => options.id === id);

  const getMiscById = (id) =>
    miscOptions.value.find((option) => option.id === id);

  const getIngredientById = (id) =>
    ingredientsOptions.value.find((option) => option.id === id);

  return {
    cart,

    getSauceById,
    getDoughById,
    getSizeById,
    getMiscById,
    getIngredientById,
  };
});
