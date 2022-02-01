<template>
  <v-img
    class="tw-mx-auto ft-icons pointer d-flex align-center mx-2"
    src="/svgs/iconBlock.svg"
    lazy-src="/svgs/iconBlock.svg"
    contain
    :width="$vuetify.breakpoint.mobile ? '50px' : '86px'"
    height="78px"
  >
    <!-- Icon img -->
    <v-img
      class="tw-mx-auto"
      :src="imgURL"
      :lazy-src="imgURL"
      :width="$vuetify.breakpoint.mobile ? '23px' : '40px'"
      contain
      height="40px"
    ></v-img>
  </v-img>
</template>

<script>
export default {
  props: ["imgURL"],
};
</script>
