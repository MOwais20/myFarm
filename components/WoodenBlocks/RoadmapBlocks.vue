<template>
  <v-img
    class="tw-my-7"
    contain
    max-width="378px"
    height="387.98px"
    lazy-src="/mobile/roadBlock.png"
    src="/mobile/roadBlock.png"
  >
    <v-img
      class="mt-13"
      src="/svgs/RoadMapBlockBn.svg"
      lazy-src="/svgs/RoadMapBlockBn.svg"
      max-width="296.75px"
      max-height="124px"
    >
      <v-row class="full-h">
        <v-col align-self="center">
          <h4 class="roadMap-heading">
            Phase {{ index + 1 }}
            <br />
            {{ content && content.subtitle }}
          </h4>
        </v-col>
      </v-row>
    </v-img>

    <div class="d-flex flex-column justify-center pt-5">
      <ul class="roadMap-txt mx-auto text-left">
        <li
          v-for="(list, listIndex) in content.items"
          :key="`${listIndex}-list-${content.id}`"
        >
          {{ list }}
        </li>
      </ul>
    </div>
  </v-img>
</template>

<script>
export default {
  props: ["content", "index"],
  data() {
    return {};
  },
  components: {},
};
</script>

<style lang="scss" scoped>
.roadMap-heading {
  font-family: "SVN-SAF" !important;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 44px;
  /* identical to box height */

  color: #882900;
}

.roadMap-txt {
  li {
    font-family: "iCiel Stabile" !important;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 24px;
    list-style-type: disc;

    max-width: 290px;
    max-height: 72px;

    color: #ffffff;
  }
}
</style>