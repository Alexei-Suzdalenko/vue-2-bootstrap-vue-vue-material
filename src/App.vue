<template>
  <div id="app">
    <div class="page" v-if="userData.showSpinner">
      <b-spinner variant="primary" label="Spinning" class="primary"></b-spinner>
    </div>
    <div class="content">
      <top-header />
      <router-view />
    </div>

    <footer class="footer">
      Footer
    </footer>
  </div>
</template>

<script>
import TopHeader from "@/components/TopHeader";
import { mapGetters } from "vuex";
export default {
  components: {
    "top-header": TopHeader
  },
  computed: { ...mapGetters(["userData"]) },
};
</script>
<style>
html,
body {
  height: 100%;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.content {
  flex: 1 0 auto;
  padding: 1px;
}

.footer {
  flex-shrink: 0;
  padding: 20px;
}

footer {
  background: #fff;
  color: grey;
}

.page{
 position: absolute;
 background: rgba(1, 1, 1, .3);
 width: 100%;
 height: 100%;
 text-align: center; 
 z-index: 11;
}
.primary{
  position: relative;
  top: 40%;
}
</style>
