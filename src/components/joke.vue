<template>
  <div class="main">

    <div class="joke">
      <p>{{text}}</p>
      <b-button v-show="this.$route.name != 'Favs'"  variant="success" @click="makeToast('success')" class="mb-2">Favorite</b-button>
      <b-button v-show="this.$route.name === 'Favs'" variant="danger" @click="makeToastRemove('success', text)" class="mb-2">Remove</b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "joke",
  props: ['text'],
  data() {
    return {
      favjokes: [],
      favlist: false
    }
  },
  mounted() {
    this.favjokes = JSON.parse(localStorage.getItem('jokes'))
  },
  methods: {
    makeToast(variant = null) {
      this.$bvToast.toast('Joke added to favorite list', {
        title: `Variant ${variant || 'default'}`,
        variant: variant,
        solid: true
      })
        let arr = [];
      if(localStorage.getItem('jokes') === null) {
        arr.push(this.text);
        localStorage.setItem('jokes', JSON.stringify(arr))
      } else {
        arr = JSON.parse(localStorage.getItem('jokes'))
        arr.length > 10 ? arr.splice(0, 1) && arr.push(this.text) : arr.push(this.text)
        localStorage.setItem('jokes', JSON.stringify(arr))
      }
    },
    makeToastRemove(variant = null, joke) {
      this.$bvToast.toast('Joke removed from favorite list', {
        title: `Variant ${variant || 'default'}`,
        variant: variant,
        solid: true
      })
      this.$emit('remove-joke', joke);
    }
  }
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .joke {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .joke p {
    font-size: 1rem;
    padding: 40px;
    color: #d2e7fd;
    margin: 0;
  }
  .main {
    background: #f15a24;
  }
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
</style>
