<template>
  <div class="footbar">
    <div class="header">
      <img src="~/assets/img/logo.png" width="50" height="30" />
      <ul>
        <li>Follow US</li>
        <li>
          <b-icon
              class="f-icon"
              icon="twitter"
              size="is-small">
          </b-icon>
        </li>
        <li>
          <b-icon
              class="f-icon"
              icon="facebook"
              size="is-small">
          </b-icon>
        </li>
      </ul>
    </div>
    <div  class="body">
      <ul>
        <li>Legal Notice</li>
        <li>Privacy Policy</li>
        <li>Contact</li>
      </ul>
      <div class="body-right">
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </div>
    </div>
  </div>
</template>

<style>

.header {
  padding: 20px 15px;
  background: #30489f;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  color: white;
}
.footbar ul li {
  list-style-type: none;
  display: inline;
}
.body ul li {
    display: block;
  }
.f-icon {
  padding: 15px;
  border: 1px solid white;
  border-radius: 50%;
}
.f-icon:hover {
  cursor: pointer;
}
.f-icon:last-child {
  background: #30489f;
  color: white;
}
.header ul {
  margin-top: 20px;
}
.header ul li:nth-child(2){
  margin: 0 20px;
}
.footbar .body {
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  background: #2b2b38;
  color: white;
  font-size: 13px;
}
.body ul li:nth-child(2){
  margin: 0;
}
.body-right{
  width: 100%;
}
.body-right p {
    text-align: center;
  }
</style>
<style scoped>
@media screen and (min-width: 800px) {
  .footbar .header, .footbar .body{
    flex-direction: row;
    align-items: initial;
  }
  .header ul li:nth-child(2){
    margin: 0 5px;
  }
  .header ul {
    margin-top: 0;
  }
  .body ul li {
    display: inline;
  }
  .body-right {
    text-align: right;
    width: auto;
  }
  .body-right p {
    text-align: left;
  }
  .body ul li:nth-child(2){
    margin: 0 20px;
  }
}
</style>
