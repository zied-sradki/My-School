<template>
  <div class="py-5">
    <div>
      <b-jumbotron header="News" lead="" id="News">
        <b-row>
          <b-col>
            <a href="NewsItem">
              <b-card
                overlay
                img-src="./images/SL3.jpg"
                img-alt="Card Image"
                text-variant="white"
                title="Image Overlay"
              >
                <b-card-text>
                  Some quick example text to build on the card and make up the
                  bulk of the card's content.
                </b-card-text>
              </b-card>
            </a>
          </b-col>

          <b-col>
            <a href="NewsItem">
              <b-card
                overlay
                img-src="./images/class.jpg"
                img-alt="Card Image"
                text-variant="white"
                title="Image Overlay"
              >
                <b-card-text>
                  Some quick example text to build on the card and make up the
                  bulk of the card's content.
                </b-card-text>
              </b-card>
            </a>
          </b-col>
        </b-row>
      </b-jumbotron>
      <div></div>
    </div>
  </div>
</template>

<script>
//sets a cookie for the login for storage
export default {
  name: "News",
};
</script>

<style></style>
