import { defineStore, storeToRefs } from "pinia";
import { computed, ref } from "vue";
import { useDataStore } from "./dataStore";

export const useCartStore = defineStore("cart", () => {
  const { getEntity } = storeToRefs(useDataStore());

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
            quantity: 1,
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
            quantity: 3,
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

  const getSinglePizzaPrice = computed(() => (pizza) => {
    let ingredientsSum = 0;

    pizza.ingredients.forEach((ingredient) => {
      ingredientsSum +=
        getEntity.value(ingredient.ingredientId, "ingredient").price *
        ingredient.quantity;
    });

    return (
      (getEntity.value(pizza.sauceId, "sauce").price +
        getEntity.value(pizza.doughId, "dough").price +
        ingredientsSum) *
      getEntity.value(pizza.sizeId, "size").multiplier
    );
  });

  const getOrderPrice = computed(() => (order = cart.value) => {
    return (
      order.orderPizzas.reduce(
        (acc, pizza) => acc + getSinglePizzaPrice.value(pizza) * pizza.quantity,
        0
      ) +
      order.orderMisc.reduce(
        (acc, misc) => acc + getEntity.value(misc.miscId, "misc").price,
        0
      )
    );
  });

  return {
    cart,
    getSinglePizzaPrice,
    getOrderPrice,
  };
});
