<template>
  <div>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand href="#">NavBar</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item
              ><router-link to="about">about</router-link>
            </b-nav-item>
            <b-nav-item><router-link to="/">Main</router-link></b-nav-item>
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto">
            <b-nav-form v-on:submit.prevent="searchData">
              <b-form-input
                v-model="searchVar"
                size="sm"
                class="mr-sm-2"
                placeholder="Search"
              ></b-form-input>
              <b-button
                size="sm"
                class="my-2 my-sm-0"
                type="button"
                v-on:click="searchData"
                >Search</b-button
              >
            </b-nav-form>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchVar: ""
    };
  },
  methods: {
    searchData() {
       this.$store.dispatch("search", { text: this.searchVar});
    }
  }
};
</script>

<style scoped>
.nav-links {
  text-decoration: none;
  display: block;
  padding: 10px;
}
.nav-links:hover {
  color: white;
  background: #563d7c;
}
.navbar {
  background-color: #563d7c !important;
}
</style>
