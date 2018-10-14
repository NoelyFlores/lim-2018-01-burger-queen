<template>
  <div id="app">
      <nav>
        <div class="nav-wrapper">
          <a href="#" class="brand-logo">Logo</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><router-link tag="li" to="/">
              <a>Attention</a>
              </router-link>
            </li>
            <li><router-link to="/admin">Admin</router-link></li>
            <li><a href="collapsible.html">Logout</a></li>
          </ul>
        </div>
      </nav>
    <router-view/>
    <footer>
      <div class="footer-copyright">
        <div class="container">
          © 2018 Copyrigh Noely FC
          <a class="grey-text text-lighten-4 right" href="#!">Agamoslo!!</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
nav {
  background-color: #9E9E9E !important;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
