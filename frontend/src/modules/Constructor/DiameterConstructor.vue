<template>
  <CustomTitle>
    <h2 class="title title--small sheet__title">Выберите размер</h2>
  </CustomTitle>

  <div class="sheet__content diameter">
    <label
      v-for="size in sizes"
      :key="size.id"
      class="diameter__input"
      :class="`diameter__input--${size.value}`"
    >
      <input
        v-model="value"
        type="radio"
        :name="size.name"
        :value="size.value"
        class="visually-hidden"
      />
      <span>{{ size.name }}</span>
    </label>
  </div>
</template>

<script setup>
import CustomTitle from "@/common/components/CustomTitle.vue";
import { computed } from "vue";
import { useDataStore } from "../../store/dataStore";
import { storeToRefs } from "pinia";

const { sizeOptions: sizes } = storeToRefs(useDataStore());

const props = defineProps({
  modelValue: {
    type: String,
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

<style lang="scss" scoped>
.diameter__input {
  margin-right: 8.7%;
  margin-bottom: 20px;
  padding-top: 7px;
  padding-bottom: 6px;

  cursor: pointer;

  span {
    @include r-s16-h19;

    position: relative;

    padding-left: 46px;

    &::before {
      @include p_center_v;

      width: 36px;
      height: 36px;

      content: "";
      transition: 0.3s;

      border-radius: 50%;
      background-color: $green-100;
      background-image: url("@assets/img/diameter.svg");
      background-repeat: no-repeat;
      background-position: center;
    }
  }

  &:nth-child(3n) {
    margin-right: 0;
  }

  &--small {
    span::before {
      background-size: 18px;
    }
  }

  &--normal {
    span::before {
      background-size: 29px;
    }
  }

  &--big {
    span::before {
      background-size: 100%;
    }
  }

  &:hover {
    span::before {
      box-shadow: $shadow-regular;
    }
  }

  input {
    &:checked + span::before {
      box-shadow: $shadow-large;
    }
  }
}
</style>
