<template>
  <div>
    <div class="nav-bar">
      <div class="mark">LOREM IPSUM</div>
      <img class="nav-logo" src="~/assets/img/logo.png" width="50" height="30" />
      <ul class="navbar-items" :class="navbarStatus ? 'nav-item-show' : 'nav-item-hidden'">
        <li><a href="#">HOME</a></li>
        <li><a href="#" class="active">LOREM IPSUM</a></li>
        <li><a href="#">LOREM IPSUM</a></li>
        <li><a href="#">LOREM IPSUM</a></li>
      </ul>
      <button class="mobile-menu" @click="navbarStatus = !navbarStatus">
        <b-icon
          icon="view-sequential"
          size="is-medium">
        </b-icon>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      navbarStatus: false
    }
  }
}
</script>
<style>
.nav {
  display: flex;
  justify-content: space-between;
  padding: 5px 20px;
}
a {
  padding: 14px 0px;
  font-size: 17px;
  border-bottom: 3px solid transparent;
  color: #2C46A5;
}

a:hover {
  border-bottom: 3px solid #2C46A5;
}

a.active {
  border-bottom: 3px solid #2C46A5;
}
.navbar-items {
  display: none;
  justify-content: space-around;
  padding: 50px 0;
  font-size: 20px;
  font-weight: bold;
}
.mobile-items {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 50px 0;
  font-size: 20px;
  font-weight: bold;
}
.nav-bar {
  position: relative;
  background-color: white;
  display: flex;
  justify-content: space-between;

}
.mark {
  position: absolute;
  right: 100px;
  background-color: #30489F;
  color: white;
  font-size: 20px;
  padding: 5px 20px;
  font-weight: bold;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  display: none;
}
.nav-logo {
  display: block;
  margin: 10px;
}
.mobile-menu {
  display: block;
  margin: 10px;
}
.nav-item-show {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  display: block;

  background-color: white;
}
.nav-item-show a {
  border-bottom-width: 0px;
}
.nav-item-show li {
  text-align: center;
}
</style>
<style scoped>
@media screen and (min-width: 800px) {
  .navbar-items {
    display: flex;
    width: 100%;
  }
  .nav-logo {
    display: none;
  }
  .mobile-menu {
    display: none;
  }
  .nav-item-show a {
    border-bottom-width: 3px;
  }
  .nav-item-hidden {
    display: flex;
  }
  .mark {
    display: block;
  }
}
</style>
