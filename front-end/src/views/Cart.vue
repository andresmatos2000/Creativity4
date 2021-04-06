<template>
    <div id="Container">
        <h1>Your Cart</h1>
        <p v-if="this.items ==0">Cart is empty. Build a <router-link to="/build">salad</router-link></p>
    <div v-if="loading" class="wrapper">
        <div class="item" v-for="(i, index) in this.items" :key="i._id">
        <div class="image">
        <img src="../assets/Images/salad.png" alt="">
        <p>Item {{index + 1}}</p>
        </div>
        
        <div class="dropdown">
        <p>Meats: {{i.Meats.join(", ")}}</p>
        <p>Rices: {{i.Rices.join(", ")}}</p>
        <p>Veggies: {{i.Veggies.join(", ")}}</p>
        </div>
        <div class="buttons">
            <button @click="deleteItem(i._id)" class="button">Delete Item</button>
            <router-link class="button" tag="button" :to="{path: '/edit/' + i._id}">Edit Item</router-link>
        </div>
        <hr>
        </div>
    </div>
    </div>
</template>
<style scoped>
.buttons {
    margin-left: 10%;
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
    .item {
        display: flex;
        align-items: flex-end;
        flex-wrap: wrap;
    }
    .item hr {
        flex-basis: 100%;
    }
  .item img {
      width:20%;
  }
  .dropdown {
      width:30%;
  }
</style>


<script>
import axios from 'axios'
export default {
    data() {
        return {
            items: null,
        }
    },
    created() {
    this.getItems();
    },
    mounted: function() {
            this.loading = true;
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
     async deleteItem(item) {
      try {
        await axios.delete("/api/items/" + item);
        document.location.href = "/cart";
        return true;
      } catch (error) {
        //console.log(error);
      }
    },
     
    }
}
</script>