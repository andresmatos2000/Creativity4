<template>
  <div class="about">
        <div id="Top">
          <h1>Update your Salad</h1>
          <span class="button noSelect" @click="toggle" style="background-color: rgb(154,154,154)" value="Meats">Meats</span>
          <span class="button noSelect" @click="toggle" value="Rice">Rice</span>
          <span class="button noSelect" @click="toggle" value="Veggies">Veggies</span>
        </div>
        <div id="Container">
          <!-- VEGGIES -->
          <div id="Veggies" class="hidden">
            <div class="item">
              <div class="card">
                <img src="..\assets\Images\black_beans.png" alt="">
                <h3>Black Beans</h3>
                <label class="container">
                  <button class="veggie button" @click="addVeggie" value="Black Beans">Add</button>
                  <button class="veggie button" @click="removeVeggie" value="Black Beans">Remove</button>
                </label>
              </div>
            </div>
            <div class="item">
              <div class="card"><img src="..\assets\Images\pinto_beans.png" alt="">
                <h3>Pinto Beans</h3>
                <label class="container">
                  <button class="veggie button" @click="addVeggie" value="Pinto Beans">Add</button>
                  <button class="veggie button" @click="removeVeggie" value="Pinto Beans">Remove</button>
                </label>
              </div>
            </div>
            <div class="item">
              <div class="card"><img src="..\assets\Images\corn.png" alt="">
                <h3>Corn</h3>
                <label class="container">
                  <button class="veggie button" @click="addVeggie" value="Corn">Add</button>
                  <button class="veggie button" @click="removeVeggie" value="Corn">Remove</button>
                </label>
              </div>
            </div>
            <div class="item">
              <div class="card"><img src="..\assets\Images\lettuce.png" alt="">
                <h3>Lettuce</h3>
                <label class="container">
                  <button class="veggie button" @click="addVeggie" value="Lettuce">Add</button>
                  <button class="veggie button" @click="removeVeggie" value="Lettuce">Remove</button>
                </label>
              </div>
            </div>
            <div class="item">
              <div class="card"><img src="..\assets\Images\tomatoes.png" alt="">
                <h3>Tomatoes</h3>
                <label class="container">
                  <button class="veggie button" @click="addVeggie" value="Tomatoes">Add</button>
                  <button class="veggie button" @click="removeVeggie" value="Tomatoes">Remove</button>
                </label>
              </div>
            </div>
            <div class="item">
              <div class="card"><img src="..\assets\Images\red_onions.png" alt="">
                <h3>Red Onions</h3>
                <label class="container">
                  <button class="veggie button" @click="addVeggie" value="Red Onions">Add</button>
                  <button class="veggie button" @click="removeVeggie" value="Red Onions">Remove</button>
                </label>
              </div>
            </div>
            <div class="item">
              <div class="card">
                <h3>No Veggies</h3>
                <label class="container">
                  <input @change="clearVeggies" value="No Veggies" type="checkbox">
                  <span class="checkmark"></span>
                </label>
              </div>
            </div>
          </div>
          <!-- RICES -->
          <div id="Rice" class="hidden">
            <div class="item">
              <div class="card"><img src="..\assets\Images\white_rice.png" alt="">
                <h3>White Rice</h3>
                <label class="container">
                  <button class="rice button" @click="addRice" value="White Rice">Add</button>
                  <button class="rice button" @click="removeRice" value="White Rice">Remove</button>
                </label>
              </div>
            </div>
            <div class="item">
              <div class="card"><img src="..\assets\Images\brown_rice.png" alt="">
                <h3>Brown Rice</h3>
                <label class="container">
                  <button class="rice button" @click="addRice" value="Brown Rice">Add</button>
                  <button class="rice button" @click="removeRice" value="Brown Rice">Remove</button>
                </label>
              </div>
            </div>
            <div class="item">
              <div class="card"><img src="..\assets\Images\cauliflower_rice.png" alt="">
                <h3>Cauliflower Rice</h3>
                <label class="container">
                  <button class="rice button" @click="addRice" value="Cauliflower Rice">Add</button>
                  <button class="rice button" @click="removeRice" value="Cauliflower Rice">Remove</button>
                </label>
              </div>
            </div>
            <div class="item">
              <div class="card">
                <h3>No Rice</h3>
                <label class="container">
                  <input @change="clearRice" value="No Rice" type="checkbox">
                  <span class="checkmark"></span>
                </label>
              </div>
            </div>
          </div>
          <!-- MEATS -->
          <div id="Meats" class="">
            <div class="item">
              <div class="card">
                <img src="..\assets\Images\chicken.png" alt="">
                <h3>Chicken</h3>
                <label class="container">
                  <button class="meat button" @click="addMeat" value="Chicken">Add</button>
                  <button class="meat button" @click="removeMeat" value="Chicken">Remove</button>
                </label>
              </div>
            </div>
            <div class="item">
              <div class="card"><img src="..\assets\Images\pork.png" alt="">
                <h3>Pork</h3>
                <label class="container">
                  <button class="meat button" @click="addMeat" value="Pork">Add</button>
                  <button class="meat button" @click="removeMeat" value="Pork">Remove</button>
                </label>
              </div>
            </div>
            <div class="item">
              <div class="card"><img src="..\assets\Images\beef.png" alt="">
                <h3>Beef</h3>
                <label class="container">
                  <button class="meat button" @click="addMeat" value="Beef">Add</button>
                  <button class="meat button" @click="removeMeat" value="Beef">Remove</button>
                </label>
              </div>
            </div>
            <div class="item">
              <div class="card"><img src="..\assets\Images\pepperoni.png" alt="">
                <h3>Pepperoni</h3>
                <label class="container">
                  <button class="meat button" @click="addMeat" value="Pepperoni">Add</button>
                  <button class="meat button" @click="removeMeat" value="Pepperoni">Remove</button>
                </label>
              </div>
            </div>
            <div class="item">
              <div class="card"><img src="..\assets\Images\salami.png" alt="">
                <h3>Salami</h3>
                <label class="container">
                  <button class="meat button" @click="addMeat" value="Salami">Add</button>
                  <button class="meat button" @click="removeMeat" value="Salami">Remove</button>
                </label>
              </div>
            </div>
            <div class="item">
              <div class="card">
                <h3>No Meat</h3>
                <label class="container">
                  <input @change="clearMeat" value="No Meat" type="checkbox">
                  <span class="checkmark"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
    <button type="submit" class="button" @click="update">Update Cart</button>
  </div>
