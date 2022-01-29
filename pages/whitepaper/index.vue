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
            tw-text-center tw-max-w-xl tw-mx-auto tw-py-2 tw-font-normal
            text-bold
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
          <PageNo data="1" />
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
          <div class="d-flex">
            <PlayButton class="tw-mx-2 hover-shd" style="width: 24px" />
            <p class="tw-font-medium ma-3" align="start">
              A blockchain-based relaxing game inspired by the way of farming in
              the Asian region.
            </p>
          </div>
          <div class="d-flex">
            <PlayButton class="tw-mx-2 hover-shd" style="width: 15%" />
            <p class="tw-font-medium ma-4" align="start">
              At My Farm, players will play the role of a farmer who is happy
              with growing, raising, and selling his agricultural products. From
              there, each participant will contribute to the construction of a
              Metaverse whole that incorporates many unique custom farms.
            </p>
          </div>
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
          <PageNo data="2" />
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
                  <p class="tw-font-normal white--text cricle1">$180B</p>
                  <p class="yellow--text tw-text-xl">
                    Global Gaming <br />
                    2021
                  </p>
                  <p class="white--text tw-text-sm">Total Available Market</p>
                </div>
                <div>
                  <p class="tw-font-normal white--text cricle2">$21B</p>
                  <p class="yellow--text tw-text-xl">
                    NFT Market <br />
                    2021
                  </p>
                  <p class="white--text tw-text-sm">
                    Serviceable Available Market
                  </p>
                </div>
              </div>

              <div class="d-flex justify-space-around">
                <div class="">
                  <p class="tw-text-base white--text cricle3">$100m</p>
                  <p class="yellow--text tw-text-xl">My Farm</p>
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
          <PageNo data="3" />
        </v-col>
      </v-row>

      <div class="d-flex flex-row tw-py-10">
        <div
          class="tw-py-10"
          v-for="valueProposition in valueProposition"
          :key="valueProposition.id"
        >
          <v-img
            src="/img/whitePaper/cardImg.png"
            max-width="452px"
            max-height="829px"
            contain
          >
            <div class="d-flex justify-center ma-8">
              <v-img
                class="text-center"
                width="300px"
                height="120px"
                contain
                src="/img/whitePaper/headerImg.png"
              >
                <p
                  class="
                    tw-text-2xl
                    white--text
                    tw-font-normal
                    d-flex
                    justify-center
                    ma-9
                  "
                >
                  {{ valueProposition.header }}
                </p>
              </v-img>
            </div>
            <div class="ma-6">
              <p>{{ valueProposition.text1 }}</p>
              <p>{{ valueProposition.text2 }}</p>
            </div>
            <div class="d-flex justify-center">
              <v-img
                :src="valueProposition.img"
                :width="valueProposition.width"
                :height="valueProposition.height"
                contain
              ></v-img>
            </div>
          </v-img>
        </div>
      </div>
    </div>
    <!-- Value Proposition End  -->

    <!-- Envision My Farm Start  -->
    <div class="IntroductiontoMyFarm tw-container tw-max-w-full tw-py-7">
      <v-row class="tw-py-7">
        <v-col class="d-flex justify-center" cols="10">
          <v-img
            contain
            src="/img/whitePaper/head4.png"
            max-width="835.18px"
            height="60px"
          ></v-img>
        </v-col>
        <v-col class="d-flex justify-center">
          <PageNo data="4" />
        </v-col>
      </v-row>
      <div class="d-flex flex-row tw-my-7">
        <div class="col-6">
          <div class="d-flex">
            <PlayButton class="tw-mx-2 hover-shd" />
            <p class="tw-text-xl d-flex ma-2">
              In the near term, we encourage players to enjoy the open world of
              My Farm’s fresh sight and sound whether by themselves or with
              family and friends.
            </p>
          </div>
        </div>
        <div class="col-6">
          <div class="d-flex">
            <PlayButton class="tw-mx-2 hover-shd" />
            <p class="tw-text-xl d-flex ma-2">
              The game is currently under development and we intend to involve
              the community even before the game launches (targeted Q1 2022) as
              we aim to be a community-governed game.
            </p>
          </div>
        </div>
      </div>
      <div class="d-flex align-stretch tw-my-60">
        <v-img
          contain
          src="/img/whitePaper/gameLargepic.png"
          max-width="1202px"
          max-height="946px"
          style="position: absolute; left: 42px"
        >
        </v-img>
        <v-img
          src="/img/whitePaper/hen.png"
          max-width="294px"
          max-height="478px"
          contain
          style="left: 1057px; top: 169px"
        ></v-img>
      </div>
    </div>
    <!-- Envision My Farm End -->

    <!-- Mini Game Start  -->
    <div class="IntroductiontoMyFarm tw-container tw-max-w-full tw-py-7">
      <v-row class="tw-py-7">
        <v-col class="d-flex justify-center" cols="10">
          <v-img
            contain
            src="/img/whitePaper/head5.png"
            max-width="835.18px"
            height="60px"
          ></v-img>
        </v-col>
        <v-col class="d-flex justify-center">
          <PageNo data="5" />
        </v-col>
      </v-row>
      <div class="d-flex flex-row tw-my-7">
        <div class="col-6">
          <div class="d-flex">
            <PlayButton class="tw-mx-2 hover-shd" />
            <p class="tw-text-xl d-flex ma-2">
              In order to enhance entertainment, as well as increase income for
              player more effectively and easily. My Farm will provide minigames
              that are mainly built on the interaction between player inside the
              game. The mini game will be closely related to the player system
              to help everyone increase their income. You will have a chance to
              get a lot of things and the winning rate is 100%
            </p>
          </div>
          <v-img
            src="/img/whitePaper/cow.png"
            contain
            max-width="397px"
            max-height="502px"
            class="ma-6"
          ></v-img>
        </div>
      </div>
    </div>
    <!-- Mini Game End -->

    <!-- Play - Relax - Earn Start  -->
    <div class="IntroductiontoMyFarm tw-container tw-max-w-full tw-py-7">
      <v-row class="tw-py-7">
        <v-col class="d-flex justify-center" cols="10">
          <v-img
            contain
            src="/img/whitePaper/head6.png"
            max-width="835.18px"
            height="60px"
          ></v-img>
        </v-col>
        <v-col class="d-flex justify-center">
          <PageNo data="6" />
        </v-col>
      </v-row>
      <div class="d-flex flex-row tw-my-7">
        <div class="col-6">
          <div class="d-flex">
            <PlayButton class="tw-mx-2 hover-shd" style="width: 24px" />
            <p class="tw-text-xl ma-3">
              At My Farm, we aim to balance the two main pillars:
            </p>
          </div>
          <li class="ml-16">
            Immersing players into a relax and zentitude playing environment
          </li>
          <li class="ml-16">Providing a revenue stream for every player</li>
        </div>
      </div>
      <div class="d-flex flex-row">
        <div class="col-4">
          <p
            class="d-flex justify-center tw-font-normal white--text"
            style="font-size: 40px; font-family: SVN-SAF !important"
          >
            Relax
          </p>
          <v-img
            src="/img/whitePaper/relaxImg.png"
            max-width="400px"
            max-height="442px"
            contain
            class="d-flex justify-center"
          ></v-img>
        </div>
        <div class="col-4">
          <p
            class="d-flex justify-center tw-font-normal white--text"
            style="font-size: 40px; font-family: SVN-SAF !important"
          >
            Earn
          </p>
          <v-img
            src="/img/whitePaper/earnImg.png"
            max-width="400px"
            max-height="442px"
            contain
            class="d-flex justify-center"
          ></v-img>
        </div>
        <div class="col-4 ma-6">
          <v-img
            src="/img/whitePaper/henWithBox.png"
            max-width="600px"
            max-height="748px"
            contain
            class="d-flex justify-center"
          ></v-img>
        </div>
      </div>
    </div>
    <!-- Play - Relax - Earn End  -->

    <!-- Marketplace breeding center Start  -->
    <div class="IntroductiontoMyFarm tw-container tw-max-w-full tw-py-7">
      <v-row class="tw-py-7">
        <v-col class="d-flex justify-center" cols="10">
          <v-img
            contain
            src="/img/whitePaper/head7.png"
            max-width="1000px"
            height="100px"
          ></v-img>
        </v-col>
        <v-col class="d-flex justify-center">
          <PageNo data="7" />
        </v-col>
      </v-row>
      <div class="d-flex flex-row container ma-16">
        <div class="col-6">
          <v-img
            src="/img/whitePaper/treeAddvertise.png"
            max-width="740px"
            max-height="655px"
            contain
          ></v-img>
        </div>
        <div class="col-6">
          <div
          class="d-flex"
          v-for="textList in textList"
          :key="textList.id"
          >
            <PlayButton class="tw-mx-2" style="width: 24px" />
            <p class="tw-font-medium ma-4" align="start">
              {{ textList.text }}
            </p>
          </div>
          <div class="d-flex justify-center">
            <v-img
          src="/img/whitePaper/fruitBasket.png"
          max-width="271px"
          max-height="222px"
          contain
          ></v-img>
          </div>
        </div>
      </div>
    </div>
    <!-- Marketplace breeding center End -->

    <!-- Roadmap Start  -->
    <div class="IntroductiontoMyFarm tw-container tw-max-w-full tw-py-7">
      <v-row class="tw-py-7">
        <v-col class="d-flex justify-center" cols="10">
          <v-img
            contain
            src="/img/Roadmap.png"
            max-width="1000px"
            height="100px"
          ></v-img>
        </v-col>
        <v-col class="d-flex justify-center">
          <PageNo data="8" />
        </v-col>
      </v-row>
      <v-container>
        <v-row
          class="tw-mx-auto tw-justify-center"
          align-self="center"
          no-gutters
        >
          <v-col
            class="max-wd"
            align="center"
            cols="4"
            sm="6"
            md="6"
            lg="4"
            xl="4"
            v-for="(blocks, index) in roadmapBlocks"
            :key="`${index}-rb`"
          >
            <WoodenBlocksRoadmapBlocks :content="blocks" :index="index" />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- Roadmap End  -->

    <!-- Earning With my Farm Start -->
    <div class="IntroductiontoMyFarm tw-container tw-max-w-full tw-py-7">
      <v-row class="tw-py-7">
        <v-col class="d-flex justify-center" cols="10">
          <v-img
            contain
            src="/img/whitePaper/head9.png"
            max-width="894px"
            height="70px"
          ></v-img>
        </v-col>
        <v-col class="d-flex justify-center">
          <PageNo data="9" />
        </v-col>
      </v-row>
    </div>
    <!-- Earning With my Farm End -->

    <!-- MFT Token Allocation Start -->
    <div class="IntroductiontoMyFarm tw-container tw-max-w-full tw-py-7">
      <v-row class="tw-py-7">
        <v-col class="d-flex justify-center" cols="10">
          <v-img
            contain
            src="/img/whitePaper/head10.png"
            max-width="863px"
            height="64px"
          ></v-img>
        </v-col>
        <v-col class="d-flex justify-center">
          <PageNo data="10" />
        </v-col>
      </v-row>
      <div class="d-flex flex-row">
        <div class="col-12">
          <div class="paper"></div>
        </div>
      </div>
    </div>
    <!-- MFT Token Allocation End -->
  </div>
