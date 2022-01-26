<template>
  <div class="tw-relative custom-font-3">
    <MFTLogo class="logo-position" />

    <BigWoodenBlock class="tw-mx-auto"> </BigWoodenBlock>

    <div class="block-matter text-left mx-auto tw-max-w-screen-md block-text">
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

    <HeaderSmallBanner
      :text="'Tokenomics'"
      class="tw-mx-auto banner-position"
    />
  </div>
</template>

<script>
import BigWoodenBlock from "@/assets/svg/BigWoodenBlock.svg";
import MFTLogo from "@/assets/svg/MFT-logo-round.svg";

export default {
  components: {
    BigWoodenBlock,
    MFTLogo,
  },
};
</script>

<style lang="scss">
.block-matter {
  z-index: 2;
  position: relative;
  //   top: 45px;
  bottom: 600px;
  left: 0px;
  right: 0px;
}

.logo-position {
  position: absolute !important;
  top: 90px;
  left: 55px;
  margin-left: 70%;
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
  /* identical to box height */

  color: #ffffff;
}
</style>



<style lang="scss" scoped>
.yellow-text {
  color: #fcbf1d !important;
}
</style>