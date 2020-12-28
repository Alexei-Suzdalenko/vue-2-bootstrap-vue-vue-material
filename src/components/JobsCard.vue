<template>
  <b-col md="4">
    <b-card
      class="shadow-lg mb-2 bg-white rounded"
      v-bind:title="name"
      img-src="https://suzdalenko.com/images/?img=content/materials/202006/5EEB5601D9901.jpg"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      v-bind:footer="id + ' '"
    >
      <md-button v-b-modal="modalId" class="md-raised md-primary">Primary {{ id }}</md-button>
      <b-modal :id="modalId" title="BootstrapVue">
        <p class="my-4">Hello from {{ modalId }}</p>
      </b-modal>

    </b-card>
  </b-col>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: { name: String, id: Number },
  computed:{
    modalId(){
      return 'modal-' + this.id;
    }
  }
};
</script>

<style lang="css" scoped>
.md-raised {
  background: grey !important;
}
</style>
