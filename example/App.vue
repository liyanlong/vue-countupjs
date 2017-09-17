<template>
  <div id="app">
    <h1 class="header"> 
      <div class="wrap" style="padding-left: 50px;">
        <i id="github"><a class="block" href="https://github.com/liyanlong"></a></i>
        vue-countupjs &nbsp;
        <small id="version" class="lt-gray">{{version}}</small>
        <menu-bar></menu-bar>
      </div>
    </h1>
    <router-view class="wrap"></router-view>
    <a class="forkMe" href="https://github.com/liyanlong/vue-countupjs">
      <img src="./assets/img/forkme_custom_indigo.png" alt="Fork me on GitHub">
    </a>
  </div>
</template>

<script>
import VueCountUp from 'vue-countupjs'
import Prism from 'prismjs'

import MenuBar from './components/MenuBar.vue'

const animateFnMap = {
  easeOutExpo (t, b, c, d) {
    return c * (-Math.pow(2, -10 * t / d) + 1) * 1024 / 1023 + b
  },
  outQuintic (t, b, c, d) {
    var ts = (t /= d) * t
    var tc = ts * t
    return b + c * (tc * ts + -5 * ts * ts + 10 * tc + -10 * ts + 5 * t)
  },
  outCubic (t, b, c, d) {
    var ts = (t /= d) * t
    var tc = ts * t
    return b + c * (tc + -3 * ts + 3 * t)
  }
}

export default {
  name: 'app',
  data () {
    return {
      version: VueCountUp.version
    }
  },
  components: {
    MenuBar
  }
}
</script>

<style>
  @import './assets/style.css';
  @import './assets/prism.css';    
  .animated {
    animation-duration: 0.5s;
    animation-fill-mode: both;
  }
  .bounce {
    animation-name: bounce;
    transform-origin: center bottom;
  }
  @keyframes bounce {
    from, 20%, 53%, 80%, to {
      animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
      transform: translate3d(0,0,0);
    }

    40%, 43% {
      animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
      transform: translate3d(0, -30px, 0);
    }

    70% {
      animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
      transform: translate3d(0, -15px, 0);
    }

    90% {
      transform: translate3d(0,-4px,0);
    }
  }
</style>
