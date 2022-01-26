<template>
  <div :class="$vuetify.breakpoint.mobile ? 'tw-mx-3' : ''">
    <v-img
      class="tw-mx-auto logo-footer"
      contain
      src="/img/LogoMyFarm.png"
      lazy-src="/img/LogoMyFarm.png"
      :max-width="$vuetify.breakpoint.mobile ? '180px' : '289px'" 
      height="178px"
    ></v-img>
    <LogoBlock class="tw-mx-auto" />
  </div>
</template>

<script>
import LogoBlock from "@/assets/svg/LogoBlock.svg";

export default {
  components: {
    LogoBlock,
  },
};
</script>

<style lang="scss">
.logo-footer {
  position: absolute !important;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  margin-top: 25px;
}
</style>