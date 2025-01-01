import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useDataStore = defineStore("data", () => {
  const sizeOptions = ref([
    {
      id: 1,
      name: "23 см",
      image: "diameter.svg",
      multiplier: 1,
    },
    {
      id: 2,
      name: "32 см",
      image: "diameter.svg",
      multiplier: 2,
    },
    {
      id: 3,
      name: "45 см",
      image: "diameter.svg",
      multiplier: 3,
    },
  ]);

  const sizeValuesMap = {
    1: "small",
    2: "normal",
    3: "big",
  };

  const saucesOptions = ref([
    {
      id: 1,
      name: "томатный",
      price: 50,
    },
    {
      id: 2,
      name: "сливочный",
      price: 50,
    },
  ]);

  const saucesValuesMap = {
    1: "tomato",
    2: "creamy",
  };

  const ingredientsOptions = ref([
    {
      id: 1,
      name: "грибы",
      image: "filling/mushrooms.svg",
      price: 33,
    },
    {
      id: 2,
      name: "чеддер",
      image: "filling/cheddar.svg",
      price: 42,
    },
    {
      id: 3,
      name: "салями",
      image: "filling/salami.svg",
      price: 42,
    },
    {
      id: 4,
      name: "ветчина",
      image: "filling/ham.svg",
      price: 42,
    },
    {
      id: 5,
      name: "ананас",
      image: "filling/ananas.svg",
      price: 25,
    },
    {
      id: 6,
      name: "бекон",
      image: "filling/bacon.svg",
      price: 42,
    },
    {
      id: 7,
      name: "лук",
      image: "filling/onion.svg",
      price: 21,
    },
    {
      id: 8,
      name: "чили",
      image: "filling/chile.svg",
      price: 21,
    },
    {
      id: 9,
      name: "халапеньо",
      image: "filling/jalapeno.svg",
      price: 25,
    },
    {
      id: 10,
      name: "маслины",
      image: "filling/olives.svg",
      price: 25,
    },
    {
      id: 11,
      name: "томаты",
      image: "filling/tomatoes.svg",
      price: 35,
    },
    {
      id: 12,
      name: "лосось",
      image: "filling/salmon.svg",
      price: 50,
    },
    {
      id: 13,
      name: "моцарелла",
      image: "filling/mozzarella.svg",
      price: 35,
    },
    {
      id: 14,
      name: "пармезан",
      image: "filling/parmesan.svg",
      price: 35,
    },
    {
      id: 15,
      name: "блю чиз",
      image: "filling/blue_cheese.svg",
      price: 50,
    },
  ]);

  const ingredientsValuesMap = {
    1: "mushrooms",
    2: "cheddar",
    3: "salami",
    4: "ham",
    5: "ananas",
    6: "bacon",
    7: "onion",
    8: "chile",
    9: "jalapeno",
    10: "olives",
    11: "tomatoes",
    12: "salmon",
    13: "mozzarella",
    14: "parmesan",
    15: "blue_cheese",
  };

  const doughOptions = ref([
    {
      id: 1,
      name: "Тонкое",
      image: "dough-light.svg",
      description: "Из твердых сортов пшеницы",
      price: 300,
    },
    {
      id: 2,
      name: "Толстое",
      image: "dough-large.svg",
      description: "Из твердых сортов пшеницы",
      price: 300,
    },
  ]);

  const doughValuesMap = {
    1: "light",
    2: "large",
  };

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

  const getSizeById = computed(
    () => (id) => sizeOptions.value.find((option) => option.id === Number(id))
  );
  const getSauceById = computed(
    () => (id) => saucesOptions.value.find((option) => option.id === Number(id))
  );
  const getDoughById = computed(
    () => (id) => doughOptions.value.find((option) => option.id === Number(id))
  );
  const getMiscById = computed(
    () => (id) => miscOptions.value.find((option) => option.id === Number(id))
  );

  const getIngredientById = computed(
    () => (id) =>
      ingredientsOptions.value.find((option) => option.id === Number(id))
  );

  const getEntity = computed(() => (id, entity) => {
    const entities = {
      size: sizeOptions,
      sauce: saucesOptions,
      dough: doughOptions,
      ingredient: ingredientsOptions,
      misc: miscOptions,
    };

    return entities[entity].value.find((option) => option.id === id);
  });

  const getEntityValue = computed(() => (id, entity) => {
    const entities = {
      size: sizeValuesMap,
      sauce: saucesValuesMap,
      ingredient: ingredientsValuesMap,
      dough: doughValuesMap,
    };

    return entities[entity][id];
  });

  return {
    saucesOptions,
    ingredientsOptions,
    sizeOptions,
    miscOptions,
    doughOptions,

    getSizeById,
    getSauceById,
    getDoughById,
    getMiscById,
    getIngredientById,
    getEntity,
    getEntityValue,
  };
});
