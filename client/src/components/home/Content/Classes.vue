<template>
  <div class="classes">
    <NavBar></NavBar>
    <div>
      <div>
        <b-jumbotron header="OUR CLASSES" lead="">
          <p>
            We integrate education, health care, and family support services and
            build family well-being throughout a child’s development.
          </p>
          <h2>Classe A:</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod
            elementum nisi quis eleifend quam adipiscing. Enim eu turpis egestas
            pretium. Adipiscing enim eu turpis egestas. Ut placerat orci nulla
            pellentesque dignissim. Amet massa vitae tortor condimentum lacinia
            quis vel eros. Integer quis auctor elit sed vulputate mi sit amet
            mauris. Non curabitur gravida arcu ac tortor dignissim convallis
            aenean. Ipsum dolor sit amet consectetur adipiscing elit.
            Suspendisse ultrices gravida dictum fusce ut placerat orci. Et netus
            et malesuada fames ac turpis egestas integer. Bibendum enim
            facilisis gravida neque. Mauris pellentesque pulvinar pellentesque
            habitant. Mauris augue neque gravida in fermentum.
          </p>
        </b-jumbotron>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
//import axios from "axios";
import NavBar from "./../NavBar.vue";

import Footer from "./../Footer.vue";

export default {
  computed: {},
  methods: {},
  components: {
    NavBar,

    Footer,
  },
};
</script>
<style>
.classes {
  margin-left: 70px;
  margin-right: 70px;
}
</style>
