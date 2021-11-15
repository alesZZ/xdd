<template>
  <v-card
      class="mx-auto"
      elevation="0"
  >
    <v-container></v-container>
    <div align="center" class="mb-2"><h3>Biografía</h3></div>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-card-title class="font-weight-bold"><h1>Manuel Arturo Merino de Lama</h1></v-card-title>
      <v-spacer></v-spacer>
    </v-card-actions>
    <div align="center" class="mb-2"><h3>Cuestionario</h3></div>
    <v-container></v-container>
    <div align="center" class="mb-2">
      <v-card width="512">
        <v-img src="@/assets/R.gif" height="350">
          <v-container></v-container>
          <div><p class="blue-grey--text text-h4">¡Felicidades!</p></div>
          <div><p class="text-h6">Obtuviste 5/5</p></div>
          <v-container></v-container>
          <div><p class="text-h6" >Ayúdanos a mejorar Piensa Perú.</p></div>
          <div><p class="text-h6">Qué tanto te gustó la página?</p></div>
          <div class="text-center mt-12">
            <v-rating
                v-model="rating"
                color="yellow darken-3"
                background-color="grey darken-1"
                empty-icon="$ratingFull"
                half-increments
                hover
                large
            ></v-rating>
          </div>
        </v-img>
        <v-card-actions class="d-flex justify-center mb-2">
          <v-btn
              block
              outlined
              elevation="1"
              height="50"
              class="d-flex justify-center"
              to="/informationpresident"
          >ENVIAR PUNTUACIÓN</v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "Final",
  data: () => ({
    rating: 0,
  }),
}
</script>

<style scoped>

</style>