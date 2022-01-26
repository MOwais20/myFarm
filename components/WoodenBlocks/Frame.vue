<template>
  <div>
    <v-img
      class="tw-mx-auto team-img"
      :src="imgURL"
      :lazy-src="imgURL"
      max-width="147px"
      height="147px"
    ></v-img>
    <WoodenFrame />
    <div class="tw-flex tw-flex-col tw-mt-3">
      <span class="fm_team_name tw-uppercase">{{ name }}</span>
      <small class="fm_title tw-uppercase">{{ title }}</small>
    </div>
  </div>
</template>

<script>
import WoodenFrame from "@/assets/svg/Frame.svg";

export default {
  props: ["name", "title", "imgURL"],
  components: {
    WoodenFrame,
  },
};
</script>

<style lang="scss">
.team-img {
  position: relative !important;
  top: 190px;
  left: 5px;
}

.fm_team_name {
  font-family: Mitr;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 38px;
  /* identical to box height */

  color: #ffffff;
}

.fm_title {
  text-align: center;
  font-family: Mitr;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 25px;
  color: #ffffff;
}
</style>