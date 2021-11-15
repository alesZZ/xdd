<template>
  <v-card
      class="mx-auto"
      elevation="0"
  >
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-card-title class="font-weight-bold"><h1>Fuerza Popular</h1></v-card-title>
      <v-spacer></v-spacer>
    </v-card-actions>
    <v-card max-width="1326" class="mx-auto my-2" elevation="0">
      <v-container  class="d-flex justify-space-around mb-1">
        <v-row no-gutters>
          <v-col cols="3">
            <v-card
                class="mx-auto"
                max-width="248"
                max-height="349"
                elevation="0"
            >
              <v-img
                  src="@/assets/Image (14).png"
                  height="450"
              ></v-img>
            </v-card>
          </v-col>
          <v-col cols="8">
            <v-container  class="d-flex justify-space-around mb-1">
              <v-card

                  max-width="248"
                  max-height="192"
              >
                <v-container>
                  <span><h4>Fecha de fundación</h4></span>
                  <span><h5 class="font-weight-light">9 de marzo de 2010</h5></span>
                  <span><h4>Presidente</h4></span>
                  <span><h5 class="font-weight-light">Keiko Fujimori</h5></span>
                  <span><h4>Ideología</h4></span>
                  <span><h5 class="font-weight-light">Fujimorismo</h5></span>
                  <span><h4>Posición</h4></span>
                  <span><h5 class="font-weight-light">Derecha a Extrema derecha</h5></span>
                </v-container>
              </v-card>
              <v-card
                  class="mx-auto"
                  max-width="248"
                  max-height="238"
              >
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-card-title>Información histórica</v-card-title>
                  <v-spacer></v-spacer>
                </v-card-actions>
                <v-card-text>Eventos principales desde la fundación del partido político de interés público.</v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn text color="red">VER</v-btn>
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
              <v-card
                  class="mx-auto"
                  max-width="248"
                  max-height="238"
              >
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-card-title >Información Legal</v-card-title>
                  <v-spacer></v-spacer>
                </v-card-actions>
                <v-card-text>Casos de investigación y sucesos relacionados a aspectos legales de interés nacional.</v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn text color="red">VER</v-btn>
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-container>
            <v-col cols="4">
              <v-card></v-card>
            </v-col>
            <v-col  md="10"
                    offset-md="4" >
              <v-card
                  max-height="122"
                  max-width="512">
                <v-container>
                  <span><h4>Aceptación Ciudadana</h4></span>
                  <v-card-actions>
                    <h1>13.41%</h1>
                    <v-spacer></v-spacer>
                    <v-dialog v-model="dialog"
                              width="500">
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn text color="red"  v-bind="attrs"
                               v-on="on">DETALLES</v-btn>
                      </template>
                      <v-card>
                        <v-container>
                          <span><h4>Aceptación Ciudadana</h4></span>
                          <h1>13.41%</h1>
                          <span class="font-weight-light"><h5>Elecciones Presidenciales 2021</h5></span>
                          <h1>11.80%</h1>
                          <span class="font-weight-light"><h5>Elecciones Congresales 2021</h5></span>
                          <h1>11.85%</h1>
                          <v-card-actions>
                            <span class="font-weight-light"><h5>Elecciones Parlamento Andino 2021</h5></span>
                            <v-spacer></v-spacer>
                            <v-btn text color="red">ATRÁS</v-btn>
                          </v-card-actions>
                        </v-container>
                      </v-card>
                    </v-dialog>
                  </v-card-actions>
                  <span class="font-weight-light"><h4>Elecciones Generales y Parlamento Andino 2021 | Primera vuelta</h4></span>
                </v-container>
              </v-card>
            </v-col>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <v-card-title class="font-weight-bold">Últimas publicaciones sobre Keiko Fujimori</v-card-title>
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
            <v-btn>CONTINUAR</v-btn>
            <v-btn text>ATRÁS</v-btn>
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
              Fujimorismo en el Perú
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
            <v-btn text>CONTINUAR</v-btn>
            <v-btn text>ATRÁS</v-btn>
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
            <v-btn text>CONTINUAR</v-btn>
            <v-btn text>ATRÁS</v-btn>
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
              Keiko Fujimori pasó a segunda vuelta
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
            <v-btn text>CONTINUAR</v-btn>
            <v-btn text>ATRÁS</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "InformationPoliticalParties"
}
</script>

<style scoped>

</style>