<template>
  <div>
    <p :style="{ color: titleInfo.color }">{{ titleInfo.value }}</p>
    <p>{{ $store.state.counter }}</p>
    <div>{{ doubleCount }}</div>
    <input
      type="text"
      v-model="inputVal"
      @keydown.enter="addTodo(newTodo(inputVal))"
    />
    <div v-for="item in items" :key="item.id">
      {{ item.name }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
type ToDo = {
  id: number;
  name: string;
  completed: boolean;
};
type TitleInfo = {
  value: string;
  color: string;
};
export default defineComponent({
  props: {
    titleInfo: {
      type: Object as PropType<TitleInfo>,
      required: true,
    },
  },
  data() {
    return {
      inputVal: "",
    };
  },
  computed: {
    doubleCount(): number {
      return this.$store.state.counter * 2;
    },
    items() {
      return this.$store.state.todos?.todo;
    },
  },
  created() {
    this.$store.dispatch("todos/initTodo");
  },
  methods: {
    newTodo(todoName: string): ToDo {
      return {
        id: this.items?.length ? this.items?.length + 1 : 0,
        name: todoName,
        completed: false,
      };
    },
    addTodo(todo: ToDo): void {
      this.items?.push(todo);
      this.inputVal = "";
    },
  },
});
</script>

<style></style>
