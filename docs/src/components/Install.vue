<template lang="pug">
  div#install
    div.container
      div.install__code--wrapper(
        @click="toast"
        ripple="ripple"
        v-clipboard:copy="install"
        v-tooltip.bottom="{content: 'Click to copy', delay: {show: 500, hide: 100}}"
      )
        p.install__code--text.code {{ install }}

      div.install__link--wrapper
        p.install__link--title Installation & Code usage
        a.install__link--link(
          v-for="(value, key) in url"
          :key="key"
          target="_blank"
          :href="value"
          v-tooltip.bottom="{content: 'via ' + key + ' (new tab)' , delay: {show: 500, hide: 100}}"
        ) {{ key }}
</template>

<script>
import {globalVar} from '../globalVar.js'

export default {
  data () {
    return {
      install: globalVar.install,
      url: {
        GitHub: globalVar.githubURL,
        NPM: globalVar.npmURL,
      }
    }
  },

  methods: {
    toast () {
      this.$toasted.show('Copied!', {
        theme: "primary",
        position: "bottom-center",
        duration : 2000
      })
    }
  },

}
</script>

<style lang="scss">

#install {

  .container {

    .install__code--wrapper {
      display: table;
      width: $grid96x;
      cursor: pointer;
      height: $grid12x;
      margin: $grid12x auto;
      background-color: $texteee;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;

      @media #{$pablet} {
        width: 100%;
      }

      .install__code--text {
        text-align: center;
        display: table-cell;
        vertical-align: middle;
      }
    }

    .install__link--wrapper {
      text-align: center;
      margin: $grid16x 0 $grid8x;

      .install__link--title {
        margin-bottom: $grid2x;
      }

      .install__link--link {

        &:last-child {

          &::before {
            cursor: text;
            content: " | ";
            color: $text999;
          }
        }
      }
    }
  }
}
</style>
