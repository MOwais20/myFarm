<template>
  <div>
    <WoodenBlocksLogo @click="$router.push('/')" class="my-5 pointer" />

    <div class="tw-flex tw-flex-row tw-flex-wrap tw-justify-center">
      <div v-for="(icon, index) in socialIcons" :key="index">
        <WoodenBlocksIcons @click="$router.push(icon.to)" class="my-2" :imgURL="icon.url" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      socialIcons: [
        { url: "/img/socialIcons/Reddit - Negative.png",
          to: ''
        },
        { url: "/img/socialIcons/Twitter.png", to: '' },
        { url: "/img/socialIcons/youtubeLogo.png", to: '' },
        { url: "/img/socialIcons/Telegram.png", to: '' },
        { url: "/img/socialIcons/Medium - Negative.png", to: '' },
      ],
    };
  },
};
</script>

<style>
</style>