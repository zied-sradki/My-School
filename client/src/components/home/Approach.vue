<template>
  <div>
    <div class="text-center">
      <b-jumbotron header="OUR APPROACH" lead="" id="Services">
        <p>
          We integrate education, health care, and family support services and
          build family well-being throughout a child’s development.
        </p>
      </b-jumbotron>
      <div>
        <b-container>
          <b-row>
            <b-col class="text-center">
              <b-card
                title="Our Courses"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
              >
                <p class="h1 mb-2"><i class="bx bx-star"></i></p>
                <b-card-text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </b-card-text>
                <b-button href="courses" variant="primary"
                  >Discover more</b-button
                >
              </b-card>
            </b-col>
            <b-col class="text-center">
              <b-card
                title="Our Activites"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
              >
                <p class="h1 mb-2"><i class="bx bx-star"></i></p>

                <b-card-text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </b-card-text>
                <b-button href="activites" variant="primary"
                  >Discover more</b-button
                >
              </b-card>
            </b-col>
            <b-col class="text-center">
              <b-card
                title="Our Classes"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
              >
                <p class="h1 mb-2"><i class="bx bx-star"></i></p>
                <b-card-text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </b-card-text>
                <b-button href="classes" variant="primary"
                  >Discover more</b-button
                >
              </b-card>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </div>
  </div>
</template>

<script>
//sets a cookie for the login for storage
export default {
  name: "Approach",
};
</script>

<style>
.btn-primary {
  color: #fff;
  background-color: #009fb7;
  border-color: #009fb7;
}

.btn-primary:hover {
  color: #fff;
  background-color: #fed766;
  border-color: #fed766;
}
</style>
