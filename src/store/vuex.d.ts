import { ComponentCustomProperties } from "vue";
import { Store } from "vuex";
import { State } from "./index";

//对this>$store的兼容
declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
