<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <router-link  to="/home">home</router-link>
    <router-link to="/search">search</router-link>
    <router-link to="/order">order</router-link>
    <router-link to="/person">person</router-link>
    <router-view/> -->
    <!-- <FooterBar Footbarlist="data.Footbarlist"></FooterBar> -->
    <FooterBar :footlist="Footbarlist"></FooterBar>
  </div>
</template>

<script>
import FooterBar from "./router/component/footbat";
export default {
  name: "App",
  data(){
    return{
      Footbarlist:[
        {label:"首页",name:"home"},
        {label:"搜索",name:"serch"},
        {label:"订单",name:"order"},
        {label:"我",name:"person"}
      ]
    }
  },
  components: {
    FooterBar
  }
};
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
