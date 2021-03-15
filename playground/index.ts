import "@mgr8-components/base/base.scss";
import { createApp } from "vue";
import Playground from "./playground.vue";

const app = createApp(Playground);
app.mount("#app")