<template>
  <div :class="$vuetify.breakpoint.mobile ? 'tw-mx-3' : ''">
    <WoddenHeadMid class="tw-mx-auto" />

    <GreenVecBg class="tw-mx-auto comp-2-pos" />

    <span class="tw-max-w-full">
      <h3 class="banner-text">{{ text }}</h3>
    </span>
  </div>
</template>

<script>
// SVG
import WoddenHeadMid from "@/assets/svg/Banner-small.svg";
import GreenVecBg from "@/assets/svg/GreenVecSm.svg";

export default {
  props: ["text"],
  components: {
    WoddenHeadMid,
    GreenVecBg,
  },
};
</script>

<style lang="scss" >
.comp-2-pos {
  position: relative !important;
  bottom: 120px !important;
}

.banner-text {
  position: relative;

  text-align: center;

  bottom: 210px;

  font-family: Mitr;
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 75px;

  color: #000000;
}
</style>