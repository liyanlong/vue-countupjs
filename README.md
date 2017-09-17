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
[jsFiddle 地址](https://jsfiddle.net/liyl/mnz95c42/)

## Documentantion

**-- tag**

default: `span`

desc: 数字的包装器


**-- startValue**

default: `0`

desc: 起始值

**-- endValue**

default: `0`

desc: 结束值

**-- decimals**

default: `0`

desc: 小数位数， 默认为 `0`

**-- duration**

default: `2`

desc: 动画持续时间， 默认为 `2` s

**-- delay**

default: `0`

desc: 延时更新时间, `0` 为不延时

**-- immediate**

default: `true`

desc: 是否立即执行动画


**-- options**

type: `object`

default:  

```javascript
{
  useEasing: true, // 缓动动画 easing
  useGrouping: true, // 1,000,000 vs 1000000
  separator: ',', // 数字分隔符
  decimal: '.', // 小数分隔符
  prefix: '', // 前缀
  suffix: '' // 后缀
}
```

desc: countup配置项

**-- animateClass**

type: `string` or `array`

required: false

desc: 执行期间动画, 执行后删除，优先级低于`animatedClass`

**-- animatedClass**

type: `string`

default: `animated`

desc: 执行前插入, 执行后删除
