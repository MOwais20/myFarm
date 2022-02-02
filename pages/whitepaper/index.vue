<template>
  <v-container fluid class="pa-0" style="overflow: hidden">
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

        <h1
          class="
            custom-font-2
            tw-text-7xl
            text-center
            head-text-main
            tw-py-2
            linear-gradient-1
          "
        >
          WHITEPAPER
        </h1>

        <h3
          class="
            tw-text-2xl
            custom-font-2
            tw-text-center tw-mx-auto tw-py-2 tw-font-normal
          "
        >
          Play, relax, earn money Live blockchain-based gaming experience <br />
          and join My Farm's Metaverse
        </h3>
      </div>
    </div>

    <!-- Introduction to My Farm Start  -->
    <div class="backgroundImage tw-container tw-max-w-full tw-py-7">
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

      <div
        class="
          d-flex
          flex-row
          align-center
          mx-auto
          d-flex
          justify-center
          tw-my-16 tw-static
        "
      >
        <v-img
          style="left: 7rem"
          src="/img/whitePaper/game.png"
          max-width="859px"
          height="715px"
          contain
          lazy-src="/img/whitePaper/game.png"
          class="d-flex align-center justify-end mx-auto tw-relative"
        >
          <div
            style="max-width: 535px; height: 100%"
            class="
              ml-15
              tw-text-xl tw-font-black tw-leading-8
              d-flex
              flex-column
              align-center
            "
          >
            <v-img
              class="tw-my-5 mx-auto"
              contain
              src="/img/LogoMyFarm.png"
              lazy-src="/img/LogoMyFarm.png"
              max-width="219px"
              height="134px"
            ></v-img>
            <p class="tw-font-medium text-center mb-2">
              is created by a group of professional blockchain and game
              programmers with many years of experience, the office is located
              in singapore.
            </p>
            <div class="d-flex">
              <PlayButton class="tw-mx-2 hover-shd" style="width: 24px" />
              <p class="tw-font-medium ma-2" align="start">
                A blockchain-based relaxing game inspired by the way of farming
                in the Asian region.
              </p>
            </div>
            <div class="d-flex">
              <PlayButton class="tw-mx-2 hover-shd" style="width: 15%" />
              <p class="tw-font-medium ma-2" align="start">
                At My Farm, players will play the role of a farmer who is happy
                with growing, raising, and selling his agricultural products.
                From there, each participant will contribute to the construction
                of a Metaverse whole that incorporates many unique custom farms.
              </p>
            </div>
          </div>
        </v-img>

        <div class="d-flex align-center tw-relative" style="right: 5rem">
          <v-img
            contain
            src="/img/whitePaper/GameUi.png"
            max-width="1010px"
            height="552px"
            class="d-flex align-end align-self-end justify-end tw-static"
          >
            <v-img
              contain
              class="tw-relative"
              style="left: 70%; z-index: 2"
              src="/img/tractor.png"
              height="332px"
              max-width="331px"
              lazy-src="/img/tractor.png"
            ></v-img>
          </v-img>
        </div>
      </div>
    </div>
    <!-- Introduction to My Farm End -->

    <!-- LandScape of Opportunity Start  -->
    <div class="backgroundImage tw-container tw-max-w-full tw-py-7">
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
        <v-col class="d-flex justify-end" cols="6" lg="6" sm="6" xl="6" align="center">
          <v-img
            contain
            src="/img/whitePaper/board.png"
            max-width='912px'
            max-height='725px'
          >
            <div>
              <v-img
                class="ma-4"
                contain
                src="/img/LogoMyFarm.png"
                max-width="240px"
                max-height="147px"
              ></v-img>
              <div class="d-flex justify-space-around">
                <div class="">
                  <p class="tw-font-normal white--text cricle1">$180B</p>
                  <p class="yellow--text tw-text-xl mt-2">
                    Global Gaming <br />
                    2021
                  </p>
                  <p class="white--text tw-text-sm">Total Available Market</p>
                </div>
                <div>
                  <p class="tw-font-normal white--text cricle2">$21B</p>
                  <p class="yellow--text tw-text-xl mt-2">
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
                  <p class="yellow--text tw-text-xl mt-2">My Farm</p>
                  <p class="white--text tw-text-sm">
                    Share of Available Market
                  </p>
                </div>
              </div>
            </div>
          </v-img>
        </v-col>
        <v-col lg="6" sm="6" xl="6">
          <div class="d-flex" style="max-width: 808px">
              <Arrow class=" mr-4 hover-shd" width="24px" height="24px"/>
            <p class="tw-text-xl d-flex" style="font-family: Mitr !important">
              The demand for NFTs is continuing to surge and the NFT market is
              showing no signs of slowing down. Year-to-date, within less than
              three months, the combined market cap of 6 majors gaming NFT
              projects has increased by 1,265% to reach a total capitalization
              >5,2 billion USD (Messari - 20th dec 2021).
            </p>
          </div>
          <div class="d-flex mt-10" style="max-width: 808px">
            <Arrow class=" mr-4 hover-shd" width="24px" height="24px"/>
            <p class="tw-text-xl d-flex" style="font-family: Mitr !important">
              Furthermore, Covid-19 has had its impact on the gaming market as
              well, as millions of people experiencing lockdowns around the
              world started playing more games. A survey from March 2020
              revealed that video gamers in the United States spent 45% more
              time playing video games during the quarantine. My Farm believes
              that the Play-to-Earn model is opening a wide new window of
              solutions to ease the hardship brought on by the pandemic.
            </p>
          </div>
          <div class="d-flex" style="max-width: 808px">
            <v-img
            contain
            src="/img/whitePaper/manRest.png"
            width="413px"
            height="351px"
          ></v-img>
          </div>
        </v-col>
      </v-row>
    </div>
    <!-- LandScape of Opportunity End  -->

    <!-- Value Proposition Start  -->
    <div class="backgroundImage tw-container tw-max-w-full tw-py-7">
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

      <div class="d-flex flex-row tw-py-10 justify-center">
        <div
          class="tw-py-10 d-flex"
          v-for="valueProposition in valueProposition"
          :key="valueProposition.id"
        >
          <v-img
            src="/img/whitePaper/cardImg.png"
            max-width="583px"
            max-height="729px"
            contain
          >
            <div class="d-flex justify-center ma-8">
              <v-img
                class="text-center"
                max-width="326px"
                max-height="123px"
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
                  style="font-family: SVN-SAF !important"
                >
                  {{ valueProposition.header }}
                </p>
              </v-img>
            </div>
            <div class="ma-6">
              <p class="tw-text-xl tw-font-medium" style="font-family: Mitr !important">{{ valueProposition.text1 }}</p>
              <p class="mt-10 tw-text-xl tw-font-medium" style="font-family: Mitr !important">{{ valueProposition.text2 }}</p>
            </div>
            <div class="d-flex justify-center">
              <v-img
                :class="valueProposition.id === 2 ? 'mt-16' : '' "
                :src="valueProposition.img"
                :max-width="valueProposition.width"
                :max-height="valueProposition.height"
                contain
              ></v-img>
            </div>
          </v-img>
        </div>
      </div>
    </div>
    <!-- Value Proposition End  -->

    <!-- Envision My Farm Start  -->
    <div class="backgroundImage tw-container tw-max-w-full tw-py-7">
      <v-row class="tw-py-7">
        <v-col class="d-flex justify-center" cols="10">
          <v-img
            contain
            src="/img/whitePaper/head4.png"
            max-width="835.18px"
            max-height="60px"
          ></v-img>
        </v-col>
        <v-col class="d-flex justify-center">
          <PageNo data="4" />
        </v-col>
      </v-row>
      <div class="d-flex flex-row tw-my-7">
        <div class="d-flex col-12 justify-center">
          <div class="d-flex">
            <Arrow class="mr-4" width='24px' height='24px' />
            <p class="tw-text-xl d-flex" style="max-width: 809px; font-family: Mitr !important">
              In the near term, we encourage players to enjoy the open world of
              My Farm’s fresh sight and sound whether by themselves or with
              family and friends.
            </p>
          </div>
          <div class="d-flex">
            <Arrow class="mr-4" width='24px' height='24px' />
            <p class="tw-text-xl tw-font-medium" style="max-width: 740px; font-family: Mitr !important">
              The game is currently under development and we intend to involve
              the community even before the game launches (targeted Q1 2022) as
              we aim to be a community-governed game.
            </p>
          </div>
        </div>
      </div>
      <div class="d-flex justify-center flex-row container">
        <div class="col">
          <div class="gameUIimg">
           <div>
              <v-img
              src="/img/whitePaper/hen.png"
              max-width="435px"
              max-height="478px"
              contain
              :class="!$vuetify.breakpoint.mobile ? 'left1057' : 'left73'"
            ></v-img>
           </div>
          </div>
        </div>
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
    <div class="backgroundImage tw-container tw-max-w-full tw-py-7">
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
    <div class="backgroundImage tw-container tw-max-w-full tw-py-7">
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
          <div class="d-flex" v-for="textList in textList" :key="textList.id">
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
    <div class="backgroundImage tw-container tw-max-w-full tw-py-7">
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

      <div class="d-flex justify-center">
        <v-img
          src="/img/whitePaper/EmptyPaper.png"
          width="1800px"
          max-height="759px"
          contain
          position="absolute"
        >
          <div class="d-flex flex-row justify-space-between">
            <p class="ma-0 ma-12 tw-text-2xl fontFamily">
              Total Supply:
              <span class="fontFamily black--text">1,000,000,000 MFT</span>
            </p>
            <v-img
              src="/img/whitePaper/MFTImg.png"
              max-width="213px"
              max-height="182px"
              contain
              style="margin-top: -2%"
              class="mr-12"
            ></v-img>
          </div>
          <div class="d-flex flex-row" style="margin-top: -35px">
            <div class="ml-4">
              <div class="mt-4" v-for="list1 in list1" :key="list1.id">
                <p class="ma-0 tw-text-xl ml-11 fontFamily">
                  {{ list1.heading }}<br />
                  <span class="black--text fontFamily">{{ list1.amount }}</span>
                </p>
              </div>
            </div>
            <div class="ml-4">
              <div class="mt-4" v-for="list2 in list2" :key="list2.id">
                <p class="ma-0 tw-text-xl ml-11 fontFamily">
                  {{ list2.heading }}<br />
                  <span class="black--text fontFamily">{{ list2.amount }}</span>
                </p>
              </div>
            </div>
            <div class="ml-16 d-flex" style="margin-left: -80px">
              <v-row>
                <v-col cols="6" align-self="end">
                  <v-img
                    src="/img/whitePaper/cdImg.png"
                    max-width="228px"
                    max-height="228px"
                    contain
                  ></v-img>
                </v-col>
                <v-col cols="6">
                  <div
                    v-for="colorList in colorList"
                    :key="colorList.id"
                    class="d-flex mt-2"
                  >
                    <div class="Circle" style="background-color: #d14d37"></div>
                    <p
                      class="tw-text-base tw-font-medium ml-2 w-100"
                      style="font-family: Mitr !important; color: #333333"
                    >
                      {{ colorList.title }}
                    </p>
                  </div>
                </v-col>
              </v-row>
            </div>
          </div>
          <div class="d-flex flex-row">
            <p class="tw-font-xl ml-9" style="font-family: SVN-SAF !important">
              ** MFT tokens will be burned 50% everytime players use to buy
              in-game items, the remaining 50% will be returned to play to earn
            </p>
            <p
              class="tw-font-xl"
              style="font-family: SVN-SAF !important; color: #882900"
            >
              Initial Market Status <br />
              <span class="black--text" style="font-family: SVN-SAF !important"
                >Initial Circulating Supply: 1.000.000.000 $MFT
              </span>
            </p>
            <v-img
              src="/img/whitePaper/home.png"
              max-width="391px"
              max-height="395"
              contain
              style="top: -39px; left: 65px"
            ></v-img>
          </div>
        </v-img>
      </div>
    </div>
    <!-- MFT Token Allocation End -->

    <!-- Team Start  -->
    <div class="backgroundImage tw-container tw-max-w-full tw-py-7">
      <v-row class="tw-py-7">
        <v-col class="d-flex justify-center" cols="10">
          <v-img
            contain
            src="/img/whitePaper/head11.png"
            max-width="894px"
            height="70px"
          ></v-img>
        </v-col>
        <v-col class="d-flex justify-center">
          <PageNo data="11" />
        </v-col>
      </v-row>
      <v-container class="">
        <v-row class="" justify="center" no-gutters>
          <v-col
            cols="2"
            align="center"
            class="d-flex justify-center mt-4"
            v-for="item in teamMember"
            :key="item.id"
          >
            <div>
              <v-img
                src="/img/whitePaper/imageBlock.png"
                max-width="171px"
                max-height="177px"
                contain
                position="absolute"
              >
                <v-img
                  src="/img/whitePaper/personImg.png"
                  max-width="102px"
                  max-height="103px"
                  position="relative"
                  style="top: 28px; left: 5px"
                >
                </v-img>
              </v-img>
              <p
                class="tw-text-base tw-font-semibold"
                style="font-family: Mitr !important"
              >
                {{ item.name }}
              </p>
              <p class="tw-text-base" style="font-family: Mitr !important">
                Co-Founder
              </p>
              <p class="tw-text-base" style="font-family: Mitr !important">
                CEO
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- Team End  -->

    <!-- Partner Start  -->
    <div class="backgroundImage tw-container tw-max-w-full tw-py-7">
      <v-row class="tw-py-7">
        <v-col class="d-flex justify-center" cols="10">
          <v-img
            contain
            src="/img/whitePaper/head12.png"
            max-width="894px"
            height="70px"
          ></v-img>
        </v-col>
        <v-col class="d-flex justify-center">
          <PageNo data="12" />
        </v-col>
      </v-row>
      <div class="mx-5">
        <div class="partners-woodblock2 mx-auto d-flex">
          <v-row
            justify="center"
            class=""
            :class="$vuetify.breakpoint.mdAndUp ? 'tw-p-24 full-h' : 'pa-10'"
            no-gutters
          >
            <v-col
              cols="3"
              align="center"
              align-self="center"
              v-for="(partner, index) in partnerImg"
              :key="index"
            >
              <v-img
                alt="partners"
                max-width="150px"
                max-height="150px"
                :src="partner.img"
                :lazy-src="partner.img"
              ></v-img>
            </v-col>
          </v-row>
        </div>
      </div>
    </div>
    <!-- Partner End  -->

    <!-- Connect  -->
    <div class="header-main">
      <v-row class="tw-py-7">
        <v-col class="d-flex justify-center" cols="10">
          <v-img
            contain
            src="/img/whitePaper/head13.png"
            max-width="894px"
            height="70px"
          ></v-img>
        </v-col>
        <v-col class="d-flex justify-center">
          <PageNo data="12" />
        </v-col>
      </v-row>
      <v-row class="d-flex justify-center">
        <v-col align-self="center" align="center">
          <v-img
            v-if="!$vuetify.breakpoint.mobile"
            class="tw-mx-auto tw-my-16"
            contain
            src="/img/LogoMyFarm.png"
            max-width="702px"
            max-height="429px"
            height="392px"
          ></v-img>
          <p
            class="tw-font-normal tw-text-4xl"
            style="font-family: SVN-SAF !important"
          >
            For investment and partnership opportunities
          </p>
        </v-col>
        <v-col align-self="center" align="cetner">
          <v-img
            src="/dashboard/paper.png"
            height="759px"
            width="781px"
            contain
          >
            <div style="margin-top: 112px; margin-left: 160px">
              <div
                class="d-flex align-center"
                v-for="item in socialIcons"
                :key="item.id"
              >
                <v-img
                  src="/img/whitePaper/iconBg.png"
                  max-width="86px"
                  max-height="77px"
                  contain
                  class="mt-4"
                >
                  <v-img
                    :src="item.url"
                    max-width="40px"
                    max-height="40px"
                    contain
                    class="ma-5"
                  ></v-img>
                </v-img>
                <p class="mx-10 mt-5">
                  {{ item.text }} <br />
                  {{ item.text2 }}
                </p>
              </div>
              <v-img
                src="/img/whitePaper/petImg.png"
                width="303px"
                height="303px"
                contain
                position="relative"
                style="left: 416px; margin-top: -178px"
              ></v-img>
            </div>
          </v-img>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import RoadmapBlocks from "@/assets/svg/Roadmap-blocks.svg";

