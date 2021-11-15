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
    <div align="center" class="mb-2"><h3>Escrito por Charlie Franci | Publicado el 30/05/2021</h3></div>
    <div align="center">
      <v-img src="@/assets/Rectangle 4.png" max-width="1040"></v-img>
    </div>
    <div align="center">
      <v-card width="864" elevation="0">
        <v-container>
          <p  class="text-start text-justify">Nació el 20 de agosto de 1961 en la ciudad de Tumbes. Hijo de Pedro Merino Hidalgo y Elba de Lama Barreto.

            En 1985 se casó con Mary Jacqueline Peña Carruitero, profesora de educación inicial. El matrimonio tiene tres hijas, Elba Jacqueline, Sandra Lisbeth y María Teresa.

            Realizó sus estudios primarios en el colegio Santa María de la Frontera de 1969 a 1973, terminó sus estudios secundarios en el Centro Educativo "Inmaculada Concepción" (1974 -1978), ambos de la ciudad de Tumbes. En 1979 ingresó a la Universidad Nacional de Piura, filial Tumbes en la Facultad de Agronomía y desde entonces empezó a alternar sus estudios con la producción de la tierra.

            En 1979 se inició su relación con el partido político Acción Popular integrando el comando de juventudes de la agrupación, para luego inscribirse oficialmente en militante activo del partido. En el año 2000 presidió el Frente de Unidad Nacional integrado por Partidos y Movimientos Políticos. Es elegido por las bases de Acción Popular para participar en las Elecciones Generales del 8 de abril de 2001 como Candidato al Congreso de la República, cuyos resultados lo ubicaron en el primer lugar. Iniciando así su participación en la política nacional.</p>
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
  name: "Biography",
}
</script>

<style scoped>

</style>