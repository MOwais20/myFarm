<template>
  <v-col v-if="column" align="center">
    <span class="subtitle-text">Rank reward</span>

    <div
      class="d-flex flex-row align-center justify-space-between tw-h-40 my-3"
    >
      <div class="reward-bg d-flex flex-column align-center justify-center">
        <v-img
          max-height="68px"
          width="68px"
          src="/dashboard/tickets.png"
        ></v-img>

        <span class="white--text tw-font-medium">x2</span>
      </div>

      <div class="reward-bg d-flex flex-column align-center justify-center">
        <span class="white--text heading-fm tw-font-medium tw-text-2xl"
          >50.000</span
        >

        <v-img
          max-height="32px"
          width="32px"
          class="my-2"
          src="/dashboard/mft-sm.png"
        ></v-img>
      </div>
    </div>

    <DashboardSmButton :classes="''" :text="'Claim'" />
  </v-col>

  <div class="d-flex" v-else>
    <div class="d-flex flex-row align-center justify-space-between my-3">
      <span class="subtitle-text mr-5">Rank reward</span>

      <div class="reward-sm-bg d-flex flex-column align-center justify-center">
        <v-img
          max-height="32px"
          width="32px"
          contain
          src="/dashboard/tickets.png"
        ></v-img>

        <span class="white--text tw-font-medium">x2</span>
      </div>

      <div class="reward-sm-bg d-flex flex-column align-center justify-center">
        <span class="white--text heading-fm tw-font-medium tw-text-xs"
          >100.000</span
        >

        <v-img
          max-height="16px"
          width="16px"
          class="my-2"
          src="/dashboard/mft-sm.png"
        ></v-img>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["column", "row"],
};
</script>

<style lang="scss" scoped>
.reward-bg {
  height: 120px;
  width: 120px;
  border-radius: 30px;
  background: #bc4a4b;
  margin: 5px;
}

.reward-sm-bg {
  height: 64px;
  width: 64px;
  border-radius: 10px;
  background: #bc4a4b;
  margin: 5px;
}

.paper-overlay {
  // width: 800px;
  height: 227px;
  background: #d6b694;
  border-radius: 30px;
}
</style>