<template>
    <main class="content">
        <form action="#" method="post">

            <div class="content__wrapper">
            <h1 class="title title--big">Конструктор пиццы</h1>

            <div class="content__dough">

                <div class="sheet">
                <h2 class="title title--small sheet__title">Выберите тесто</h2>

                <div class="sheet__content dough">
                  <label v-for="doughType in dough" :key="id" class="dough__input dough__input--light">
                      <input type="radio" name="dought" :value="doughType.value" class="visually-hidden" checked>
                      <b>{{ doughType.name }}</b>
                      <span>{{ doughType.description }}</span>
                  </label>
                </div>

                </div>

            </div>

            <div class="content__diameter">
                <div class="sheet">
                <h2 class="title title--small sheet__title">Выберите размер</h2>

                  <div class="sheet__content diameter">
                    <label v-for="(size) in sizes" :key="size.id" class="diameter__input diameter__input--small">
                      <input type="radio" :name="size.name" :value="size.value" class="visually-hidden">
                      <span>{{ size.name }}</span>
                    </label>
                  </div>
                </div>
            </div>

            <div class="content__ingredients">
                <div class="sheet">
                <h2 class="title title--small sheet__title">Выберите ингредиенты</h2>

                <div class="sheet__content ingredients">

                    <div class="ingredients__sauce">
                    <p>Основной соус:</p>
                      <label v-for="(sauce) in sauces" :key="sauce.id">
                        <input type="radio" name="sauce" :value="sauce.value" checked>
                        <span>{{ sauce.name }}</span>
                      </label>
                    </div>

                    <div class="ingredients__filling">
                    <p>Начинка:</p>

                    <ul class="ingredients__list">
                      <li v-for="(ingredient) in ingredients" :key="ingredient.id" class="ingredients__item">
                          <span :class="'filling--' + ingredient.value" class="filling">{{ ingredient.name }}</span>

                          <div class="counter counter--orange ingredients__counter">
                              <button type="button" class="counter__button counter__button--minus" disabled>
                                <span class="visually-hidden">Меньше</span>
                              </button>
                              <input type="text" name="counter" class="counter__input" value="0">
                              <button type="button" class="counter__button counter__button--plus">
                                <span class="visually-hidden">Больше</span>
                              </button>
                          </div>
                        </li>
                        
                    </ul>

                    </div>

                </div>
                </div>
            </div>

            <div class="content__pizza">
                <label class="input">
                <span class="visually-hidden">Название пиццы</span>
                <input type="text" name="pizza_name" placeholder="Введите название пиццы">
                </label>

                <div class="content__constructor">
                <div class="pizza pizza--foundation--big-tomato">
                    <div class="pizza__wrapper">
                    <div class="pizza__filling pizza__filling--ananas"></div>
                    <div class="pizza__filling pizza__filling--bacon"></div>
                    <div class="pizza__filling pizza__filling--cheddar"></div>
                    </div>
                </div>
                </div>

                <div class="content__result">
                <p>Итого: 0 ₽</p>
                <button type="button" class="button" disabled>Готовьте!</button>
                </div>
            </div>

            </div>

        </form>
    </main>
</template>

<script setup>
import dough from '../mocks/dough.json'
import sizes from '../mocks/sizes.json'
import ingredients from '../mocks/ingredients.json'
import sauces from '../mocks/sauces.json'
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;
}

.main__wrapper {
  padding-bottom: 30px;

  background-color: $white;
  box-shadow: $shadow-light;

  h1 {
    margin-bottom: 0;
    padding: 0 95px;

    text-align: center;

    @include b-s36-h42;
  }

  p {
    padding: 0 95px;

    text-align: center;

    font-size: 20px;
    line-height: 30px;
  }

  b {
    font-size: 1.2em;
  }
}

.main__header {
  margin-bottom: 30px;
  padding: 20px 0;

  background-color: $green-600;

  img {
    display: block;

    margin: 0 auto;
  }
}

</style>