</template>

<script>
import PlayButton from "@/assets/svg/playButton.svg";
import RoadmapBlocks from "@/assets/svg/Roadmap-blocks.svg";
import PageNo from "../../components/PageNo"
import MFTLogo from "@/assets/svg/MFT-logo-round.svg";

export default {
  components: {
    PlayButton,
    RoadmapBlocks,
    PageNo,
    MFTLogo
  },
  data() {
    return {
      valueProposition: [
        {
          id: 0,
          header: "PLAY AND EARN",
          text1: "Play-and-Earn instead of Play-to-Earn model.",
          text2:
            "Unlike the majority of NFT games that only focus on Play-to-Earn model, MY FARM and players build together a relaxing atmosphere on and off the game to create a Play-and-Earn balance.",
          img: "/img/whitePaper/playGame.png",
          width: "250px",
          height: "190px",
        },
        {
          id: 1,
          header: "Mobile friendly",
          text1: "Focus on enhancing the ﬁnest UI/UX environment for players.",
          text2:
            "Mobile games expected to clai,m 57 of the digital games market in 2021 (Statista). My Farm mobile friendly platform brings on board more of these traditional gamers.",
          img: "/img/whitePaper/mobile.png",
          width: "150px",
          height: "180px",
        },
        {
          id: 2,
          header: "REALISTIC AR/VR EXPERIENCE",
          text1:
            "We will create VR mode, players can immerse more fully in 3D nature and wonders of Metaverse",
          img: "/img/whitePaper/experience.png",
          width: "200px",
          height: "200px",
        },
      ],

      // MarketPlace breeding center
      textList: [
        {
          id: 0,
          text: "With a marketplace system where you can exchange all NFT products in the game.",
        },
        {
          id: 1,
          text: "Crossbreeding system: when your plant is mature enough, you can use 2 different plants to create a new cultivar.",
        },
        {
          id: 2,
          text: "Level tree: Your tree will be leveled up every time you join a mini game or use a support tool, when the tree reaches a certain level, you can bring the tree to participate in the campaign",
        },
      ],

      // Roadmap 
      roadmapBlocks: [
        {
          id: 1,
          subtitle: "Q4 - 2021",
          items: [
            "Martket Research, Brainstorming & Team Formation",
            "Graphic designs for My Farm",
            "Smart Contract Development",
          ],
        },
        {
          id: 2,
          subtitle: "Q1 - 2022",
          items: [
            "Private Sale, Public Sale",
            "Testnet Launch",
            "Marketing & Partnership",
            "Launch Game ",
          ],
        },
        {
          id: 3,
          subtitle: "Q2 - 2022",
          items: [
            "Marketing, Partnership and Onboarding more users",
            "Game version 2 Release",
            "Add more mini-games",
            "Reach 100,000 users",
            "Marketplace Launch",
          ],
        },
        {
          id: 4,
          subtitle: "Q3 - 2022",
          items: [
            "Launch of full My Farm Metaverse",
            "Graphics and user experience improvements",
            "Marketing, Partnership, and Onboarding more users",
          ],
        },
        {
          id: 5,
          subtitle: "Q4 - 2022",
          items: [
            "Launch of full My Farm Game",
            "Reach 500,000 users",
            "Game version 3. Release: 3D, player avatar creation & Multiplayer",
            "Breeding room and campaign",
          ],
        },
        {
          id: 6,
          subtitle: "Q2 - 2023",
          items: [
            "Game VR",
            "Reach 1,000,000 users",
            "Grown in more than 20 countries",
          ],
        },
      ],
    };
  },
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

// MFT Token Allocation Start
.paper {
  background-image: url("../../static/img/whitePaper/EmptyPaper.png");
  background-size: 100%;
  height: 759px;
  width: 100%;
}
// MFT Token Allocation End
</style>