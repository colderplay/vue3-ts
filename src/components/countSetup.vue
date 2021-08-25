<template>
  <div>
    <div v-for="item in items" :key="item.id">{{ item.name }}</div>
    <button @click="changeColor">sadfsfsd</button>
    {{ btnColor }}
    <div :style="{ color: list.color }">{{ list.value }}</div>

    <div>{{ counter }}</div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import type { PropType } from "vue";
import type { ToDo, TitleInfo } from "./types";
import { useStore } from "vuex";
import { key } from "../store";

const store = useStore(key);
const counter = store.state.counter;

defineProps({
  list: {
    type: Object as PropType<TitleInfo>,
    required: true,
  },
});
const emits = defineEmits(["handle"]);

const btnColor = ref("green");
const changeColor = () => {
  store.commit("add");
  emits("handle");
  btnColor.value = "red";
};
const items = ref([] as ToDo[]);
items.value.push({
  id: 1,
  name: "selevet",
  completed: false,
});
</script>

<style scoped>
button {
  background-color: v-bind(btnColor);
}
</style>
