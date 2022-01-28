<template>
  <div>
    <div class="tw-container header-main tw-h-36 tw-max-w-full tw-py-7">
      <div class="tw-my-16">
        <v-img
          v-if="!$vuetify.breakpoint.mobile"
          class="tw-mx-auto tw-my-16"
          contain
          src="/img/LogoMyFarm.png"
          lazy-src="/img/LogoMyFarm.png"
          :max-width="$vuetify.breakpoint.mobile ? '300px' : '641px'"
          height="392px"
        ></v-img>
        <v-img
          v-if="!$vuetify.breakpoint.mobile"
          class="tw-mx-auto tw-my-16"
          contain
          src="/img/WHITEPAPER.png"
          lazy-src="/img/WHITEPAPER.png"
          :max-width="$vuetify.breakpoint.mobile ? '300px' : '431px'"
          height="98px"
        ></v-img>

        <h3
          class="
            head-text-main
            tw-text-center tw-max-w-xl tw-mx-auto tw-py-2 tw-font-normal text-bold
          "
        >
          Play, relax, earn money Live blockchain-based gaming experience and
          join My Farm's Metaverse
        </h3>
      </div>
    </div>

    <!-- Introduction to My Farm Start  -->
    <div class="IntroductiontoMyFarm tw-container tw-max-w-full tw-py-7">
      <v-row class="tw-py-7">
        <v-col class="d-flex justify-center" cols="10">
          <v-img
            contain
            src="/img/whitePaper/head1.png"
            max-width="835.18px"
            height="60px"
          ></v-img>
        </v-col>
        <v-col class="d-flex justify-center">
          <v-img
            contain
            src="/img/whitePaper/one.png"
            max-width="68px"
            height="57.8px"
          >
          </v-img>
        </v-col>
      </v-row>

      <div class="partners-woodblock d-flex tw-my-16">
        <v-col align="center" cols="10" alin-self="center">
          <v-img
            class="tw-my-10"
            contain
            src="/img/LogoMyFarm.png"
            width="219px"
            height="134px"
          ></v-img>
          <p class="tw-font-medium ma-4">
            is created by a group of professional blockchain and game
            programmers with many years of experience, the office is located in
            singapore.
          </p>
          <p class="tw-font-medium ma-4" align="start">
            A blockchain-based relaxing game inspired by the way of farming in
            the Asian region.
          </p>
          <p class="tw-font-medium ma-4" align="start">
            At My Farm, players will play the role of a farmer who is happy with
            growing, raising, and selling his agricultural products. From there,
            each participant will contribute to the construction of a Metaverse
            whole that incorporates many unique custom farms.
          </p>
        </v-col>
        <v-col class="d-flex">
          <v-img
            contain
            src="/img/whitePaper/GameUi.png"
            max-width="700px"
            height="606px"
            style="position: absolute"
          >
          </v-img>
          <v-img
            contain
            src="/img/tractor.png"
            width="331px"
            height="283px"
            style="top: 36%; left: 141%"
          ></v-img>
        </v-col>
      </div>
    </div>
    <!-- Introduction to My Farm End -->

    <!-- LandScape of Opportunity Start  -->
    <div class="IntroductiontoMyFarm tw-container tw-max-w-full tw-py-7">
      <v-row class="tw-py-7">
        <v-col class="d-flex justify-center" cols="10">
          <v-img
            contain
            src="/img/whitePaper/head2.png"
            max-width="835.18px"
            height="60px"
          ></v-img>
        </v-col>
        <v-col class="d-flex justify-center">
          <v-img
            contain
            src="/img/whitePaper/two.png"
            max-width="68px"
            height="57.8px"
          >
          </v-img>
        </v-col>
      </v-row>

      <v-row class="d-flex tw-py-7">
        <v-col cols="6" align="center">
          <v-img
            contain
            src="/img/whitePaper/board.png"
            width="704px"
            style="position: absolute"
          >
            <div>
              <v-img
                class="ma-4"
                contain
                src="/img/LogoMyFarm.png"
                width="240px"
                height="147px"
                style="position: relative"
              ></v-img>
              <div class="d-flex justify-space-around">
                <div class="">
                  <p class="tw-font-normal white--text cricle1">
                    $180B
                  </p>
                  <p class="yellow--text tw-text-xl">
                    Global Gaming <br/>
                    2021
                  </p>
                  <p class="white--text tw-text-sm">
                    Total Available Market
                  </p>
                </div>
                <div>
                  <p class="tw-font-normal white--text cricle2">$21B</p>
                  <p class="yellow--text tw-text-xl">
                    NFT Market <br/>
                    2021
                  </p>
                  <p class="white--text tw-text-sm">
                    Serviceable Available Market
                  </p>
                </div>
              </div>

              <div class="d-flex justify-space-around">
                <div class="">
                  <p class="tw-text-base white--text cricle3">
                    $100m
                  </p>
                  <p class="yellow--text tw-text-xl">
                    My Farm
                  </p>
                  <p class="white--text tw-text-sm">
                    Share of Available Market
                  </p>
                </div>
              </div>
            </div>
          </v-img>
        </v-col>
        <v-col>
          <ul>
            <li class="tw-my-4">
              The demand for NFTs is continuing to surge and the NFT market is
              showing no signs of slowing down. Year-to-date, within less than
              three months, the combined market cap of 6 majors gaming NFT
              projects has increased by 1,265% to reach a total capitalization
              >5,2 billion USD (Messari - 20th dec 2021).
            </li>
            <li class="">
              Furthermore, Covid-19 has had its impact on the gaming market as
              well, as millions of people experiencing lockdowns around the
              world started playing more games. A survey from March 2020
              revealed that video gamers in the United States spent 45% more
              time playing video games during the quarantine. My Farm believes
              that the Play-to-Earn model is opening a wide new window of
              solutions to ease the hardship brought on by the pandemic.
            </li>
          </ul>
          <v-img
            contain
            src="/img/whitePaper/manRest.png"
            width="413px"
            height="351px"
            style="left: 20%"
          ></v-img>
        </v-col>
      </v-row>
    </div>
    <!-- LandScape of Opportunity End  -->

    <!-- Value Proposition Start  -->
    <div class="IntroductiontoMyFarm tw-container tw-max-w-full tw-py-7">
      <v-row class="tw-py-7">
        <v-col class="d-flex justify-center" cols="10">
          <v-img
            contain
            src="/img/whitePaper/head3.png"
            max-width="835.18px"
            height="60px"
          ></v-img>
        </v-col>
        <v-col class="d-flex justify-center">
          <v-img
            contain
            src="/img/whitePaper/three.png"
            max-width="68px"
            height="57.8px"
          >
          </v-img>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4" align="center">
          <v-img
          src="/img/whitePaper/cardImg.png"
          width="582px"
          contain
          style="position: absolute"
          >
            <div>
              <p>Hello World</p>
            </div>
          </v-img>
        </v-col>
      </v-row>
      <div class="d-flex justify-center">
        <div class="">

        </div>
      </div>
    </div>
    <!-- Value Proposition End  -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      valueProposition: [
        {
          id: 0,
          headerImg: "/img/whitePaper/headerImg.png",
          text: "",
          img: ""
        }
      ]
    }
  }
};
</script>

