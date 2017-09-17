## 介绍
> `vue-countupjs` 是基于 `CountUp.js` 的一个轻量级 Vue 组件, 是一个轻量级的数字增长动画

## npm 安装

```bash
  npm install vue
  npm install vue-countupjs
```
## npm 使用
```javascript
  import Vue from 'vue'
  import VueCountUp from 'vue-countupjs'
  Vue.use(VueCountUp)
```
<br>

## Browser安装

```markdown
<script src='https://unpkg.com/vue@2.3.3'></script>
<script src='https://unpkg.com/vue-countupjs'></script>
```

<br>

## Browser使用

```html
 <div id="app">
  <v-countup :start-value="1" :end-value="100"></v-countup>
 </div>
```

```javascript
  new Vue({
    el: "#app"
  })
```

<br>

## 线上DEMO

- [jsFiddle 地址](https://jsfiddle.net/liyl/mnz95c42/)
