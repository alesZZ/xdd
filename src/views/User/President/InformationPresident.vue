<template>
  <v-card
      class="mx-auto"
      elevation="0"
  >
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-card-title class="font-weight-bold"><h1>Manuel Arturo Merino de Lama</h1></v-card-title>
      <v-spacer></v-spacer>
    </v-card-actions>
    <v-card max-width="1370" class="mx-auto my-2" elevation="0">
      <v-container  class="d-flex justify-space-around">
        <v-row no-gutters>
          <v-col cols="3">
            <v-card
                class="mx-12"
                max-width="248"
            >
              <v-img
                  src="@/assets/Image (15).png"
                  max-width="248"
              >
              </v-img>
              <v-card-text class="text--primary">
                <div class="font-weight-bold">Fecha de nacimiento</div>
                <div>20 de agosto de 1961</div>
                <div class="font-weight-bold">Lugar de nacimiento</div>
                <div>Tumbes, Perú</div>
                <div class="font-weight-bold">Profesión</div>
                <div>Agrónomo y político peruano</div>
                <div class="font-weight-bold">Partido político</div>
                <div>Acción Popular</div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="8">
            <v-container  class="d-flex justify-space-around mb-1">
              <v-card
                  class="mx-auto"
                  max-width="248"
                  max-height="238"
              >
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-card-title>Biografía</v-card-title>
                  <v-spacer></v-spacer>
                </v-card-actions>
                <v-card-text>Eventos principales acerca de la vida de el/la candidadato/a de interés publico.</v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn text color="red" to="/biography">VER</v-btn>
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
              <v-card
                  max-height="238"
                  max-width="336">
                <v-container>
                  <v-card-actions>
                    <v-container>
                      <div><h4>Inversión</h4></div>
                      <div>Información estadística</div>
                    </v-container>
                    <v-spacer></v-spacer>
                    <v-btn text color="red" to="/investment">VER</v-btn>
                  </v-card-actions>
                  <v-card-actions>
                    <v-img src="@/assets/image 1.png" width="288" height="120">
                    </v-img>
                  </v-card-actions>
                </v-container>
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
                  <v-btn text color="red" to="/legal">VER</v-btn>
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-container>
            <v-container  class="d-flex mb-1">
              <v-card
                  class="mx-2"
                  width="420"
                  max-height="238"
              >
                <v-container>
                  <span><h4>Victoria Electoral</h4></span>
                  <span><h1>-</h1></span>
                  <span class="font-weight-light"><h4>Sucesión constitucional</h4></span>
                </v-container>
              </v-card>
              <v-card
                  class="mx-2"
                  width="420"
                  max-height="238"
              >
                <v-container>
                  <span><h4>Aceptación Ciudadana</h4></span>
                  <span><h1>-</h1></span>
                  <span class="font-weight-light"><h4>Gestión presidencial</h4></span>
                </v-container>
              </v-card>
            </v-container>
            <v-container  class="d-flex mb-1">
              <v-card
                  class="mx-2"
                  width="855"
                  max-height="220"
              >
                <v-container>
                  <h3>Corruptímetro</h3>
                  <v-progress-linear
                                      color=#607D8B
                                      height="25"
                                      value="20"
                                      class="rounded-pill"
                  > <template v-slot:default="{ value }">
                    <strong>{{(value) }}%</strong>
                  </template></v-progress-linear>
                </v-container>
              </v-card>
            </v-container>
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
  name: "InformationPresident",
}
</script>

<style scoped>

</style>