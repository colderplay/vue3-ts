<template>
  <div>
    <h3>{{ title }}</h3>
    <Count :title-info="{ value: '学习vue3+TS', color: 'red' }"></Count>
    <countSetup
      :list="{ value: '学校jquery', color: 'yellow' }"
      @handle="handle"
    ></countSetup>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Count from "./components/count.vue";
import countSetup from "./components/countSetup.vue";

export default defineComponent({
  name: "App",
  data() {
    return {
      title: "我爱vue3----",
    };
  },
  components: {
    Count,
    countSetup,
  },
  methods: {
    handle() {
      this.title = "我爱react------";
    },
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
