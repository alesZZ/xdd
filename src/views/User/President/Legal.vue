<template>
  <v-card
      class="mx-auto"
      elevation="0"
  >
    <v-container></v-container>
    <div align="center" class="mb-2"><h3>Información Legal</h3></div>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-card-title class="font-weight-bold"><h1>Manuel Arturo Merino de Lama</h1></v-card-title>
      <v-spacer></v-spacer>
    </v-card-actions>
    <div align="center" class="mb-2"><h3>Escrito por Charlie Franci | Publicado el 30/05/2021</h3></div>
    <div align="center">
      <v-img src="@/assets/Rectangle 4.png" max-width="1040"></v-img>
    </div>
    <div align="center">
      <v-card width="864" elevation="0">
        <v-container>
          <p  class="text-start text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus vestibulum tristique in turpis quis volutpat eget. Quis enim arcu integer pellentesque ut eleifend orci. Consectetur faucibus quam egestas dolor tempus. Vestibulum ornare fringilla rhoncus tellus risus sed nulla iaculis lectus. In leo sed habitasse etiam adipiscing ac eget lectus facilisi. Augue nisl egestas eu viverra quam consectetur feugiat ipsum fusce. Purus pellentesque tincidunt rutrum non. Amet sit ipsum nisi, facilisi. Rhoncus, imperdiet integer laoreet lorem sagittis. Integer facilisis vulputate eget egestas tristique in curabitur vel interdum. Ultricies mus pulvinar mauris ut integer orci vivamus nullam. Neque in habitant tellus, est, at. Nam commodo faucibus erat iaculis blandit et odio malesuada.

            Amet nibh nunc nunc arcu senectus blandit. Eget id enim elit ut eu, eget. Felis vel sit eget pharetra dictum morbi. Facilisis nulla accumsan lorem cras risus quisque. Odio odio diam lectus egestas porta ut.

            Quisque malesuada odio id in tellus lectus aliquam viverra commodo. Blandit at quis imperdiet nibh. Quis sed scelerisque donec mi, habitant massa egestas sed. Vitae ut posuere odio feugiat est id ac. Sed posuere phasellus egestas aliquet tempor nec, augue suspendisse. Sed blandit platea viverra sed fringilla viverra eget non. Tortor, nunc tempus sollicitudin rhoncus tellus orci venenatis, turpis massa. Adipiscing dignissim diam diam, amet pharetra tortor, eget. Auctor tincidunt nibh vel augue dictum lobortis.
          </p>
        </v-container>
      </v-card>
    </div>
    <v-footer
        color=#607D8B
        padless
    >
      <v-row
          justify="center"
          no-gutters
      >
        <h1 class="white--text">Pon a prueba lo aprendido!</h1>
        <v-col
            class="py-4 text-center white--text"
            cols="12"
        >
          <v-btn width="400" to="/questions">Comenzar cuestionario</v-btn>
        </v-col>
      </v-row>
    </v-footer>
  </v-card>
</template>

<script>
export default {
  name: "Legal"
}
</script>

<style scoped>

</style>