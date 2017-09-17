<template>
 <div class="col full marginBottom marginTop">
  <div class="code-contain marginBottom">
    <h2>{{title}}</h2>
      <pre :language="language" v-html="parseJs(value)">
    </pre>
  </div>
</div>
</template>

<script>
import Prism from 'prismjs'

export default {
  props: {
    title: {
      type: String,
      require: true
    },
    language: {
      type: String,
      default: 'html'
    },
    value: {
      type: null,
      default: ''
    }
  },
  methods: {
    parseJs (val) {
      let str = typeof val === 'string' ? val : String(val).trim()
      return Prism.highlight(str, Prism.languages.javascript)
    }
  }
}
</script>