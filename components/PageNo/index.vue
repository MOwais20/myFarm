<template>
  <div>
      <v-img
      src="/img/whitePaper/pageNo.png"
      max-width="68px"
      height="57.8px"
      contain
      >
      <div class="d-flex justify-center ma-3">
          <p class="tw-font-semibold tw-text-2xl" style="font-family: Mitr; color: #882900">{{data}}</p>
      </div>
      </v-img>
  </div>
</template>

<script>
export default {
    name: "pageNo",
    props: {
        data: String
    }

}
</script>

<style lang="scss" scoped>
</style>