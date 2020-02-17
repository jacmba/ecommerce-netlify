<template>
  <div>
    <app-store-grid :data="electronics" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AppStoreGrid from "~/components/AppStoreGrid.vue";

export default {
  components: {
    AppStoreGrid
  },
  computed: {
    ...mapGetters(["electronics"])
  }
};
</script>

<style lang="scss" scoped>
</style>