import Vue from "vue";
import App from "./App.vue";
import "./icons";

import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "@mdi/font/css/materialdesignicons.css";

import router from "./router.js";

import Vuesax from "vuesax";
import "vuesax/dist/vuesax.css";

import store from "./store.js";
import PubNubVue from "pubnub-vue";
import "boxicons/css/boxicons.min.css";

import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(Vuetify);
Vue.use(Vuesax);
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

const publish_Key = "pub-c-fa43105c-ed88-47fb-a5f1-04b3a289feb3";
const subscribe_Key = "sub-c-8d75f22c-538e-11eb-a233-facb2062b65c";

// Make a unique uuid for each client
const myUuid = localStorage.getItem("messangerId");
const me = {
  uuid: myUuid,
};

try {
  if (!publish_Key || !subscribe_Key) {
    throw "PubNub Keys are missing.";
  }
} catch (err) {
  console.log(err);
}
// Initialize the PubNub client API
Vue.use(
  PubNubVue,
  {
    subscribeKey: subscribe_Key,
    publishKey: publish_Key,
    ssl: true,
  },
  store
);

// Execute when the Vue instance is created
function created() {
  this.$store.commit("setMe", { me });
}

/**
 * Get a new 4 character ID. It is recommended to use a standard 128-bit UUID
 *     in production apps instead.
 *
 * @return {string} A unique ID for each user.  */

/* eslint-disable no-new */

new Vue({
  router,
  store,
  render: (h) => h(App),
  vuetify: new Vuetify({
    icons: {
      iconfont: "mdiSvg", // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
    },
  }),
  created,
}).$mount("#app");
