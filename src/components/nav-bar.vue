<template>
  <v-app>
    <v-app-bar
        app
        color=#0D47A1
        dark
    >
      <div class="d-flex align-center">
        <v-toolbar-title>PiensaPeru</v-toolbar-title>
      </div>

      <v-spacer></v-spacer>

      <v-btn
          target="_blank"
          text
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
      <v-btn
          target="_blank"
          text
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "nav-bar",
  data: () => ({
    //
  }),

}
</script>

<style scoped>

</style>