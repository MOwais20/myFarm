<template>
  <div>
    <div class="d-flex flex-column btn-text-color text-center">
      <h1 class="custom-font tw-text-3xl tw-font-black">Dashboard</h1>
      <h3 class="tw-text-xl">Welcome <span class="heading-fm">0x7202</span></h3>
    </div>

    <div class="d-flex flex-row">
      <div>
        <v-col align="center">
          <span class="subtitle-text">Rank</span>

          <v-img height="160px" class="my-3" src="/rank/diamond.png"> </v-img>

          <h3 class="custom-font tw-text-2xl btn-text-color tw-font-black">
            Diamond
          </h3>
        </v-col>
      </div>

      <div class="tw-px-28">
        <DashboardRankReward :column="true" />
      </div>
    </div>

    <div class="next-rank mx-5 d-flex align-center">
      <v-col cols="3" align="center" align-self="start">
        <span class="subtitle-text">Rank</span>

        <v-img height="120px" contain class="my-1" src="/rank/ruby.png">
        </v-img>

        <h3 class="custom-font tw-text-xl btn-text-color tw-font-black">
          Ruby
        </h3>
      </v-col>

      <v-col align="start" align-self="start">
        <span class="subtitle-text">Condition</span>

        <div class="my-1">
          <ul class="tw-text-base custom-font-2 tw-lowercase btn-text-color">
            <li class="custom-font-2 d-flex align-center">
              <!-- Icon -->
              <checkCircle class="mx-2" />

              7 branches, each branch min 100.000 USDT
            </li>
            <li class="custom-font-2 d-flex align-center">
              <!-- Icon -->
              <crossIcon class="mx-2" />
              Total spent of all branches is 1.000.000 USDT
            </li>
          </ul>

          <DashboardRankReward />
        </div>
      </v-col>
    </div>
  </div>
</template>

<script>
import crossIcon from "@/assets/icons/XCircle.svg";
import checkCircle from "@/assets/icons/CheckCircle.svg";

export default {
  components: {
    crossIcon,
    checkCircle,
  },
};
</script>

<style lang="scss" scoped>
.next-rank {
  height: 227px;
  background-color: #d6b694;
  border-radius: 30px;
}
</style>