export default {
  components: {
    RoadmapBlocks,
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
          width: "340px",
          height: "252px",
        },
        {
          id: 1,
          header: "Mobile friendly",
          text1: "Focus on enhancing the ﬁnest UI/UX environment for players.",
          text2:
            "Mobile games expected to clai,m 57 of the digital games market in 2021 (Statista). My Farm mobile friendly platform brings on board more of these traditional gamers.",
          img: "/img/whitePaper/mobile.png",
          width: "187px",
          height: "240px",
        },
        {
          id: 2,
          header: "REALISTIC AR/VR EXPERIENCE",
          text1:
            "We will create VR mode, players can immerse more fully in 3D nature and wonders of Metaverse",
          img: "/img/whitePaper/experience.png",
          width: "239px",
          height: "240px",
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
      // MFT Allocation
      list1: [
        {
          id: 0,
          heading: "PUBLIC SALE",
          amount: "100,000,000 (Lock 2 years)",
        },
        {
          id: 1,
          heading: "PRIVATE SALE",
          amount: "200,000,000 (Lock 2 years)",
        },
        {
          id: 2,
          heading: "STRATEGIC PARTNERSHIP",
          amount: "500,000,000 (Lock 2 years)",
        },
        {
          id: 3,
          heading: "TEAM & ADIVSOR",
          amount: "100,000,000 (Lock 5 years)",
        },
      ],
      list2: [
        {
          id: 0,
          heading: "STAKING REWARD",
          amount: "150,000,000",
        },
        {
          id: 1,
          heading: "COMMUNITY & MARKETING",
          amount: "30,000,000",
        },
        {
          id: 2,
          heading: "PLAY-TO-EARN REWARD",
          amount: "500,000,000",
        },
        {
          id: 3,
          heading: "LIQUIDITY DEX",
          amount: "50,000,000",
        },
      ],
      colorList: [
        {
          id: 0,
          color: "#D14D37",
          title: "Public Scale",
        },
        {
          id: 1,
          color: "#F47560",
          title: "Private Sale",
        },
        {
          id: 2,
          color: "#FFA800",
          title: "Strategic Partnership",
        },
        {
          id: 3,
          color: "#577D9A",
          title: "Team & Advisors",
        },
        {
          id: 4,
          color: "#228E80",
          title: "Staking Reward",
        },
        {
          id: 5,
          color: "#17772A",
          title: "Community & Marketing",
        },
        {
          id: 6,
          color: "#325475",
          title: "Play-to-earn",
        },
        {
          id: 7,
          color: "#D18600",
          title: "Liquidity Dex",
        },
      ],

      // Team
      teamMember: [
        {
          id: 0,
          name: "Truong Tran",
          founder: "Co-Founder",
          position1: "CEO",
        },
        {
          id: 1,
          name: "Thuan Nguyen",
          founder: "Co-Founder",
          position1: "CTO",
        },
        {
          id: 2,
          name: "Duc Hoang",
          founder: "Co-Founder",
          position1: "Head of Development",
        },
        {
          id: 3,
          name: "Sang Nguyen",
          founder: "Co-Founder",
          position1: "CPO",
        },
        {
          id: 4,
          name: "Cakoi",
          founder: "Co-Founder",
          position1: "CMO",
        },
        {
          id: 5,
          name: "Leo Ngo",
          position1: "CM",
        },
        {
          id: 6,
          name: "Hung Dang",
          position1: "Game Artist",
        },
        {
          id: 7,
          name: "Anh Pham",
          position1: "3D Designer",
        },
        {
          id: 8,
          name: "Tung Le",
          position1: "Game Developer",
        },
        {
          id: 9,
          name: "Thanh Chu",
          position1: "Thanh Chu",
        },
        {
          id: 10,
          name: "Cong Nguyen",
          position1: "Game Developer",
        },
        {
          id: 11,
          name: "Lam Nghiem",
          position1: "Game Developer",
        },
        {
          id: 12,
          name: "Quyen Vuong",
          position1: "Game Developer",
        },
        {
          id: 13,
          name: "Hieu Nguyen",
          position1: "Fullstack Developer",
        },
        {
          id: 14,
          name: "Tien Tran",
          position1: "Fullstack Developer",
        },
        {
          id: 15,
          name: "Xuan Thinh",
          position1: "Graphic Designer",
        },
        {
          id: 16,
          name: "Lam Nguyen",
          position1: "Animator",
        },
        {
          id: 17,
          name: "Hieu Le",
          position1: "3D Artist",
        },
        {
          id: 18,
          name: "Hung Nguyen",
          position1: "3D Motion",
        },
        {
          id: 19,
          name: "Nam Nguyen",
          position1: "Concept Artist",
        },
      ],
      // Partner
      partnerImg: [
        { img: "/img/partners/MasterVenturesHorizontal.png" },
        { img: "/img/partners/Sparklogo.png" },
        { img: "/img/partners/vendetta.png" },
        { img: "/img/partners/ld.png" },
        // ],
        // partnerImgCol2: [
        { img: "/img/partners/moonwhale.png" },
        { img: "/img/partners/PancakeSwap.png" },
        { img: "/img/partners/poolz.png" },
        { img: "/img/partners/mirabo.png" },
        // ],
        // partnerImgCol3: [
        { img: "/img/partners/genBlock.png" },
        { img: "/img/partners/ngcVenture.png" },
        { img: "/img/partners/signum-capital-logo_transparent.png" },
        { img: "/img/partners/coinGeeko.png" },
      ],

      // Connect
      socialIcons: [
        {
          id: 0,
          text: "contact@myfarm.finance",
          url: "/img/socialIcons/EnvelopeSimple.png",
        },
        {
          id: 1,
          text: "https://t.me/myfarmOfficial",
          text2: "https://t.me/myfarmANN",
          url: "/img/socialIcons/Telegram.png",
        },
        {
          id: 2,
          text: "https://twitter.com/My_Farm",
          url: "/img/socialIcons/Twitter.png",
        },
        {
          id: 3,
          text: "myfarm.finance",
          url: "/img/socialIcons/Globe.png",
        },
        {
          id: 4,
          text: "https://www.reddit.com/user/myFarm",
          url: "/img/socialIcons/Reddit - Negative.png",
        },
        {
          id: 5,
          text: "https://medium.com/@myfarm",
          url: "/img/socialIcons/Medium - Negative.png",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.fontFamily {
  font-family: SVN-SAF !important;
  color: #882900;
}
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

// .partners-woodblock {
//   background-image: url("../../static/img/whitePaper/game.png");
//   max-width: 700px;
//   height: 715px;
//   // position: absolute;
//   background-size: 100%;
// }
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
  width: 206px;
  height: 206px;
  border-radius: 50%;
  background: #882900;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cricle2 {
  width: 124px;
  height: 124px;
  border-radius: 50%;
  background: #882900;
  display: flex;
  align-items: center;
  justify-content: center;
}
.cricle3 {
  width: 86px;
  height: 86px;
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

// Envision start
.gameUIimg {
  background-image: url("../../static/img/whitePaper/gameLargepic.png");
  width: 1732px;
  height: 739px;
  background-size: 100%;
  background-position: cover;
  margin-bottom: 0px;
}
.left42 {
  // position: absolute;
  left: 42px;
}
.left20 {
  // position: absolute;
  left: 20%;
}
.left1057 {
  // left: 1057px;
  top: 169px;
}
.left73 {
  left: 73%;
  top: 169px;
}
// Envision End

// MFT Token Allocation Start
// .paper {
//   background-image: url("../../static/img/whitePaper/EmptyPaper.png");
//   background-size: 100%;
//   height: 759px;
//   width: 1800px;
//   margin-top: 80px;
// }
.Circle {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  // background-color: #D14D37;
}
.backgroundImage {
  background-image: url("../../static/img/whitePaper/backgroundImg.png");
  background-size: cover;
  height: auto;
  width: 100%;
  // object-fit: cover;
}
// MFT Token Allocation End

// Partners Start
.partners-woodblock2 {
  background-image: url("../../static/img/partners-woodblock.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 100%;
  height: 824px;
  max-width: 1271px;
  // display: flex;
  // flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}

// Partners End

// Connect Start
.paper {
  background-image: url("../../static/dashboard/paper.png");
  background-position: 100%;
  background-size: 100%;
  height: 759px;
  width: 781px;
  margin-top: 10px;
}
</style>