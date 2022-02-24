import Vue from "vue";
import App from "./App.vue";

import VueCountDown from "../packages/index";

Vue.use(VueCountDown);
Vue.config.productionTip = false;

new Vue({
	render: h => h(App)
}).$mount("#app");