<style lang="scss" scoped>
.header-main {
  background-image: url("../../static/img/bg-1.png");
  background-size: cover;
  height: 1080px;
  width: 100%;
  // object-fit: cover;
}

// Introductoin to MyFarm CSS Start
.IntroductiontoMyFarm {
  background-image: url("../../static/img/whitePaper/backgroundImg.png");
  background-size: cover;
  height: 1080px;
  width: 100%;
  // object-fit: cover;
}

.partners-woodblock {
  background-image: url("../../static/img/whitePaper/game.png");
  width: 700px;
  height: 715px;
  position: absolute;
  background-size: 100%;
}
// Introductoin to MyFarm CSS End

// LandScape of Opportunity Start
.board {
  background-image: url("../../static/img/whitePaper/board.png");
  width: 100%;
  min-height: 100%;
  max-width: 912px;
  max-height: 725px;
  background-size: 100%;
  background-position: cover;
}

.cricle1 {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: #882900;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cricle2 {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #882900;
  display: flex;
  align-items: center;
  justify-content: center;
}
.cricle3 {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #882900;
  display: flex;
  align-items: center;
  justify-content: center;
}
// LandScape of Opportunity End

// Value Proposition Start
.cardDesign {
  background-image: url("../../static/img/whitePaper/cardImg.png");
  background-size: 100%;
  background-position: cover;
  width: 582px;
  height: 728;
} 
// Value Proposition End


</style>