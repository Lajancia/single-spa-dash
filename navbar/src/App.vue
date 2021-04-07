<template>
  <div id="navbar-app">
    <router-link to="/navbar"><h1>MicroFrontend-single-spa</h1></router-link>
    <div id="nav">
      <router-link to="/app1">게시판</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<style>
#navbar-app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
}
#nav {
  box-sizing: border-box;
  margin: 0px;
  padding: 37px;
  /* float:left; */
  text-align: left;
  background-color: steelblue;
}
h1 {
  padding: 31px;
  box-sizing: border-box;
  float: none;
  text-align: center;
  /* background-color:slategray; */
  margin: 0px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
  text-align: left;
}
</style>
