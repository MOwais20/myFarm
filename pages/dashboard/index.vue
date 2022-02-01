<template>
  <v-container fluid fill-height class="pa-0">
    <div class="main-bg">
      <HeaderFull />

      <div class="d-flex align-self-center full-h">
        <div class="WoodenDashboard d-flex justify-center t-mt-2">
          <div
            class="d-flex"
            style="align-items: center; height: fit-content; align-self: center"
          >
            <div class="dash-items d-flex flex-column">
              <div>
                <h3>MFT Balance</h3>

                <div class="d-flex">
                  <span class="heading-fm tw-text-xl"> 1.000.000.000 </span>
                  <v-img
                    src="/dashboard/mft-sm.png"
                    class="mx-2"
                    position="left"
                    height="36px"
                    contain
                  ></v-img>
                </div>
              </div>

              <div class="d-flex flex-row">
                <DashboardSmButton
                  v-for="(text, btnIndex) in balanceBtns"
                  :class="btnIndex == 0 ? 'my-2 mr-2' : 'ma-2'"
                  :key="`${btnIndex}-btnIndex`"
                  :classes="text.class"
                  :text="text.name"
                />
              </div>

              <v-img
                class="my-5"
                max-width="267px"
                lazy-src="/dashboard/myFarm_play.png"
                src="/dashboard/myFarm_play.png"
              >
              </v-img>

              <v-list flat dense color="transparent">
                <v-list-item-group
                  active-class="white--text"
                  v-model="selectedMenu"
                  color="white"
                >
                  <v-list-item
                    active-class="white--text"
                    :to="item.to"
                    v-for="(item, i) in menuItems"
                    :key="i"
                  >
                    <v-list-item-icon>
                      <v-icon v-text="item.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title class="btn-text-color">
                        <span class="tw-text-xl">{{ item.name }}</span>
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </div>

            <div class="dash-paper d-flex flex-column pa-10 align-center">
              <div class="d-flex flex-column btn-text-color text-center">
                <h1 class="custom-font tw-text-3xl tw-font-black">Dashboard</h1>
                <h3 class="tw-text-xl">
                  Welcome <span class="heading-fm">0x7202</span>
                </h3>
              </div>

              <div class="d-flex flex-row">
                <div>
                  <v-col align="center">
                    <v-subtitle class="subtitle-text">Rank</v-subtitle>

                    <v-img height="160px" class="my-3" src="/rank/diamond.png">
                    </v-img>

                    <h3
                      class="
                        custom-font
                        tw-text-2xl
                        btn-text-color
                        tw-font-black
                      "
                    >
                      Diamond
                    </h3>
                  </v-col>
                </div>

                <div>
                  <DashboardRankReward :column="true" />
                </div>
              </div>

              <div class="paper-overlay mx-5 d-flex align-center">
                <v-col cols="3" align="center" align-self="start">
                  <v-subtitle class="subtitle-text">Rank</v-subtitle>

                  <v-img
                    height="120px"
                    contain
                    class="my-1"
                    src="/rank/ruby.png"
                  >
                  </v-img>

                  <h3
                    class="custom-font tw-text-xl btn-text-color tw-font-black"
                  >
                    Ruby
                  </h3>
                </v-col>

                <v-col align="start" align-self="start">
                  <v-subtitle class="subtitle-text">Condition</v-subtitle>

                  <div class="my-1">
                    <ul
                      class="
                        tw-text-base
                        custom-font-2
                        tw-lowercase
                        btn-text-color
                      "
                    >
                      <li class="custom-font-2">
                        7 branches, each branch min 100.000 USDT
                      </li>
                      <li class="custom-font-2">
                        Total spent of all branches is 1.000.000 USDT
                      </li>
                    </ul>

                    <DashboardRankReward />
                  </div>
                </v-col>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      selectedMenu: {
        name: "Dashboard",
        icon: "",
        to: "/dashboard",
        class: "",
      },
      balanceBtns: [
        {
          name: "Deposit",
          class: "",
        },
        {
          name: "Withdraw",
          class: "",
        },
        {
          name: "Buy",
          class: "",
        },
      ],
      menuItems: [
        {
          name: "Dashboard",
          icon: "",
          to: "/dashboard",
          class: "",
        },
        {
          name: "Marketplace",
          icon: "",
          to: "",
          class: "",
        },
        {
          name: "MFT Swap",
          icon: "",
          to: "",
          class: "",
        },
        {
          name: "Members",
          icon: "",
          to: "",
          class: "",
        },
        {
          name: "Transactions",
          icon: "",
          to: "",
          class: "",
        },
        {
          name: "MFT Staking",
          icon: "",
          to: "",
          class: "",
        },
        {
          name: "MFT Lending",
          icon: "",
          to: "",
          class: "",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.main-bg {
  background-image: url("../../static/img/bg-1.png");
  background-position: center center;
  background-size: 100%;
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.WoodenDashboard {
  background-image: url("../../static/img/WoodenDashboard.png");
  background-position: center;
  background-size: 100%;
  height: 100%;
  max-width: 1272px;
  width: 100%;
  margin: auto;
}

.dash-paper {
  background-image: url("../../static/dashboard/paper.png");
  background-size: 100%;
  background-position: cover;
  width: 834px; /* 934 */
  height: 753px;
}

.dash-items {
  width: 300px;

  /* Font */
  font-family: Mitr;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: left;
  color: #882900;
}

.heading-fm {
  font-family: "SVN-SAF" !important;
  font-style: normal;
  font-weight: normal;
  /* identical to box height */

  color: #882900;
}

.subtitle-text {
  font-weight: 500;
  font-size: 16px;
  line-height: 25px;
  color: #b06e49;
}

.v-list-item-group .v-list-item--active {
  background: none;
  background-color: #bd5345;
  border-radius: 24px;
}

.v-list .v-list-item--active {
  .v-list-item__title {
    color: white;
  }
}
</style>