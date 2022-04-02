<template>
  <div>
    <div class="board">
      <div class="board-logo">
        <img src="~/assets/img/logo.png" class="logo" />
        <div id="logo-text">Lorem ipsum dolar sit amet, consecetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, Ut, enim ad minim.</div>
      </div>
      <div class="board-text">
        <div class="text-back1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, Ut enim ad minim veniam, quia nostrud exercitation ullamco labories nisi</div>
        <div class="text-back2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et </div>
        <div class="circle1"></div>
        <div class="circle2"></div>
        <div class="circle3"></div>
      </div>
      <div class="slide-title">Lorem ipsum dolor sit amet, consectetur <br/>adipiscing elit, sed do eiusmod</div>
    </div>
  </div>
</template>
<style>
  .main-back {
    background-color: #E6EDF9;
  }
  .board {
    width: 80%;
    margin: 0 auto;
    padding: 40px 50px;
    background-color: white;
    margin-top: -40px;
  }
  .logo {
    width: 100%;
    margin-right: 20px;
  }
  #logo-text {
    margin-left: 20px;
    font-family: 'ITCAvantGardeStd-Md';
  }
  .sticky-nav{
    transition: 100ms;
    padding: 20px;
  }
  .board-logo {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .board-text {
    position: relative;
    padding: 20px 0;
  }
  .text-back1 {
    background-color: #525CA3;
    padding: 5px 20px;
    border-radius: 50px 50px 50px 0;
    margin-bottom: 20px;
    color: white;
    position: relative;
    z-index: 50;
  }
  .text-back2 {
    background-color: #9471B1;
    padding: 5px 20px;
    border-radius: 0 50px 50px 0;
    color: white;
    position: relative;
    z-index: 50;
  }
  .circle1 {
    width: 50px;
    height: 50px;
    background-color: #CCBBDA;
    border-radius: 50%;
    position: absolute;
    right: -20px;
    top: 120px;
    z-index: 40;
    opacity: 0.6;
  }
  .circle2 {
    width: 20px;
    height: 20px;
    background-color: #CCBBDA;
    border-radius: 50%;
    position: absolute;
    right: -20px;
    top: 120px;
    z-index: 45;
    opacity: 0.6;
  }
  .circle3 {
    width: 30px;
    height: 30px;
    background-color: #E7E8F2;
    border-radius: 50%;
    position: absolute;
    right: -30px;
    top: 30px;
  }
  .slide-title {
    color: #30489F;
    font-size: 25px;
    font-weight: bold;
    text-align: center;
  }
  .slide-logo {
    width: 100px;
    height: 40px;
  }
  .contact-btn {
    color: white;
    background: #30489f;
  }
  .slide {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom-left-radius: 100px;
    background-color: white;
    padding: 30px 20px;

  }
  .outline-slide {
    border: 2px solid #BBBAC6;
    background-color: #EEE8F2;
    width: 100%;
    margin: 10px 0;
  }
  .slides {
    display: none;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .mobile-slides {
    display: block;
  }
  .slide-text-body {
    padding: 30px 0;
  }
  .slide-text-footer {
    padding: 10px 0;
    text-align: center;
  }
  .slide-text-title {
    padding: 10px 0;
  }
  .arrow-nav {
    background-color: #E6EDF9;
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 15px 0;
    color: #30489F;
  }
  .arrow-button {
    display: flex;
    align-items: center;
    font-weight: bold;
  }
  .previous-btn {
    display: flex;
    justify-content: flex-end
  }
  @media screen and (min-width: 800px) {
    .board-logo {
      flex-direction: row;
    }
    .slides {
      display: flex;
    }
    .mobile-slides {
      display: none;
    }
    .outline-slide {
      width: 500px;
    }
  }
</style>

