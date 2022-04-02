<template>
  <div>
    <div class="board">
      <div class="slides">
        <div class="outline-slide" v-for="index in 3" :key="index">
          <div class="slide">
            <img src="~/assets/img/logo.png" class="slide-logo" />
            <div class="slide-text-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, Ut enim ad minim veniam, quia nostrud exercitation ullamco labories nisi
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, Ut enim ad minim veniam, quia nostrud exercitation ullamco labories nisi
            </div>
            <div class="slide-text-footer">Lorem ipsum dolor sit amet adipiscing<br/>adipiscing elit, sed do eiusmod</div>
            <b-button rounded class="contact-btn">
              GET ANSWERS
            </b-button>
          </div>
        </div>

      </div>
      <div class="mobile-slides">
        <b-carousel>
          <b-carousel-item  v-for="index in 3" :key="index">
            <div class="outline-slide">
              <div class="slide">
                <img src="~/assets/img/logo.png" class="slide-logo" />
                <div class="slide-text-body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, Ut enim ad minim veniam, quia nostrud exercitation ullamco labories nisi
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, Ut enim ad minim veniam, quia nostrud exercitation ullamco labories nisi
                </div>
                <div class="slide-text-footer">Lorem ipsum dolor sit amet adipiscing<br/>adipiscing elit, sed do eiusmod</div>
                <b-button rounded class="contact-btn">
                  GET ANSWERS
                </b-button>
              </div>
            </div>
          </b-carousel-item>
        </b-carousel>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      carousels: [
        { text: 'Slide 1', color: 'primary' },
        { text: 'Slide 2', color: 'info' },
        { text: 'Slide 3', color: 'success' },
        { text: 'Slide 4', color: 'warning' },
        { text: 'Slide 5', color: 'danger' }
      ],
    }
  }
}
</script>

