import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import GeniusComponents from 'pdas-ui-components'
Vue.config.productionTip = false;
Vue.use(Buefy)
Vue.use(GeniusComponents)
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
