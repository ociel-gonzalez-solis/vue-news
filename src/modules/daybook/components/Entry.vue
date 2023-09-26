<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    class="entry-container mb-3 pointer p-2"
    @click="$router.push({ name: 'entry', params: { id: 10 } })"
  >
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">15</span>
      <span class="mx-1 fs-5">Julio</span>
      <span class="mx-2 fw-light">2021, jueves</span>
    </div>

    <div class="entry-description">
      <!-- Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae quaerat
      mollitia amet ullam sunt soluta optio qui commodi quisquam. Ducimus
      cupiditate totam atque nostrum odit, maxime distinctio velit quae
      voluptatibus. -->
      {{ lorem }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type    : String,
      default : 'N/A',
      required: true,
    }
  },
  data() {
    return {
      lorem: this.text
    }
  },
};
</script>

<style lang="scss" scoped>
.entry-container {
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;

  &:hover {
    background-color: lighten($color: grey, $amount: 45);
    transition: 0.2s all ease-in;
  }

  .entry-title {
    font-size: 12px;
  }
}
</style>
