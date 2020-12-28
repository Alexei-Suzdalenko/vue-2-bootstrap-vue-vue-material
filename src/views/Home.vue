<template>
  <b-container>
    <b-row align-v="center">
      <job
        v-for="job in displayJobs"
        v-bind:key="job.id"
        v-bind:name="job.name"
        v-bind:id="job.id"
      ></job>
    </b-row>
  
    <b-pagination
      v-model="currentPage"
      v-bind:total-rows="rows"
      v-bind:per-page="perPage"
      first-text="First"
      prev-text="Prev"
      next-text="Next"
      last-text="Last"
      v-on:input="paginate()"
    ></b-pagination>
  </b-container>
</template>

<script>
import JobsCard from "@/components/JobsCard";
import { mapGetters } from "vuex";
export default {
  name: "Home",
  components: { job: JobsCard },
  computed: { ...mapGetters(["rows", "jobs", "displayJobs"]) },
  data() {
    return {
      perPage: 3,
      currentPage: 1
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      await this.$store.dispatch("fetchJobs");
    },
    async paginate() {
      await this.$store.dispatch("paginate", {
        currentPage: this.currentPage,
        perPage: this.perPage
      });
    }
  }
};
</script>
