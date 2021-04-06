<template>
  <div id="app">
    <div id="nav">
      <div class="navLeft">
        <router-link to="/">Home</router-link>
      </div>
      <div class="navCenter">
        <router-link to="/build">Build</router-link>
      </div>
      <div class="navCenter">
        <router-link to="/Members">Members</router-link>
      </div>
      <div class="navRight">
        <router-link to="/cart"><span>{{this.items.length}}</span><img class="icon" src="./assets/cart.svg" alt=""></router-link>
      </div>
    </div>
    <router-view/>
    
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,500;1,700&display=swap');


body {
  margin: 0;
  box-sizing: border-box;
}
.icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
}
.button {
    background-color: #ddd;
    border: none;
    color: black;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 16px;
  }
#app {
  min-height: 80vh;
  font-family: 'Prompt', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#footer {
  font-family: 'Prompt', sans-serif;
}

#nav {
  padding: 30px;
  display:flex;
  margin: 0 auto;
  padding:30px 10vw;
  max-width:80vw;
  background-color: #003049;
}
#nav > div {
  padding: 0 1rem;
}
.navLeft{
  flex-basis:40%;
  text-align: left;
}
.navCenter {
  flex-basis:20%;
  text-align: center;
}
.navRight {
  flex-basis: 40%;
  text-align: right;
}
.navRight span {
  margin-right: 10px;
  position: relative;
  bottom: 10%;
}
#nav a {
  font-weight: bold;
  color: #f77f00;
  text-decoration: none;
  font: size 1.1rem;
}


#nav a.router-link-exact-active {
  color: #eae2b7;
  text-decoration: underline;
}
#nav a:hover {
  color:#fcbf49;
}
h1 {
  color: #d62828;
}
</style>
<script>
import axios from 'axios'
export default {
  data(){
    return{
        items: 0
    }
  },
  created() {
    this.getItems();
    },
    methods: {
        async getItems() {
        try {
            let response = await axios.get("/api/items");
            this.items = response.data;
            return true;
        } catch (error) {
            //console.log(error);
        }
     },
    }
}
</script>