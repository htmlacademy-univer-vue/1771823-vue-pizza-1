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

  const userAddresses = ref([]);

  const userOrders = ref([]);

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

  const fetchOrders = async () => {
    userOrders.value = await ordersService.getOrders();
  };

  const fetchAddresses = async () => {
    userAddresses.value = await addressesService.getAddresses();
  };

  const deleteOrder = async (id) => {
    await ordersService.deleteOrder(id);
    await fetchOrders();
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
    await fetchAddresses();
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
