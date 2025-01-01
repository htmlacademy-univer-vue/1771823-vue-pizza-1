import { ref } from "vue";
import { defineStore } from "pinia";

export const useProfileStore = defineStore("profile", () => {
  const currentUser = ref({
    id: "1",
    name: "Василий Ложкин",
    email: "example@mail.ru",
    avatar: "@assets/img/users/user5@2x.jpg",
    phone: "+7 999-999-99-99",
  });

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

  return {
    currentUser,
    userAddresses,
    userOrders,
  };
});
