<template>
  <div>
    <label>案例选择：</label>
    <select v-model="selected">
      <option v-for="select in selectList" :value="select['name']" :keys="select['name']">
        {{select['demoName']}}
      </option>
    </select>
    <transition name="fade">
      <component :is="selected" />
    </transition>
  </div>
</template>

<script>
  const components = {}
  const requireContext = require.context('../components/demo/', true, /Demo.vue$/)
  let modules = requireContext.keys().map(requireContext)

  modules = modules.sort(function (a, b) {
    let compare = (a['sort'] || 0) - (b['sort'] || 0)
    if (compare > 0) {
      return -1
    } else if (compare < 0) {
      return 1
    }
    return 0
  })

  let selectList = []
  for (var module of modules) {
    components[module.name] = module
    selectList.push({name: module.name, demoName: module.demoName})
  }
  export default {
    data () {
      return {
        selected: selectList[0]['name'],
        selectList: selectList
      }
    },
    components
  }
</script>