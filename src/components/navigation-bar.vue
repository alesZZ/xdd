<template>
  <v-app>
    <v-app-bar
        app
        color=#2B3141
        dark
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <div class="d-flex align-center">
        <v-toolbar-title><h3>PiensaPeru</h3></v-toolbar-title>
      </div>

      <v-spacer></v-spacer>

      <v-btn
          target="_blank"
          text
      >
        <span class="mr-2">Register</span>
      </v-btn>
      <v-btn
          target="_blank"
          text
      >
        <span class="mr-2">Log In</span>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
    >
      <v-card-title><h2>Piensa Peru</h2></v-card-title>
      <v-divider></v-divider>
      <v-list
          nav
          dense
      >

        <v-list-item

            v-for="item in items"
            :key="item.title"
            :to = "item.to"
            link
        >
          <v-list-item-icon >
            <v-icon color="black">{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <v-row justify="space-around" class="mb-2">
          <div align="center">
            <v-icon large color="black">mdi-facebook</v-icon>
            <v-icon large color="black">mdi-twitter</v-icon>
            <v-icon large color="black">mdi-whatsapp</v-icon>
          </div>
        </v-row>
        <v-divider></v-divider>
        <div class="pa-2">
          <v-card-title>2021 - Piensa Perú</v-card-title>
        </div>
      </template>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
export default {
  name: "navigation-bar",
  data: () => ({
    drawer: false,
    items: [
      { title: 'Home', icon: 'mdi-view-dashboard', to: '/dashboard' },
      { title: 'Projects', icon: 'mdi-briefcase-search', to: '/projects' },
      { title: 'Settings', icon: 'mdi-cog-outline', to: '/Setting' },
      { title: 'Log out', icon: 'mdi-logout-variant', to: '/' },
    ],
  }),
}
</script>

<style scoped>

</style>