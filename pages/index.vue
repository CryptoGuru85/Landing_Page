<template>
<div class="back-color">
  <NuxtLogo/>
  <Navbar/>
  <Title/>
  <Main/>
  <Carousel/>
  <SlideNav/>
  <Sticky/>
  <Footbar/>

</div>
</template>

<script>
import NuxtLogo from '../components/NuxtLogo.vue'
import Title from '../components/Title.vue'
import Navbar from '../components/Navbar.vue'
import Main from '../components/Main.vue'
import Footbar from '../components/Footbar.vue'
import Sticky from '../components/Sticky.vue'
import SlideNav from '../components/SlideNav.vue'
import Carousel from '../components/Carousel.vue'


export default {
   components: {
    NuxtLogo,
    Title,
    Navbar,
    Main,
    Footbar,
    Sticky,
    SlideNav,
    Carousel,
  },
}
</script>
<style>
  .back-color {
    background-color: #E6EDF9;
  }
</style>
