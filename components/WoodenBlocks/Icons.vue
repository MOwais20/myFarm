<template>
  <div class="tw-px-5" :class="$vuetify.breakpoint.mobile ? 'tw-py-0' : 'tw-py-10'">
    <IconBlock />

    <!-- Icon img -->
    <v-img
      class="tw-mx-auto ft-icons"
      :src="imgURL"
      :lazy-src="imgURL"
      max-width="40px"
      height="40px"
    ></v-img>
  </div>
</template>

<script>
import IconBlock from "@/assets/svg/iconBlock.svg";

export default {
  props: ["imgURL"],
  components: {
    IconBlock,
  },
};
</script>

<style lang="scss">
.ft-icons {
  position: relative !important;
  bottom: 58px;
}
</style>