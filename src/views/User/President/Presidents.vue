<template>
  <v-card
      class="mx-auto"
      elevation="0"
  >
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-card-title class="font-weight-bold"><h1>Presidentes</h1></v-card-title>
      <v-spacer></v-spacer>
    </v-card-actions>

    <v-card max-width="1200" class="mx-auto my-2" elevation="0">
      <v-container  class="d-flex justify-space-around mb-1">
        <v-card
            class="mx-auto"
            max-width="336"
        >
          <v-card-title>Martín Vizcarra</v-card-title>
          <v-card-subtitle>Sucesión constitucional</v-card-subtitle>
          <v-img
              src="@/assets/Image (26).png"
          ></v-img>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-card-subtitle>Desde el 23 de marzo 2018 hasta el	9 de noviembre 2020</v-card-subtitle>
            <v-spacer></v-spacer>
          </v-card-actions>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text color="red">VER</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
        <v-card
            class="mx-auto"
            max-width="336"
        >
          <v-card-title>Manuel Merino</v-card-title>
          <v-card-subtitle>Sucesión constitucional</v-card-subtitle>
          <v-img
              src="@/assets/Image (27).png"
          ></v-img>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-card-subtitle>Desde el 10 de noviembre 2020 hasta el	15 de noviembre 2020</v-card-subtitle>
            <v-spacer></v-spacer>
          </v-card-actions>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text color="red" to="/informationpresident">VER</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
        <v-card
            class="mx-auto"
            max-width="336"
        >
          <v-card-title>Francisco Sagasti</v-card-title>
          <v-card-subtitle>Sucesión constitucional</v-card-subtitle>
          <v-img
              src="@/assets/Image (28).png"
              height="242"
          ></v-img>
          <v-card-actions>
            <v-card-subtitle align="center">Desde el 17 de noviembre 2020.
              En el cargo</v-card-subtitle>
          </v-card-actions>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text color="red">VER</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-container>
      <div class="align-center">
        <v-stepper alt-labels width="1200" elevation="0">
          <v-stepper non-linear >
            <v-stepper-header>
              <v-stepper-step
                  editable
                  step="1"
              >
              </v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step
                  editable
                  step="2"
              >
              </v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step
                  editable
                  step="3"
              >
              </v-stepper-step>
            </v-stepper-header>
          </v-stepper>

        </v-stepper>
      </div>
    </v-card>
  </v-card>
</template>

<script>
export default {
  name: "Presidents",
  data () {
    return {
      e1: 1,
      steps: 2,
    }
  },

  watch: {
    steps (val) {
      if (this.e1 > val) {
        this.e1 = val
      }
    },
  },

  methods: {
    nextStep (n) {
      if (n === this.steps) {
        this.e1 = 1
      } else {
        this.e1 = n + 1
      }
    },
  },
}
</script>

<style scoped>

</style>