<template>
  <v-img
    src="/Buttons/button-1.png"
    lazy-src="/Buttons/button-1.png"
    contain
    class="d-flex justify-center align-center ma-2"
    width="290px"
    height="114px"
  >
    <h3 class="text-center btn-text-wd">{{ text }}</h3>
  </v-img>
</template>

<script>
export default {
  props: ["text"],
};
</script>

<style lang="scss">

</style>