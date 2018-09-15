<template lang="pug">
  div#header
    div.container
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
}
</style>
