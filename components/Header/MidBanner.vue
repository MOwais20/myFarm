<template>
  <div class="mid-banner">
    <!-- <WoddenHeadMid class="tw-mx-auto" />

    <GreenVecBg class="tw-mx-auto comp-2-pos" />

    <span class="tw-max-w-full">
      <h3 class="mid-banner-text">Become a farmer in 3 steps</h3>
    </span> -->

    <v-img
      class="mx-auto"
      :width="$vuetify.breakpoint.mobile ? '320px' : '782px'"
      :height="$vuetify.breakpoint.mobile ? '64px' : '156px'"
      :lazy-src="
        $vuetify.breakpoint.mobile
          ? '/banners/mid_banner_wood.png'
          : '/banners/mid_banner_wood_desk.png'
      "
      :src="
        $vuetify.breakpoint.mobile
          ? '/banners/mid_banner_wood.png'
          : '/banners/mid_banner_wood_desk.png'
      "
    >
      <v-img
        :max-width="$vuetify.breakpoint.mobile ? '270px' : '656px'"
        :height="$vuetify.breakpoint.mobile ? '40px' : '98px'"
        contain
        :lazy-src="
          $vuetify.breakpoint.mobile
            ? '/banners/green-bg.png'
            : '/banners/green_bg_desk.png'
        "
        :src="
          $vuetify.breakpoint.mobile
            ? '/banners/green-bg.png'
            : '/banners/green_bg_desk.png'
        "
        position="center"
        class="mx-auto"
        :class="$vuetify.breakpoint.mobile ? 'mt-4' : 'mt-8'"
      >
        <h3 class="mid-banner-text mt-2"
        :class="$vuetify.breakpoint.mobile ? 'tw-text-lg' : 'ft-40'"
        >{{ text }}</h3>
      </v-img>
    </v-img>
  </div>
</template>

<script>
// SVG
import WoddenHeadMid from "@/assets/svg/Banner-mid.svg";
import GreenVecBg from "@/assets/svg/GreenVecBg.svg";

export default {
  props: ["text"],
  components: {
    WoddenHeadMid,
    GreenVecBg,
  },
};
</script>

<style lang="scss" scoped>
.ft-40 {
  font-size: 40px;
}
</style>

<style lang="scss">
.comp-2-pos {
  position: relative !important;
  bottom: 120px !important;
}



.mid-banner-text {
  // position: relative;
  // bottom: 205px;

  // height: 63px;
  text-align: center;

  font-family: Mitr;
  font-style: normal;
  font-weight: 600;
  /* identical to box height */

  color: #000000;
}
</style>