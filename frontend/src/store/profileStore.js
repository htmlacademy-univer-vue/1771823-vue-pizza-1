import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { addressesService, ordersService } from "../services";
import { useDataStore } from "./dataStore";
import { useCartStore } from "./cartStore";
import { storeToRefs } from "pinia";
import { useAuthStore } from "./authStore";

export const useProfileStore = defineStore("profile", () => {
  const { getEntity } = storeToRefs(useDataStore());
  const { getSinglePizzaPrice } = storeToRefs(useCartStore());
  const { getUserAttribute } = storeToRefs(useAuthStore());

  const userAddresses = ref([
    {
      id: 1,
      name: "Адрес №1",
      street: "Невский пр.",
      building: "22",
      flat: "46",
      comment: "Позвоните, пожалуйста, от проходной",
      userId: "1",
    },
  ]);

  const userOrders = ref([
    {
      id: 11199929,
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
          orderId: 11199929,
          ingredients: [
            {
              id: 0,
              pizzaId: 0,
              ingredientId: 1,
              quantity: 1,
            },
            {
              id: 0,
              pizzaId: 0,
              ingredientId: 7,
              quantity: 1,
            },
            {
              id: 0,
              pizzaId: 0,
              ingredientId: 4,
              quantity: 1,
            },
            {
              id: 0,
              pizzaId: 0,
              ingredientId: 14,
              quantity: 1,
            },
            {
              id: 0,
              pizzaId: 0,
              ingredientId: 5,
              quantity: 1,
            },
            {
              id: 0,
              pizzaId: 0,
              ingredientId: 6,
              quantity: 1,
            },
            {
              id: 0,
              pizzaId: 0,
              ingredientId: 15,
              quantity: 1,
            },
          ],
        },
        {
          id: 1,
          name: "Моя любимая",
          sauceId: 1,
          doughId: 1,
          sizeId: 2,
          quantity: 2,
          orderId: 11199929,
          ingredients: [
            {
              id: 0,
              pizzaId: 0,
              ingredientId: 1,
              quantity: 1,
            },
            {
              id: 0,
              pizzaId: 0,
              ingredientId: 7,
              quantity: 1,
            },
            {
              id: 0,
              pizzaId: 0,
              ingredientId: 4,
              quantity: 1,
            },
            {
              id: 0,
              pizzaId: 0,
              ingredientId: 14,
              quantity: 1,
            },
            {
              id: 0,
              pizzaId: 0,
              ingredientId: 5,
              quantity: 1,
            },
            {
              id: 0,
              pizzaId: 0,
              ingredientId: 6,
              quantity: 1,
            },
            {
              id: 0,
              pizzaId: 0,
              ingredientId: 15,
              quantity: 1,
            },
          ],
        },
      ],
      orderMisc: [
        {
          id: 1,
          orderId: 11199929,
          miscId: 1,
          quantity: 1,
        },
        {
          id: 2,
          orderId: 11199929,
          miscId: 2,
          quantity: 1,
        },
        {
          id: 3,
          orderId: 11199929,
          miscId: 3,
          quantity: 1,
        },
      ],
      orderAddress: {
        id: 0,
        name: "string",
        street: "string",
        building: "string",
        flat: "string",
        comment: "string",
        userId: "string",
      },
    },
  ]);

  const getOrderPrice = computed(() => (order) => {
    let result = 0;

    if (order.orderPizzas && order.orderPizzas.length > 0) {
      result += order.orderPizzas.reduce(
        (acc, pizza) => acc + getSinglePizzaPrice.value(pizza) * pizza.quantity,
        0
      );
    }

    if (order.orderMisc && order.orderMisc.length > 0) {
      result += order.orderMisc.reduce(
        (acc, misc) =>
          acc + getEntity.value(misc.miscId, "misc").price * misc.quantity,
        0
      );
    }

    return result;
  });

  const deleteOrder = async (id) => {
    await ordersService.deleteOrder(id);
    await fetchOrders();
  };

  const fetchOrders = async () => {
    userOrders.value = await ordersService.getOrders();
  };

  const fetchAddresses = async () => {
    userAddresses.value = await addressesService.getAddresses();
  };

  const repeatOrder = async (order) => {
    await ordersService.createOrder({
      userId: order.userId,
      phone: getUserAttribute.value("phone"),
      address: {
        street: order.orderAddress.street,
        building: order.orderAddress.building,
        flat: order.orderAddress.flat,
        comment: order.orderAddress.comment,
      },
      pizzas: order.orderPizzas.map((pizza) => ({
        name: pizza.name,
        sauceId: pizza.sauceId,
        doughId: pizza.doughId,
        sizeId: pizza.sizeId,
        quantity: pizza.quantity,
        ingredients: pizza.ingredients.map((ingredient) => ({
          ingredientId: ingredient.ingredientId,
          quantity: ingredient.quantity,
        })),
      })),
      misc: order.orderMisc.map((misc) => ({
        miscId: misc.miscId,
        quantity: misc.quantity,
      })),
    });

    await fetchOrders();
  };

  return {
    userAddresses,
    userOrders,
    getOrderPrice,

    fetchAddresses,
    fetchOrders,
    deleteOrder,
    repeatOrder,
  };
});
