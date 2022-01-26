<template>
  <div class="mx-5">
    <div class="bg-LargeWoodenBlock mx-auto d-flex align-center justify-center">
      <!-- <WoddenHeadLarge class="tw-mx-auto" /> -->
      <span class="tw-max-w-full">
        <h3
          class="bn-banner-text"
          :class="$vuetify.breakpoint.mobile ? 'tw-text-xl' : 'tw-text-5xl'"
        >
          {{ text }}
        </h3>
      </span>
    </div>
  </div>
</template>

<script>
// SVG
import WoddenHeadLarge from "@/assets/svg/Banner-large.svg";
import GreenVecBg from "@/assets/svg/GreenVecSm.svg";

export default {
  props: ["text"],
  components: {
    WoddenHeadLarge,
    GreenVecBg,
  },
};
</script>

<style lang="scss" >
.bn-banner-text {
  // position: relative;
  text-align: center;
  // bottom: 110px;
  font-family: Mitr;
  font-style: normal;
  font-weight: 600;
  // font-size: 1.125rem;
  line-height: 75px;
  color: #000000;
}

.bg-LargeWoodenBlock {
  background-image: url("../../static/img/LargeWoodenBlock.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 100%;
  max-width: 776px;
  height: 156px;
}
</style>



