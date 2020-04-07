<template>
  <div class="favorites">

    <b-button class="generate" @click="clearAll()">
        Clear all
    </b-button>

    <div class="jokesList">
      <div class="noJokesYet" v-show="empty">
        <p>No joker here yet</p>
      </div>
      <div class="list" v-for="(value, name, index) in favjokes" v-bind:key="index">
        <sjoke :text="value" @remove-joke="removeJoke" />
      </div>
    </div>
    
  </div>
</template>

<script>
import sjoke from '../components/joke'

export default {
  name: "Favoirtes",
  components: {
    sjoke
  },
  data() {
    return {
      favjokes: [],
      empty: false
    }
  },
  watch: {
    favjokes(){}
  },
  mounted() {
    this.favjokes = JSON.parse(localStorage.getItem('jokes'))
    this.empty = this.favjokes === null ?  true : false;
  },
  methods: {
    removeJoke(e) {
      this.favjokes.indexOf(e) !== -1 && this.favjokes.splice(this.favjokes.indexOf(e), 1)
      localStorage.setItem('jokes', JSON.stringify(this.favjokes))
    },
    clearAll() {
      localStorage.removeItem('jokes')
      this.favjokes = [];
    }
  }
};
</script>

<style>
.jokesList {
      display: flex;
    flex-wrap: wrap;
    width: 700px;
    margin: 0 auto;
    justify-content: center;
}
.list {
  margin-top: 20px;
}
</style>
