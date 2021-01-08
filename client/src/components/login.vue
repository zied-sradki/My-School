<template>
  <v-app>
    <v-main>
      <div v-if="this.logged == false">
        <v-container class="fill-height" fluid>
          <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="8">
              <v-card class="elevation-12">
                <v-window v-model="step">
                  <v-window-item :value="1">
                    <v-row>
                      <v-col cols="12" md="8">
                        <v-card-text class="mt12">
                          <h1
                            class="text-center display-1 teal--text text--accent-3"
                          >
                            Sign in to Medical e-Services
                          </h1>
                          <br />
                          <h6 class="text-center mlt-4">
                            Ensure your email for registration
                          </h6>
                          <v-form>
                            <v-text-field
                              label="Email"
                              name="Email"
                              prepend-icon="email"
                              type="text"
                              color="teal accent-3"
                              v-model="input.username"
                            />
                            <v-text-field
                              id="password"
                              label="Password"
                              name="Password"
                              prepend-icon="lock"
                              type="password"
                              color="teal accent-3"
                              v-model="input.password"
                            />
                          </v-form>
                          <!-- <h3 class="text-center mt-3">
                            Forget your password ?
                          </h3> -->
                        </v-card-text>
                        <div class="text-center mt-3">
                          <v-btn
                            rounded
                            color="teal accent-3"
                            dark
                            v-on:click="login()"
                          >
                            SIGN IN</v-btn
                          >
                        </div>
                      </v-col>
                      <v-col cols="12" md="4" class="teal accent-3">
                        <v-card-text class="white-text mt-12">
                          <h4 class="text-center ">
                            Welcome to our Medical e-Services
                          </h4>
                          <br />
                          <h5 class="text-center">
                            Enter your personnel details and start journay with
                            us
                          </h5>
                        </v-card-text>
                        <div class="text-center">
                          <v-btn rounded outlined="" dark @click="step++"
                            >SIGN UP
                          </v-btn>
                        </div>
                      </v-col>
                    </v-row>
                  </v-window-item>
                  <v-window-item :value="2">
                    <v-row class="fill-height">
                      <v-col cols="12" md="4" class="teal accent-3">
                        <v-card-text class="white--text mt-12">
                          <h4 class="white-text mt-12">Welcome Back</h4>
                          <br /><br />
                          <h6 class="white-text">
                            To keep connected with us please login with your
                            personnel information
                          </h6>
                        </v-card-text>
                        <div class="text-center">
                          <v-btn rounded outlined dark @click="step--">
                            SIGN IN
                          </v-btn>
                        </div>
                      </v-col>
                      <v-col cols="12" md="8">
                        <v-card-text class="mt-12">
                          <h1
                            class="text-center display-1 teal--text text--accent-3"
                          >
                            Create Account
                          </h1>
                          <br />
                          <h6 class="text-center mlt-4">
                            Ensure your email for registration
                          </h6>
                          <v-text-field
                            label="Name"
                            name="Name"
                            prepend-icon="person"
                            type="text"
                            color="teal accent-3"
                            v-model="signup.username"
                          />
                          <v-text-field
                            label="Email"
                            name="Email"
                            prepend-icon="email"
                            type="text"
                            color="teal accent-3"
                            v-model="signup.email"
                          />
                          <v-text-field
                            id="password"
                            label="Password"
                            name="Password"
                            prepend-icon="lock"
                            type="password"
                            color="teal accent-3"
                            v-model="signup.password"
                          />
                        </v-card-text>
                        <div class="text-center mt-n5">
                          <v-btn
                            rounded
                            color="teal accent-3"
                            dark
                            v-on:click="signUp()"
                            >SIGN UP</v-btn
                          >
                        </div>
                      </v-col>
                    </v-row>
                  </v-window-item>
                </v-window>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </div>
      <div v-else><App /></div>
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    step: 1,
    input: {
      username: "",
      password: "",
    },
    signup: {
      username: "",
      password: "",
      email: "",
    },
    logged: false,
    usernamelogin: false,
  }),
  components: {},
  methods: {
    login() {
      axios.get("http://localhost:3000/api/users/").then((response) => {
        for (let i = 0; i < response.data.length; i++) {
          if (this.input.username == response.data[i].email) {
            this.usernamelogin = true;
            if (this.input.password == response.data[i].password) {
              this.logged = true;
              break;
            } else {
              alert("Wrong Password");
            }
          }
        }
        if (!this.usernamelogin) {
          alert("Wrong E-mail");
        }
      });
    },
    signUp() {
      axios
        .post("http://localhost:3000/api/users/createUser", this.signup)
        .then((response) => console.log(response));
    },
  },
  props: {
    source: String,
  },
};
</script>

<style scoped>
.col-sm-8.col-md-8.col-12 {
  margin-top: 150px;
}
</style>
