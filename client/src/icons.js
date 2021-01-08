import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faBars,
  faSearch,
  faBell,
  faPowerOff,
  faUser,
  faCogs,
  faTh,
  faShareAlt,
  faStar,
  faComment,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faBars,
  faSearch,
  faBell,
  faPowerOff,
  faUser,
  faCogs,
  faTh,
  faShareAlt,
  faStar,
  faComment,
  faHome
);

Vue.component("fa-icon", FontAwesomeIcon);
