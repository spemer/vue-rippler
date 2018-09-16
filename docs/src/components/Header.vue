<template lang="pug">
  div#header
    div.container
      div.header__logo
        router-link.header__logo--link(
          :to="'/'"
          v-scroll-to="{el: 'body', duration: 0}"
          v-tooltip="{content: 'Top', delay: {show: 500, hide: 100}}"
        )
          img.header__logo--img(
            src="../assets/launcher.svg"
          )
          span.header__logo--text vue-rippler
</template>

<script>
export default {

}
</script>

<style lang="scss">

#header {
  top: 0;
  z-index: 10;
  width: 100%;
  position: fixed;
  height: $grid14x;
  align-items: center;
  background-color: #fff;
  @include box-shadow($grid2x, $grid3x);

  .header__logo {
    cursor: pointer;
    height: $grid14x;
    display: inline-block;

    .header__logo--img {
      padding: $grid2x 0;
    }

    .header__logo--text {
      color: $text333;
      font-weight: 500;
      margin-left: $grid4x;
      display: inline-block;
      transform: translateY(-68%);
      @include font-size($grid5x);
    }
  }
}
</style>
