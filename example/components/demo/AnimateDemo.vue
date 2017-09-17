<template>
  <div>
    <section>
    <v-countup 
      :start-value="startValue"
      :end-value="endValue"
      tag="h1"
      class="jumbo"
      animate-class="highlight"
    />
  </section>
  </div>
</template>

<script>
  export default {
    name: 'AnimateDemo',
    sort: 0,
    demoName: '带动画案例',
    data () {
      return {
        startValue: 0,
        endValue: 100
      }
    }
  }
</script>

<style lang="css">
  h1.highlight {
    color: #fff;
    background-color: green;
  }
  .animated {
    transition: all 0.3s;
  }
</style>