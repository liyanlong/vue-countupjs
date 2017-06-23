# vue-countupjs
>  基于 CountUp.js 的 Vue 组件, 简易数字动画跳动
>  默认使用 `window.requestAnimFrame` 动画桢进行更新跳动数字


## Installation

**使用npm安装**

```
  npm install vue-countupjs
```

**浏览器**
```html
<script src='https://unpkg.com/vue@2.3.3'></script>
<script src='https://unpkg.com/vue-countupjs'></script>
```

## Example

**webpack引用**

```html
  <div id="app"></div>
```
```javascript
import Vue from 'vue'
import VueCountUp from 'vue-countupjs'
new Vue({
  el: '#app',
  render (h) {
    return h(VueCountUp.component, {
      props: {
        start: 1,
        endt: 100
      }
    }, '')
  }
})
```

**浏览器直接引用**
```html
  <body>
    <div id="app">
      <v-countup :start-value="start" :end-value="end"></v-countup>
    </div>
    <script src='https://unpkg.com/vue@2.3.3'></script>
    <script src='https://unpkg.com/vue-countupjs'></script>
    <script>
      Vue.use(VueCountUp)
      var template = ''
      var app = new Vue({
        data: {
          start: 1,
          end: 100
        },
        el: "#app"
      })
    </script>
  </body>
```
