<template>
  <div class="custom-font-3">
    <HeaderSmallBanner
      :text="'Tokenomics'"
      class="tw-mx-auto tokenomics-banner"
    />
    <v-img
      src="/svgs/BigWoodenBlock.svg"
      lazy-src="/svgs/BigWoodenBlock.svg"
      max-width="1180px"
      position="center center"
      class="mx-auto d-flex align-center justify-center tw-static"
      contain
    >
      <div
        style="max-width: 1180px"
        class="tw-absolute tw-right-0 tw-top-20 d-flex justify-end mx-auto"
      >
        <MFTLogo class="" />
      </div>
      <div class="text-left mx-auto mt-5 tw-max-w-screen-md block-text">
        <span class="yellow-text">
          <span class="white--text">Total Supply:</span>
          1,000,000,000 MFT</span
        >

        <div class="d-flex flex-row block-text">
          <div class="d-flex flex-column">
            <div class="d-flex flex-column py-2 pr-5">
              <span class="text-left">Public Sale</span>
              <span class="yellow-text">100,000,000 (Lock 2 years)</span>
            </div>

            <div class="d-flex flex-column py-2 pr-5">
              <span class="text-left">Private Sale</span>
              <span class="yellow-text">20,000,000 (Lock 2 years)</span>
            </div>

            <div class="d-flex flex-column py-2 pr-5">
              <span class="text-left">Strategic partnership</span>
              <span class="yellow-text">50,000,000 (Lock 2 years)</span>
            </div>

            <div class="d-flex flex-column py-2 pr-5">
              <span class="text-left">Team & advisors</span>
              <span class="yellow-text">100,000,000 (Lock 5 years)</span>
            </div>
          </div>

          <div class="d-flex flex-column ml-15">
            <div class="d-flex flex-column py-2 pr-5">
              <span class="text-left">Staking reward</span>
              <span class="yellow-text">150,000,000</span>
            </div>

            <div class="d-flex flex-column py-2 pr-5">
              <span class="text-left">Community & Marketing</span>
              <span class="yellow-text">30,000,000</span>
            </div>

            <div class="d-flex flex-column py-2 pr-5">
              <span class="text-left">Play-to-earn reward</span>
              <span class="yellow-text">500,000,000</span>
            </div>

            <div class="d-flex flex-column py-2 pr-5">
              <span class="text-left">Liquidity DEX</span>
              <span class="yellow-text">50,000,000</span>
            </div>
          </div>
        </div>

        <p class="white--text tw-text-2xl tw-leading-6 custom-font-3">
          ** MFT tokens will be burned 50% everytime players use to buy in-game
          items, the remaining 50% will be returned to play to earn
        </p>
      </div>
    </v-img>
  </div>
</template>

<script>
import MFTLogo from "@/assets/svg/MFT-logo-round.svg";

export default {
  components: {
    MFTLogo,
  },
};
</script>

<style lang="scss">
.tokenomics-banner {
  z-index: 2;
  position: relative;
  top: 6.5rem;
}

.banner-position {
  position: relative !important;
  bottom: 1350px;
}

.block-text span {
  font-family: "iCiel Stabile" !important;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 38px;
  color: #ffffff;
}
</style>



<style lang="scss" scoped>
.yellow-text {
  color: #fcbf1d !important;
}
</style>