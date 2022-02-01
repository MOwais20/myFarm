<template>
  <div class="stand-block">
    <!-- <StandBlock /> -->

    <SmallRope class="rope-top-left" />
    <SmallRope class="rope-top-right" />

    <div class="tw-z-10 tw-relative">
      <div>
        <v-img
          class="tw-mx-auto team-img"
          src="/svgs/StandBlock.svg"
          lazy-src
          contain
          max-width="449px"
          max-height="103px"
        >
        </v-img>

        <div
          class="
            tw-flex tw-flex-row tw-justify-center tw-max-w-md tw-mx-auto
            stand-content
          "
        >
          <v-img
            max-width="115.97px"
            max-height="75.22px"
            src="/svgs/Stand_mat_1.svg"
            class="tw-shrink-0 tw-px-2"
          >
            <h1 class="stand-num text-center">1</h1>
          </v-img>

          <h3 class="stand-text tw-shrink-0 tw-self-center tw-px-2">
            Connect your wallet
          </h3>
        </div>
      </div>

      <div class="stand-pos-2">
        <v-img
          class="tw-mx-auto team-img"
          src="/svgs/StandBlock.svg"
          lazy-src
          contain
          max-width="449px"
          max-height="103px"
        >
        </v-img>

        <div
          class="
            tw-flex tw-flex-row tw-justify-center tw-max-w-md tw-mx-auto
            stand-content-2
          "
        >
          <v-img
            max-width="115.97px"
            max-height="75.22px"
            src="/svgs/Stand_mat_1.svg"
            class="tw-shrink-0 tw-px-2"
          >
            <h1 class="stand-num text-center">2</h1>
          </v-img>

          <h3 class="stand-text tw-shrink-0 tw-self-center tw-px-2">
            Complete profile
          </h3>
        </div>
      </div>

      <div class="stand-pos-3">
        <v-img
          class="tw-mx-auto team-img"
          src="/svgs/StandBlock.svg"
          lazy-src
          contain
          max-width="449px"
          max-height="103px"
        >
        </v-img>

        <div
          class="
            tw-flex tw-flex-row tw-justify-center tw-max-w-md tw-mx-auto
            stand-content-3
          "
        >
          <v-img
            max-width="115.97px"
            max-height="75.22px"
            src="/svgs/Stand_mat_1.svg"
            class="tw-shrink-0 tw-px-2"
          >
            <h1 class="stand-num text-center">3</h1>
          </v-img>

          <h3 class="stand-text tw-shrink-0 tw-self-center tw-px-2">
            Get the tree for free <br />
            and start playing
          </h3>
        </div>

        <div>
          <v-img
            class="tw-mx-auto team-img"
            src="/svgs/StandBlock.svg"
            lazy-src
            contain
            max-width="449px"
            max-height="103px"
          >
          </v-img>

          <h3
            class="tw-flex tw-flex-row tw-justify-center stand-mainHead pointer tw-px-2"
          >
            Let's build your farm
            <PlayButton class="tw-mx-2 hover-shd" />
          </h3>
        </div>
      </div>
    </div>

    <Rope class="rope-left" />
    <Rope class="rope-right" />
  </div>
</template>

<script>
import PlayButton from "@/assets/svg/playButton.svg";
import Rope from "@/assets/svg/rope.svg";
import SmallRope from "@/assets/svg/smallRope.svg";

export default {
  components: {
    Rope,
    SmallRope,
    PlayButton,
  },
};
</script>

<style lang="scss">
.rope-top-left {
  position: relative;
  left: 199px;
  top: 433px;
  z-index: 0;
}

.rope-top-right {
  position: relative;
  left: 516px;
  top: 329px;
  z-index: 0;
}

.rope-left {
  position: relative;
  left: 193px;
  bottom: 287px;
  z-index: 0;
}

.rope-right {
  position: relative;
  left: 511px;
  bottom: 520px;
  z-index: 0;
}

.stand-block {
  position: relative;
  bottom: 378px;
}

.stand-mainHead {
  font-family: Mitr;
  position: relative;
  top: 112px;
  font-weight: 500;
  font-size: 32px;
  line-height: 50px;
  text-align: left;
  color: #ffffff;
  text-shadow: -2px -2px 0 #b5483a, 2px -2px 0 #b5483a, -2px 2px 0 #b5483a,
    2px 2px 0 #b5483a;
}

.stand-content {
  position: relative !important;
  right: 16px;
  top: 114px;
}

.stand-content-2 {
  position: relative !important;
  right: 46px;
  top: 114px;
}

.stand-content-3 {
  position: relative !important;
  right: 16px;
  top: 114px;
}

.stand-pos-2 {
  position: relative !important;

  top: -46px;
}

.stand-pos-3 {
  position: relative !important;
  top: -93px;
}

.stand-num {
  font-family: Mitr;
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 63px;
  /* identical to box height */
  position: relative;
  // right: 5px;
  color: #ffffff;
  text-shadow: -2px -2px 0 #b5483a, 2px -2px 0 #b5483a, -2px 2px 0 #b5483a,
    2px 2px 0 #b5483a;
}

.stand-text {
  font-family: Mitr;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  //   line-height: 38px;
  /* identical to box height */
  //   max-width: 254px;
  color: #ffffff;
}
</style>