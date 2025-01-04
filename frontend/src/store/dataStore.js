import { defineStore, storeToRefs } from "pinia";
import { computed, ref } from "vue";
import {
  doughService,
  ingredientsService,
  miscService,
  saucesService,
  sizesService,
} from "../services";
import { usePizzaStore } from "./pizzaStore";

export const useDataStore = defineStore("data", () => {
  const sizeOptions = ref([]);

  const sizeValuesMap = {
    "23 см": "small",
    "32 см": "normal",
    "45 см": "big",
  };

  const saucesOptions = ref([]);

  const saucesValuesMap = {
    томатный: "tomato",
    сливочный: "creamy",
  };

  const ingredientsOptions = ref([]);

  const ingredientsValuesMap = {
    грибы: "mushrooms",
    чеддер: "cheddar",
    салями: "salami",
    ветчина: "ham",
    ананас: "ananas",
    бекон: "bacon",
    лук: "onion",
    чили: "chile",
    халапеньо: "jalapeno",
    маслины: "olives",
    томаты: "tomatoes",
    лосось: "salmon",
    моцарелла: "mozzarella",
    пармезан: "parmesan",
    "блю чиз": "blue_cheese",
  };

  const doughOptions = ref([]);

  const doughValuesMap = {
    Тонкое: "light",
    Толстое: "large",
  };

  const miscOptions = ref([]);

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

    return entities[entity].value.find((option) => option.id === Number(id));
  });

  const getEntityValue = computed(() => (name) => {
    const entities = {
      ...sizeValuesMap,
      ...saucesValuesMap,
      ...ingredientsValuesMap,
      ...doughValuesMap,
    };

    return entities[name];
  });

  const fetchDough = async () => {
    doughOptions.value = await doughService.getDough();
  };

  const fetchSizes = async () => {
    sizeOptions.value = await sizesService.getSizes();
  };

  const fetchSauces = async () => {
    saucesOptions.value = await saucesService.getSauces();
  };

  const fetchMisc = async () => {
    miscOptions.value = await miscService.getMisc();
  };

  const fetchIngredients = async () => {
    ingredientsOptions.value = await ingredientsService.getIngredients();

    const { pizzaIngredients } = storeToRefs(usePizzaStore());

    ingredientsOptions.value.map((option) => {
      pizzaIngredients.value[option.id] = 0;
    });
  };
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

    fetchDough,
    fetchSizes,
    fetchSauces,
    fetchMisc,
    fetchIngredients,
  };
});
