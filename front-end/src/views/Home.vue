<template>

  <div>
    <h2>Add One of Our Favorites!</h2>
        <small style="font-size: .75rem; font-weight:200">[WARNING] Images don't resemble actual ingredients</small>
    <div class="home">
      <div class="card" v-for="item in this.mock" :key="item.id">
        <img :src="item.src" :alt="item.title">
        <h1>{{item.title}}</h1>
        <p>Meats: {{item.meats.join(", ")}}</p>
        <p>Rices: {{item.rices.join(", ")}}</p>
        <p>Veggies: {{item.veggies.join(", ")}}</p>
        <p>Members Who Love It: {{item.test.join(", ")}}</p>
        <button v-if="!item.link" @click="addToCart(item)" class="button">Add To Cart</button>
        <router-link v-if="item.link" tag="button" class="button" to="/build">Customize</router-link>
      </div>
      
    </div>
    
  </div>
</template>
<style scoped>
.home {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.card {
  flex-basis: 22%;
  margin:2% 2%;
  padding:2%;
  text-align: left;
}
img {
  max-width: 200px;
}
.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
}
</style>
<script>
// @ is an alias to /src
import axios from 'axios'
export default {
  name: 'Home',
  data(){
    return {
      mock: [],
      members: null,
      favorites: []
    }
  },
  created(){
    this.getMembers();
  },
  methods:{
    async addToCart(item){
      try {
        let r2 = await axios.post('/api/items', {
          Meats: item.meats,
          Rices: item.rices,
          Veggies: item.veggies
        });
        this.addItem = r2.data;
        document.location.href = "/cart";
      } catch (error) {
        //console.log(error);
      }
    },
    async getMembers(){
            try {
            let response = await axios.get("/api/members");
            this.members = response.data;
            console.log(this.members);
            this.mock = [{src: require('../assets/Images/salad1.png'),value: "Jack of All Trades", title: "Jack of All Trades", meats: ["Pepperoni","Salami"], rices: ["White Rice"], veggies: ["Pineapple","Red Onions"],test: [], id: 0},
      {src: require('../assets/Images/Salad2.png'), value: "Keep It Simple", title: "Keep It Simple", meats: ["Chicken"], rices: ["Brown Rice"], veggies: ["Pinto Beans","Black Beans"], test: [], id: 1},
      {src: require('../assets/Images/salad3.png'), value: "I'd Rather Customize", title: "Customize Your Own!", link: "/build", meats: ["?"], rices: ["?"], veggies: ["?"], test: [], id: 2}]

      for(let i = 0; i < this.members.length; i++){
        for(let j = 0; j < this.mock.length; j++){
        if(this.members[i].favoriteSalad == this.mock[j].value){
          this.mock[j].test.push(this.members[i].firstName);
        }
        }
        
      }
            return true;
        } catch (error) {
            //console.log(error);
        }
    },
  }
}
</script>
