<template>
  <div>
    <v-navigation-drawer
      v-if="$vuetify.breakpoint.mobile"
      v-model="drawer"
      color="#cc7c0a"
      fixed
      app
    >
      <v-list color="#cc7c0a">
        <v-list-item v-for="(item, i) in items" :key="i" router exact>
          <v-list-item-content>
            <v-list-item-title class="white--text custom-font" v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      v-if="$vuetify.breakpoint.mobile"
      color="transparent"
      :clipped-left="clipped"
      class="elevation-0"
      hide-on-scroll
      fixed
      height="90px"
    >
      <!-- Will only render on mobile -->
      <v-app-bar-nav-icon color="#cc7c0a"
        @click.stop="drawer = !drawer"
      />

      <MetamaskConnect class="ma-0" />

    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      items: [
        {
          name: "Marketplace",
          to: "/marketplace",
        },
        {
          name: "Whitepaper",
          to: "/whitepaper",
        },
        {
          name: "Dashboard",
          to: "/dashboard",
        },
      ],
    };
  },
};
</script>

<style>
</style>