<template>
  <div :class="$vuetify.breakpoint.mobile ? 'tw-mx-3' : ''">
    <v-img
      src="/banners/Banner-small.svg"
      lazy-src="/banners/Banner-small.svg"
      max-width="466px"
      class="mx-auto d-flex align-center justify-center"
      contain
    >
      <v-img
        src="/banners/GreenVecSm.svg"
        lazy-src="/banners/GreenVecSm.svg"
        max-width="338px"
        class="mx-auto d-flex align-center"
        contain
      >
        <span class="tw-max-w-full">
          <h3 class="banner-text">{{ text }}</h3>
        </span>
      </v-img>
    </v-img>
  </div>
</template>

<script>
export default {
  props: ["text"],
};
</script>

<style lang="scss">
.banner-text {
  text-align: center;
  font-family: Mitr;
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 75px;
  color: #000000;
}
</style>