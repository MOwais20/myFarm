<template>
  <div class="sm-btn d-flex justify-center align-center">
      <span :class="classes" class="tw-text-sm custom-font tw-font-semibold">
          {{ text }}
      </span>
  </div>
</template>

<script>

export default {
    props: ['text', 'classes']
    
};
</script>

<style lang="scss" scoped>
.sm-btn {
  background-image: url("../../static/dashboard/smButton.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 100%;
  width: 84px;
  height: 35px;
}

.sm-btn.lazy {
   background-image: none;
   background-color: #F1F1FA;
}
</style>