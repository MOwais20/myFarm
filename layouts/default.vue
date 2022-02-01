<template>
  <v-app>
    <HeaderMobHeader />
    <v-main>
      <v-container fluid class="pa-0">
        <Nuxt />
      </v-container>
    </v-main>

    <!-- <Footer /> -->
  </v-app>
</template>

<script>
export default {
  // middleware: ['global'],
  mounted() {
    if (localStorage) {
      const isAuthenticated = localStorage.getItem("token") ? true : false;
      if (isAuthenticated) {
        // set token in axios api.
        this.$axios.setToken(localStorage.getItem("token"));

        const user = localStorage.getItem("mft_user");
        if (user) this.$store.commit("auth/storeUser", JSON.parse(user));
      }
    }
  },
};
</script>
