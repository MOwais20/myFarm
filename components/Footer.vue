<template>
  <div>
    <WoodenBlocksLogo />

    <div class="tw-flex tw-flex-row tw-flex-wrap tw-justify-center">
      <div v-for="(icon, index) in socialIcons" :key="index">
        <WoodenBlocksIcons :imgURL="icon.url" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      socialIcons: [
        { url: "/img/socialIcons/Reddit - Negative.png" },
        { url: "/img/socialIcons/Twitter.png" },
        { url: "/img/socialIcons/Youtube.png" },
        { url: "/img/socialIcons/Telegram.png" },
        { url: "/img/socialIcons/Medium - Negative.png" },
      ],
    };
  },
};
</script>

<style>
</style>