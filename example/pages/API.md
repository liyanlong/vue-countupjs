## 属性说明

**-- tag**

default: `span`

desc: 数字的包装器

<br>

**-- startValue**

default: `0`

desc: 起始值

<br>

**-- endValue**

default: `0`

desc: 结束值

<br>

**-- decimals**

default: `0`

desc: 小数位数， 默认为 `0`

<br>

**-- duration**

default: `2`

desc: 动画持续时间， 默认为 `2` s

<br>

**-- delay**

default: `0`

desc: 延时更新时间, `0` 为不延时

<br>

**-- immediate**

default: `true`

desc: 是否立即执行动画

<br>

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

<br>

**-- animateClass**

type: `string` or `array`

required: false

desc: 执行期间动画, 执行后删除，优先级低于`animatedClass`

<br>

**-- animatedClass**

type: `string`

default: `animated`

desc: 执行前插入, 执行后删除

<br>
