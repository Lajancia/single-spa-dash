<template>
  <header>
    <h1>
      <router-link to="/"
        ><img alt="Vue logo" src="../../assets/logo.png" width="80"
      /></router-link>
    </h1>
    <div class="menuWrap">
      <ul class="menu">
        <li><router-link to="/app1/write">게시판</router-link></li>
        <li><router-link to="/app1/about">Introduce</router-link></li>
        <li><router-link to="/app1/dashboard1">Dashboard1</router-link></li>
        <li><router-link to="/app1/dashboard2">Dashboard2</router-link></li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  width: 100%;
  text-align: center;
  position: relative;
  height: 120px;
  border-bottom: 1px solid #35495e;
}
header h1 {
  position: absolute;
  top: 0;
  left: 100px;
}
header ul.menu:after {
  display: block;
  clear: both;
  content: "";
}
header ul.menu {
  position: absolute;
  top: 20px;
  right: 50px;
}
header ul.menu li {
  float: left;
  padding: 10px 20px;
  list-style: none;
}

a {
  text-decoration: none;
  color: #333;
}
</style>
