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
    <v-img src="@/assets/fondo.jpg">
      <v-window v-model="step">
        <v-window-item :value="1">
          <v-card class="mx-auto my-2"
                  max-width="410"
                  elevation="1">
            <v-card-title></v-card-title>
            <v-container>
              <v-progress-linear  color=#607D8B class="rounded-pill" height="30" value="20"></v-progress-linear>
              <v-card-title><p align="left" class="font-weight-bold text-h6 black--text">Pregunta <span v-text="step"></span> de 5</p></v-card-title>
              <v-card-subtitle><p align="left" class="font-weight-bold text-h6 black--text">¿Dónde nació Manuel Merino?</p></v-card-subtitle>
              <v-card-actions class="d-flex justify-center mb-2">
                <v-btn
                    block
                    outlined
                    elevation="1"
                    height="50"
                    class="d-flex justify-center"
                    :disabled="step === 5"
                    depressed
                    @click="step++"
                >LA LIBERTAD, PERÚ</v-btn>
              </v-card-actions>
              <v-card-actions class="d-flex justify-center mb-2">
                <v-btn
                    block
                    outlined
                    elevation="1"
                    height="50"
                    class="d-flex justify-center"
                    :disabled="step === 5"
                    depressed
                    @click="step++"
                >TUMBES, PERÚ</v-btn>
              </v-card-actions>
              <v-card-actions class="d-flex justify-center mb-2">
                <v-btn
                    block
                    outlined
                    elevation="1"
                    height="50"
                    class="d-flex justify-center"
                    :disabled="step === 5"
                    depressed
                    @click="step++"
                >LIMA, PERÚ</v-btn>
              </v-card-actions>
            </v-container>
          </v-card>
        </v-window-item>

        <v-window-item :value="2">
          <v-card class="mx-auto my-2"
                  max-width="410"
                  elevation="1">
            <v-card-title></v-card-title>
            <v-container>
              <v-progress-linear  color=#607D8B class="rounded-pill" height="30" value="40"></v-progress-linear>
              <v-card-title><p align="left" class="font-weight-bold text-h6 black--text">Pregunta <span v-text="step"></span> de 5</p></v-card-title>
              <v-card-subtitle><p align="left" class="font-weight-bold text-h6 black--text">¿Dónde realizó sus estudios primarios?</p></v-card-subtitle>
              <v-card-actions class="d-flex justify-center mb-2">
                <v-btn
                    block
                    outlined
                    elevation="1"
                    height="50"
                    class="d-flex justify-center"
                    :disabled="step === 5"
                    depressed
                    @click="step++"
                >COLEGIO SANTA MARÍA DE LA FRONTERA</v-btn>
              </v-card-actions>
              <v-card-actions class="d-flex justify-center mb-2">
                <v-btn
                    block
                    outlined
                    elevation="1"
                    height="50"
                    class="d-flex justify-center"
                    :disabled="step === 5"
                    depressed
                    @click="step++"
                >COLEGIO SANTA ROSA DE LA FRONTERA</v-btn>
              </v-card-actions>
              <v-card-actions class="d-flex justify-center mb-2">
                <v-btn
                    block
                    outlined
                    elevation="1"
                    height="50"
                    class="d-flex justify-center"
                    :disabled="step === 5"
                    depressed
                    @click="step++"
                >COLEGIO SANTA MAGDALENA DE LA FRONTERA</v-btn>
              </v-card-actions>
            </v-container>
          </v-card>
        </v-window-item>

        <v-window-item :value="3">
          <v-card class="mx-auto my-2"
                  max-width="410"
                  elevation="1">
            <v-card-title></v-card-title>
            <v-container>
              <v-progress-linear  color=#607D8B class="rounded-pill" height="30" value="60"></v-progress-linear>
              <v-card-title><p align="left" class="font-weight-bold text-h6 black--text">Pregunta <span v-text="step"></span> de 5</p></v-card-title>
              <v-card-subtitle><p align="left" class="font-weight-bold text-h6 black--text">¿En qué universidad estudió?</p></v-card-subtitle>
              <v-card-actions class="d-flex justify-center mb-2">
                <v-btn
                    block
                    outlined
                    elevation="1"
                    height="50"
                    class="d-flex justify-center"
                    :disabled="step === 5"
                    depressed
                    @click="step++"
                >UNIVERSIDAD NACIONAL DE PIURA</v-btn>
              </v-card-actions>
              <v-card-actions class="d-flex justify-center mb-2">
                <v-btn
                    block
                    outlined
                    elevation="1"
                    height="50"
                    class="d-flex justify-center"
                    :disabled="step === 5"
                    depressed
                    @click="step++"
                >UNIVERSIDAD NACIONAL DE INGENIERÍA</v-btn>
              </v-card-actions>
              <v-card-actions class="d-flex justify-center mb-2">
                <v-btn
                    block
                    outlined
                    elevation="1"
                    height="50"
                    class="d-flex justify-center"
                    :disabled="step === 5"
                    depressed
                    @click="step++"
                >UNIVERSIDAD NACIONAL DE TUMBES</v-btn>
              </v-card-actions>
            </v-container>
          </v-card>
        </v-window-item>

        <v-window-item :value="4">
          <v-card class="mx-auto my-2"
                  max-width="410"
                  elevation="1">
            <v-card-title></v-card-title>
            <v-container>
              <v-progress-linear  color=#607D8B class="rounded-pill" height="30" value="80"></v-progress-linear>
              <v-card-title><p align="left" class="font-weight-bold text-h6 black--text">Pregunta <span v-text="step"></span> de 5</p></v-card-title>
              <v-card-subtitle><p align="left" class="font-weight-bold text-h6 black--text">¿De qué partido político es militante?</p></v-card-subtitle>
              <v-card-actions class="d-flex justify-center mb-2">
                <v-btn
                    block
                    outlined
                    elevation="1"
                    height="50"
                    class="d-flex justify-center"
                    :disabled="step === 5"
                    depressed
                    @click="step++"
                >RENOVACIÓN POPULAR</v-btn>
              </v-card-actions>
              <v-card-actions class="d-flex justify-center mb-2">
                <v-btn
                    block
                    outlined
                    elevation="1"
                    height="50"
                    class="d-flex justify-center"
                    :disabled="step === 5"
                    depressed
                    @click="step++"
                >FUERZA POPULAR</v-btn>
              </v-card-actions>
              <v-card-actions class="d-flex justify-center mb-2">
                <v-btn
                    block
                    outlined
                    elevation="1"
                    height="50"
                    class="d-flex justify-center"
                    :disabled="step === 5"
                    depressed
                    @click="step++"
                >ACCIÓN POPULAR</v-btn>
              </v-card-actions>
            </v-container>
          </v-card>
        </v-window-item>

        <v-window-item :value="5">
          <v-card class="mx-auto my-2"
                  max-width="410"
                  elevation="1">
            <v-card-title></v-card-title>
            <v-container>
              <v-progress-linear  color=#607D8B class="rounded-pill" height="30" value="100"></v-progress-linear>
              <v-card-title><p align="left" class="font-weight-bold text-h6 black--text">Pregunta <span v-text="step"></span> de 5</p></v-card-title>
              <v-card-subtitle><p align="left" class="font-weight-bold text-h6 black--text">¿Cuándo fue su primera participación el política?</p></v-card-subtitle>
              <v-card-actions class="d-flex justify-center mb-2">
                <v-btn
                    block
                    outlined
                    elevation="1"
                    height="50"
                    class="d-flex justify-center"
                    to="/final"
                >ELECCIONES GENERALES DEL 2001</v-btn>
              </v-card-actions>
              <v-card-actions class="d-flex justify-center mb-2">
                <v-btn
                    block
                    outlined
                    elevation="1"
                    height="50"
                    class="d-flex justify-center"
                    to="/final"
                >ELECCIONES GENERALES DEL 2006</v-btn>
              </v-card-actions>
              <v-card-actions class="d-flex justify-center mb-2">
                <v-btn
                    block
                    outlined
                    elevation="1"
                    height="50"
                    class="d-flex justify-center"
                    to="/final"
                >ELECCIONES GENERALES DEL 2011</v-btn>
              </v-card-actions>
            </v-container>
          </v-card>
        </v-window-item>
      </v-window>
    </v-img>
  </v-card>
</template>

<script>
export default {
  name: "Questions",
  data: () => ({
    step: 1,
  }),
}
</script>

<style scoped>

</style>