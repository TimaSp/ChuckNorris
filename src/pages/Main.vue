<template>
  <div class="main">
    <div class="logo">
      <img src="https://api.chucknorris.io/img/chucknorris_logo_coloured_small.png" alt="">
    </div>
    <div class="navlinks">
      <b-button class="generate" v-on:click="generateJoke">
        <b-spinner small v-show="loadjoke" label="Loading..."></b-spinner>
         Generate joke
      </b-button>

     <router-link :to="{ name: 'Favs'}">
       <b-button class="generate" v-on:click="generateJoke">
          Favorite list
        </b-button>
      </router-link>

      <b-button class="generate" variant="secondary" v-on:click="startGenerate">
        <b-spinner small v-show="generating" label="Loading..."></b-spinner>
        Start generate
      </b-button>
    </div>
    <sjoke v-if="jokeTxt" :text="jokeTxt" />

  </div>
</template>

<script>
import sjoke from '../components/joke'
import axios from 'axios'

export default {
  name: "Jokes",
  props: {},
  data() {
    return {
      jokeTxt: '',
      loadjoke: false,
      generating: false
    }
  },
  components: {
    sjoke
  },
  methods: {
    generateJoke() {
      this.loadjoke = true
      axios.get(`https://api.chucknorris.io/jokes/random`)
        .then(response => {
          this.jokeTxt = response.data.value
          this.loadjoke = false;
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    startGenerate() {
      this.generating = !this.generating;
      this.generating ? this.getJoke() : ""
    },
    getJoke() {
      setTimeout(() => {
        if(this.generating) {
          axios.get(`https://api.chucknorris.io/jokes/random`)
          .then(response => {
              this.jokeTxt = response.data.value
              this.getJoke();
          })
          .catch(e => {
            this.errors.push(e)
          })
        }
      }, 3000);
    }
    // moveToFav() {
    //   this.router.push({ name: 'Favs'})
    // }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.generate { 
  display: flex;
  justify-content: center;
  align-items: center;
}
.navlinks { 
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px;
  background:#5f3711;
}
</style>
