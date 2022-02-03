<template>
  <div class="main-bg full-h py-2">
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
                  <v-list-item-icon class="mr-3">
                    <component :is="item.icon" />
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title class="btn-text-color">
                      <span class="d-flex align-center tw-text-xl font-weight-bold tw-leading-8">{{
                        item.name
                      }}</span>
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </div>

          <div class="dash-paper d-flex flex-column pa-15 align-center">
            <nuxt-child></nuxt-child>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DashboardIcon from "@/assets/icons/CrownSimple.svg";
import MarketPlaceIcon from "@/assets/icons/Storefront.svg";
import MftSwapIcon from "@/assets/icons/ArrowsCounterClockwise.svg";
import MembersIcon from "@/assets/icons/Users.svg";
import TransactionsIcon from "@/assets/icons/Notebook.svg";
import MftStakingIcon from "@/assets/icons/Coin.svg";
import MftLendingIcon from "@/assets/icons/CurrencyCircleDollar.svg";

export default {
  middleware({ route, redirect, from }) {
    if (route.path == "/dashboard" || route.path == "/dashboard/") {
      return redirect("/dashboard/main");
    }
  },
  components: {
    DashboardIcon,
    MarketPlaceIcon,
    MftSwapIcon,
    MembersIcon,
    TransactionsIcon,
    MftLendingIcon,
    MftStakingIcon,
  },
  data() {
    return {
      selectedMenu: {
        name: "Dashboard",
        icon: "DashboardIcon",
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
          icon: "DashboardIcon",
          to: "/dashboard/main",
          class: "",
        },
        {
          name: "Marketplace",
          icon: "MarketPlaceIcon",
          to: "/dashboard/marketplace",
          class: "",
        },
        {
          name: "MFT Swap",
          icon: "MftSwapIcon",
          to: "/dashboard/mft-swap",
          class: "",
        },
        {
          name: "Members",
          icon: "MembersIcon",
          to: "/dashboard/members",
          class: "",
        },
        {
          name: "Transactions",
          icon: "TransactionsIcon",
          to: "/dashboard/transactions",
          class: "",
        },
        {
          name: "MFT Staking",
          icon: "MftStakingIcon",
          to: "/dashboard/mft-staking",
          class: "",
        },
        {
          name: "MFT Lending",
          icon: "MftLendingIcon",
          to: "/dashboard/mft-lending",
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
  background-size: cover;
  min-height: 1024px;
  height: 100%;
  width: 100%;
}

.WoodenDashboard {
  background-image: url("../../static/img/WoodenDashboard.png");
  background-position: center center;
  background-size: cover;
  height: 100%;
  min-height: 825px;
  max-width: 1272px;
  width: 100%;
  margin: auto;
}

.dash-paper {
  background-image: url("../../static/dashboard/paper.png");
  background-size: 100%;
  background-position: center center;
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

  svg {
    stroke: white !important;
  }
}
</style>