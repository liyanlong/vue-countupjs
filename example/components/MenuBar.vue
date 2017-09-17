<template>
  <div class="menubar">
    <ul>
      <router-link tag="li"  to="/" exact>
        <a>首页</a>
      </router-link>
      <router-link tag="li" to="/api">
        <a>API</a>
      </router-link>
      <router-link tag="li" to="/demo">
        <a>DEMO</a>
      </router-link>
      <router-link tag="li" to="/changelog">
        <a>CHANGELOG</a>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
.menubar {
  float:right;
  font-size: 16px;
  font-family: Lato,Helvetica Neue For Number,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif;
  margin: 0;
}

.menubar ul {
  display: flex;
}
.menubar li {
  list-style: none;
  margin: 0 10px;
}
.menubar li a {
  height: 48px;
  line-height: 48px;
  font-weight: bold;
}
</style>
