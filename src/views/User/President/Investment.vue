<template>
  <v-card
      class="mx-auto"
      elevation="0"
  >
    <v-container></v-container>
    <div align="center" class="mb-2"><h3>Inversión</h3></div>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-card-title class="font-weight-bold"><h1>Manuel Arturo Merino de Lama</h1></v-card-title>
      <v-spacer></v-spacer>
    </v-card-actions>
    <div align="center" class="mb-2"><h3>Escrito por Charlie Franci | Publicado el 30/05/2021</h3></div>
    <v-card max-width="1150" class="mx-auto my-2" elevation="0">
      <v-container  class="d-flex justify-space-around">
        <v-row no-gutters>
          <v-col cols="6">
            <v-card
                class="mx-15"
                max-width="424"
                height="500"
            >
              <v-card-title>Sectores</v-card-title>
              <v-container>
                <v-data-table
                    dense
                    :headers="headers"
                    :items="sectors"
                    item-key="name"
                    class="elevation-1"
                ></v-data-table>
              </v-container>
            </v-card>
          </v-col>
          <v-col cols="6">
            <v-card
                class="mx-2"
                max-width="424"
            >
              <v-card-title>Distribución</v-card-title>
              <v-img
                  src="@/assets/barras.jpg"

              >
              </v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
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
  name: "Investment",
  data: () => ({
    sectors: [
      {
        name: 'Openlane',
        ce: '$2,350.00',
        cu: '$2,350.00',
      },
      {
        name: 'Gogozoom',
        ce: '$750.83',
        cu: '$750.83',
      },
      {
        name: 'Nam-zim',
        ce: '$1,200.00',
        cu: '$1,200.00',
      },
      {
        name: 'Sunnamplex',
        ce: '$2,500.00',
        cu: '$2,500.00',
      },
      {
        name: 'Codehow',
        ce: '$3,200.00',
        cu: '$3,200.00',
      },
      {
        name: 'Konex',
        ce: '$850.00',
        cu: '$850.00',
      },
      {
        name: 'Inity',
        ce: '$500.00',
        cu: '$500.00',
      },
      {
        name: 'Domzoom',
        ce: '$1,500.00',
        cu: '$1,500.00',
      },
      {
        name: 'Betasoloin',
        ce: '$2,400.00',
        cu: '$2,400.00',
      },
      {
        name: 'Kinnamplus',
        ce: '$4,000.00',
        cu: '$4,000.00',
      },
    ],
    headers: [
      {
        text: 'Sector',
        align: 'start',
        sortable: false,
        value: 'name',
      },
      { text: 'Cant. estimada', value: 'ce' },
      { text: 'Cant. utilzada', value: 'cu' },
    ],
  }),
}
</script>

<style scoped>

</style>