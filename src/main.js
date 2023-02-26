import Vue from "vue";
import App from "./App.vue";
import router from "./routes";
import JwPagination from "jw-vue-pagination";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faSearch } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faSearch);

/* add font awesome icon component */
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.component("jw-pagination", JwPagination);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