</template>
<style scoped>
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

  .card {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: left;
    border: 1px solid black;
  }
  .add {
    background-color: green;
    transition: background-color .5s linear;
  }
  .remove {
    background-color: red;
    transition-duration: .5s;
    transition-property: background-color;
  }

  .card img {
    width: 25%;
  }
  .card h3 {
    margin-left: 5%;
  }

  #Container {
    display: flex;
  }

  #Left {
    min-height: 50vh;
    width: 50%;
    border: 1px solid black;
  }

  #Right {
    width: 50%;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
  }

  #Top {
    height: 50%;
    border: 1px solid black;
  }

  #Bottom {
    height: 50%;
    border: 1px solid black;
    overflow-y: scroll
  }

  #Veggies,
  #Rice,
  #Meats {
    display: flex;
    flex-wrap: wrap;
  }

  #Bottom div {
    cursor: pointer;
  }

  .hidden {
    display: none !important;
  }

  .item {
    flex-basis: 45%;
    margin: 2.5%;
  }

  .noSelect {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }



  /* */
  /* Customize the label (the container) */
  .container {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-left: 5%;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  /* Hide the browser's default checkbox */
  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
  }

  /* On mouse-over, add a grey background color */
  .container:hover input~.checkmark {
    background-color: #ccc;
  }

  /* When the checkbox is checked, add a blue background */
  .container input:checked~.checkmark {
    background-color: #2196F3;
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */
  .container input:checked~.checkmark:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  .container .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
</style>
<script>
import axios from 'axios'
export default {
    data () {
        return {
            item: null,
         meats: [],
        veggies: [],
        rices: [],
        additem: null
        }
    },
    created() {
    this.getItem(); 
    },
    methods: {
        async getItem() {
        try {
            let itemID = this.$route.params.slug;
            let response = await axios.get(`/api/items/`);
            this.item = response.data.find(findItem => findItem._id === itemID);
            this.item.Meats.forEach((e) => {
                this.meats.push(e);
                document.querySelector(`[value='${e}']`).classList.add("add");
            })
            this.item.Rices.forEach((e) => {
                this.rices.push(e);
                document.querySelector(`[value='${e}']`).classList.add("add");
            })
            this.item.Veggies.forEach((e) => {
                this.veggies.push(e);
                document.querySelector(`[value='${e}']`).classList.add("add");
            })
            return this.item;
        } catch (error) {
            //console.log(error);
        }
     },
     async update() {
      try {
        console.log(this.meats)
        // [INFO] IF ARRAY IS EMPTY
        if(this.meats.length == 0)
          this.meats.push("No Meat")
        if(this.rices.length == 0)
          this.rices.push("No Rice")
        if(this.veggies.length == 0)
          this.veggies.push("No Veggies")

          if(this.meats.includes("No Meat") && this.rices.includes("No Rice") && this.veggies.includes("No Veggies"))
        return alert("You must add atleast one item to your order")

        let r2 = await axios.put('/api/items/' + this.item._id, {
          Meats: this.meats,
          Rices: this.rices,
          Veggies: this.veggies
        });
        this.addItem = r2.data;
        console.log(this.addItem);
        document.location.href = "/cart";
      } catch (error) {
        //console.log(error);
      }
    },//MEATS
      addMeat(event) {
        //console.log(event)
        let value = event.target.attributes.value.nodeValue;
        if(this.meats.includes(value))
        return

        document.querySelector(`[value='${value}']`).classList.add("add");

        this.meats.push(value);
        if(this.meats.includes("No Meat")){
          console.log("includes")
          let index = this.meats.indexOf("No Meat");
          this.meats.splice(index, 1);
          document.querySelector("[value='No Meat']").checked = false;
        }
      },
      removeMeat(event) {
        let value = event.target.attributes.value.nodeValue;
        document.querySelectorAll(`[value='${value}']`)[0].classList.remove("add");
         document.querySelectorAll(`[value='${value}']`)[1].classList.add("remove");
        setTimeout(function(){ document.querySelectorAll(`[value='${value}']`)[1].classList.remove("remove"); }, 1000);

        if(this.meats.includes(value)){
          let index = this.meats.indexOf(value);
          this.meats.splice(index, 1);
        }
      },
      clearMeat(){
          document.querySelectorAll(`#Meats .add`).forEach((e) => {e.classList.remove("add")})
        this.meats = [];
        this.meats.push("No Meat");

      }, //VEGGIES
      addVeggie(event) {
        //console.log(event)
        let value = event.target.attributes.value.nodeValue;
        if(this.veggies.includes(value))
        return

                document.querySelector(`[value='${value}']`).classList.add("add");
        this.veggies.push(value);
        if(this.veggies.includes("No Veggies")){
          console.log("includes")
          let index = this.veggies.indexOf("No Veggies");
          this.veggies.splice(index, 1);
          document.querySelector("[value='No Veggies']").checked = false;
        }
      },
      removeVeggie(event) {
        let value = event.target.attributes.value.nodeValue;
        document.querySelectorAll(`[value='${value}']`)[0].classList.remove("add");
         document.querySelectorAll(`[value='${value}']`)[1].classList.add("remove");
        setTimeout(function(){ document.querySelectorAll(`[value='${value}']`)[1].classList.remove("remove"); }, 1000);

        if(this.veggies.includes(value)){
          let index = this.veggies.indexOf(value);
          this.veggies.splice(index, 1);
        }
      },
      clearVeggies(){
          document.querySelectorAll(`#Veggies .add`).forEach((e) => {e.classList.remove("add")})
        this.veggies = [];
        this.veggies.push("No Veggies");

      },//RICE
      addRice(event) {

        let value = event.target.attributes.value.nodeValue;
        if(this.rices.includes(value))
        return
        
        document.querySelector(`[value='${value}']`).classList.add("add");
        this.rices.push(value);
        if(this.rices.includes("No Rice")){
          console.log("includes")
          let index = this.rices.indexOf("No Rice");
          this.rices.splice(index, 1);
          document.querySelector("[value='No Rice']").checked = false;
        }
      },
      removeRice(event) {
        let value = event.target.attributes.value.nodeValue;
        document.querySelectorAll(`[value='${value}']`)[0].classList.remove("add");
        document.querySelectorAll(`[value='${value}']`)[1].classList.add("remove");
        setTimeout(function(){ document.querySelectorAll(`[value='${value}']`)[1].classList.remove("remove"); }, 1000);

        if(this.rices.includes(value)){
          let index = this.rices.indexOf(value);
          this.rices.splice(index, 1);
        }
      },
      clearRice(){
        document.querySelectorAll(`#Rice .add`).forEach((e) => {e.classList.remove("add")})
        this.rices = [];
        this.rices.push("No Rice");

      },
      toggle(event) {
        let value = event.target.attributes.value.nodeValue;
        //Color Change for buttons
        let spans = document.querySelectorAll("#Top span");
        spans.forEach((e) => {
          e.style.background = "#ddd";
        });
        document.querySelector(`[value="${value}"]`).style.background = "rgb(154,154,154)";
        console.log(event)

        //Visibile Div

        let divs = document.querySelectorAll("#Container > div");
        //console.log(divs);
        divs.forEach((e) => {
          e.classList.add("hidden");
        })
        document.querySelector(`#${value}`).classList.remove("hidden");

      }
    }
}
</script>