<template>
  <v-card
      class="mx-auto"
      elevation="0"
  >
    <v-img
        class="white--text justify-center"
        height="600"
        src="@/assets/palacio.jpg"
        gradient="to top right, rgba(43, 49, 65, 0.9), rgba(96, 125, 139, 0.9)"
    >
      <v-container>
      </v-container>
      <v-container>
      </v-container>
      <v-container>
      </v-container>
      <v-container class="d-flex justify-center mb-14">
        <v-row
            align="center"
            justify="center"
        >
          <v-col class="text-center"  cols="8">
            <h1 class="text-h3 font-weight-bold mb-10">
              Encuentra la información que tanto buscabas
            </h1>
          </v-col>
          <v-col
              class="text-center"
              cols="8"
          >
            <h2 class="text-h4 font-weight-thin mb-6">
              Accede a la informacion de presidentes, partidos políticos y candidatos todo en un solo lugar
            </h2>
          </v-col>
        </v-row>
      </v-container>
      <v-container  class="d-flex justify-space-around mb-10">
        <v-btn width="350" height="50" to="/presidents">LÍNEA DEL TIEMPO PRESIDENCIAL</v-btn>
        <v-btn width="350" height="50" to="/politicalparties">PARTIDOS POLÍTICOS VIGENTES</v-btn>
        <v-btn width="350" height="50" to="/candidates">ELECCIONES GENERALES 2021</v-btn>
      </v-container>
      <v-spacer></v-spacer>
    </v-img>
    <v-card-title class="font-weight-bold">Últimas publicaciones</v-card-title>
    <v-container  class="d-flex justify-space-around mb-10">
      <v-dialog v-model="dialog"
                width="500">
        <template v-slot:activator="{ on, attrs }">
          <v-card
              class="mx-auto"
              max-width="350"
              v-bind="attrs"
              v-on="on"
          >
            <v-img
                src="@/assets/Image (16).png"
                height="200px"
            ></v-img>
            <v-card-title>
              Último debate electoral 2021
            </v-card-title>
            <v-card-subtitle>
              Escrito por Charlie Franci
            </v-card-subtitle>
          </v-card>
        </template>
        <v-card>
          <v-card-title>Contenido Premium</v-card-title>
          <v-card-text>La publicación que deseas ver solo esta habilidata para miembros. Si tiene una cuenta inicie sesión de lo contrario puede registrarse.</v-card-text>
          <v-card-actions class="d-flex justify-space-around">
            <v-spacer></v-spacer>
            <v-btn text color="red" to="/plan">CONTINUAR</v-btn>
            <v-btn text color="red" to="/">ATRÁS</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog v-model="dialog"
                width="500">
        <template v-slot:activator="{ on, attrs }">
          <v-card
              class="mx-auto"
              max-width="350"
              v-bind="attrs"
              v-on="on"
          >
            <v-img
                src="@/assets/Image (1).png"
                height="200px"
            ></v-img>
            <v-card-title>
              Crisis política en el Perú
            </v-card-title>
            <v-card-subtitle>
              Escrito por Charlie Franci
            </v-card-subtitle>

          </v-card>
        </template>
        <v-card>
          <v-card-title>Contenido Premium</v-card-title>
          <v-card-text>La publicación que deseas ver solo esta habilidata para miembros. Si tiene una cuenta inicie sesión de lo contrario puede registrarse.</v-card-text>
          <v-card-actions class="d-flex justify-space-around">
            <v-spacer></v-spacer>
            <v-btn text color="red" to="/plan">CONTINUAR</v-btn>
            <v-btn text color="red" to="/">ATRÁS</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog v-model="dialog"
                width="500">
        <template v-slot:activator="{ on, attrs }">
          <v-card
              class="mx-auto"
              max-width="350"
              v-bind="attrs"
              v-on="on"
          >
            <v-img
                src="@/assets/Image (2).png"
                height="200px"
            ></v-img>
            <v-card-title>
              La indecisión ciudadana
            </v-card-title>
            <v-card-subtitle>
              Escrito por Charlie Franci
            </v-card-subtitle>

          </v-card>
        </template>
        <v-card>
          <v-card-title>Contenido Premium</v-card-title>
          <v-card-text>La publicación que deseas ver solo esta habilidata para miembros. Si tiene una cuenta inicie sesión de lo contrario puede registrarse.</v-card-text>
          <v-card-actions class="d-flex justify-space-around">
            <v-spacer></v-spacer>
            <v-btn text color="red" to="/plan">CONTINUAR</v-btn>
            <v-btn text color="red" to="/">ATRÁS</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog v-model="dialog"
                width="500">
        <template v-slot:activator="{ on, attrs }">
          <v-card
              class="mx-auto"
              max-width="350"
              v-bind="attrs"
              v-on="on"
          >
            <v-img
                src="@/assets/Image (3).png"
                height="200px"
            ></v-img>
            <v-card-title>
              Fin del gobierno de Merino
            </v-card-title>
            <v-card-subtitle>
              Escrito por Charlie Franci
            </v-card-subtitle>

          </v-card>
        </template>
        <v-card>
          <v-card-title>Contenido Premium</v-card-title>
          <v-card-text>La publicación que deseas ver solo esta habilidata para miembros. Si tiene una cuenta inicie sesión de lo contrario puede registrarse.</v-card-text>
          <v-card-actions class="d-flex justify-space-around">
            <v-spacer></v-spacer>
            <v-btn text color="red" to="/plan">CONTINUAR</v-btn>
            <v-btn text color="red" to="/">ATRÁS</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </v-card>
</template>

<script>
  export default {
    name: 'Home',

    components: {

    },
    data () {
      return {
        dialog: false,
      }
    },
  }
</script>
