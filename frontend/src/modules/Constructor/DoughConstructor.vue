<template>
  <CustomTitle>
    <h2 class="title title--small sheet__title">Выберите тесто</h2>
  </CustomTitle>

  <div class="sheet__content dough">
    <label
      v-for="doughType in doughOptions"
      :key="doughType.id"
      class="dough__input"
      :class="`dough__input--${getEntityValue(doughType.name)}`"
    >
      <input
        v-model="value"
        type="radio"
        name="dough"
        :value="doughType.id"
        class="visually-hidden"
      />
      <b>{{ doughType.name }}</b>
      <span>{{ doughType.description }}</span>
    </label>
  </div>
</template>

<script setup>
import CustomTitle from "@/common/components/CustomTitle.vue";
import { storeToRefs } from "pinia";
import { computed } from "vue";
import { useDataStore } from "../../store/dataStore";

const { doughOptions, getEntityValue } = storeToRefs(useDataStore());

const props = defineProps({
  modelValue: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue"]);

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>

<style lang="scss">
.dough__input {
  position: relative;

  margin-right: 8%;
  margin-bottom: 20px;
  padding-left: 50px;

  cursor: pointer;

  b {
    @include r-s16-h19;

    &::before {
      @include p_center-v;

      width: 36px;
      height: 36px;

      content: "";
      transition: 0.3s;

      border-radius: 50%;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
    }
  }

  span {
    @include l-s11-h13;

    display: block;
  }

  &--light {
    b {
      &::before {
        background-image: url("@assets/img/dough-light.svg");
      }
    }
  }

  &--large {
    b {
      &::before {
        background-image: url("@assets/img/dough-large.svg");
      }
    }
  }

  &:hover {
    b::before {
      box-shadow: $shadow-regular;
    }
  }

  input {
    &:checked + b::before {
      box-shadow: $shadow-large;
    }
  }
}
</style>
