<template lang="pug">
  div#header
    div.container
      div.header__logo
        a.header__logo--link(
          v-scroll-to="{el: 'body', duration: 0}"
        )
          img.header__logo--img(
            :src="baseURI"
          )
          span.header__logo--text vue-rippler
</template>

<script>
export default {
  data () {
    return {
      baseURI: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDBweCIgaGVpZ2h0PSI0MHB4IiB2aWV3Qm94PSIwIDAgNDAgNDAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUxLjMgKDU3NTQ0KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5sYXVuY2hlcjwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxyZWN0IGlkPSJwYXRoLTEiIHg9IjAiIHk9IjAiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcng9IjgiPjwvcmVjdD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJsYXVuY2hlciIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGc+CiAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTIiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgIDwvbWFzaz4KICAgICAgICAgICAgPHVzZSBpZD0iTWFzayIgZmlsbD0iIzQyQjg4MyIgZmlsbC1ydWxlPSJub256ZXJvIiB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgPGNpcmNsZSBpZD0ib3ZhbC1sZyIgZmlsbC1vcGFjaXR5PSIwLjE2IiBmaWxsPSIjMDAwMDAwIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG1hc2s9InVybCgjbWFzay0yKSIgY3g9IjM2IiBjeT0iMzYiIHI9IjI0Ij48L2NpcmNsZT4KICAgICAgICAgICAgPGNpcmNsZSBpZD0ib3ZhbC1zbSIgZmlsbC1vcGFjaXR5PSIwLjE2IiBmaWxsPSIjMDAwMDAwIiBmaWxsLXJ1bGU9Im5vbnplcm8iIG1hc2s9InVybCgjbWFzay0yKSIgY3g9IjM2IiBjeT0iMzYiIHI9IjEyIj48L2NpcmNsZT4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=='
    }
  }
}
</script>

<style lang="scss">

#header {
  top: 0;
  width: 100%;
  z-index: 10000;
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
