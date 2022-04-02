<template>
    <div id="sticky-footer" class="stickybar" :class="active ? 'stick' : ''">
      <div v-if="active" class="sticky-text">consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
      <div v-else>Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>

    </div>
</template>
<script>
export default {
  data(){
    return {
      active: false
    }
  },
  mounted(){
    let navBar = document.getElementById('sticky-footer');
    let sticky = navBar.offsetTop;
    window.document.onscroll = () => {
      if(window.scrollY + window.innerHeight < sticky){
        this.active = true;
        } else {
        this.active = false;
      }
    }
  }
}
</script>
<style>
  .stick {
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 100;
  }
  .stickybar {
    background-color: white;
    padding: 10px 0;
    text-align: center;
  }
  .sticky-text {
    font-size: 23px;
    font-weight: bold;
  }
</style>
