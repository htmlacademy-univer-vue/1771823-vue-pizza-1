import { defineStore } from "pinia";
import { ref } from "vue";

export const useDataStore = defineStore("data", () => {
  const sizeOptions = ref([
    {
      id: 1,
      name: "23 см",
      image: "diameter.svg",
      multiplier: 1,
      value: "small",
    },
    {
      id: 2,
      name: "32 см",
      image: "diameter.svg",
      multiplier: 2,
      value: "normal",
    },
    {
      id: 3,
      name: "45 см",
      image: "diameter.svg",
      multiplier: 3,
      value: "big",
    },
  ]);
  const saucesOptions = ref([
    {
      id: 1,
      name: "томатный",
      price: 50,
      value: "tomato",
    },
    {
      id: 2,
      name: "сливочный",
      price: 50,
      value: "creamy",
    },
  ]);

  const ingredientsOptions = ref([
    {
      id: 1,
      name: "грибы",
      image: "filling/mushrooms.svg",
      price: 33,
      value: "mushrooms",
    },
    {
      id: 2,
      name: "чеддер",
      image: "filling/cheddar.svg",
      price: 42,
      value: "cheddar",
    },
    {
      id: 3,
      name: "салями",
      image: "filling/salami.svg",
      price: 42,
      value: "salami",
    },
    {
      id: 4,
      name: "ветчина",
      image: "filling/ham.svg",
      price: 42,
      value: "ham",
    },
    {
      id: 5,
      name: "ананас",
      image: "filling/ananas.svg",
      price: 25,
      value: "ananas",
    },
    {
      id: 6,
      name: "бекон",
      image: "filling/bacon.svg",
      price: 42,
      value: "bacon",
    },
    {
      id: 7,
      name: "лук",
      image: "filling/onion.svg",
      price: 21,
      value: "onion",
    },
    {
      id: 8,
      name: "чили",
      image: "filling/chile.svg",
      price: 21,
      value: "chile",
    },
    {
      id: 9,
      name: "халапеньо",
      image: "filling/jalapeno.svg",
      price: 25,
      value: "jalapeno",
    },
    {
      id: 10,
      name: "маслины",
      image: "filling/olives.svg",
      price: 25,
      value: "olives",
    },
    {
      id: 11,
      name: "томаты",
      image: "filling/tomatoes.svg",
      price: 35,
      value: "tomatoes",
    },
    {
      id: 12,
      name: "лосось",
      image: "filling/salmon.svg",
      price: 50,
      value: "salmon",
    },
    {
      id: 13,
      name: "моцарелла",
      image: "filling/mozzarella.svg",
      price: 35,
      value: "mozzarella",
    },
    {
      id: 14,
      name: "пармезан",
      image: "filling/parmesan.svg",
      price: 35,
      value: "parmesan",
    },
    {
      id: 15,
      name: "блю чиз",
      image: "filling/blue_cheese.svg",
      price: 50,
      value: "blue_cheese",
    },
  ]);

  const doughOptions = ref([
    {
      id: 1,
      name: "Тонкое",
      image: "dough-light.svg",
      description: "Из твердых сортов пшеницы",
      price: 300,
      value: "light",
    },
    {
      id: 2,
      name: "Толстое",
      image: "dough-large.svg",
      description: "Из твердых сортов пшеницы",
      price: 300,
      value: "large",
    },
  ]);

  const miscOptions = ref([
    {
      id: 1,
      name: "Coca-Cola 0,5 литра",
      image: "cola",
      price: 56,
    },
    {
      id: 2,
      name: "Острый соус",
      image: "sauce",
      price: 30,
    },
    {
      id: 3,
      name: "Картошка из печи",
      image: "potato",
      price: 56,
    },
  ]);

  return {
    saucesOptions,
    ingredientsOptions,
    sizeOptions,
    miscOptions,
    doughOptions,
  };
});
