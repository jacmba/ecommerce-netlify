<template>
  <div>
    <app-store-grid :data="games" />
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
    ...mapGetters(["games"])
  }
};
</script>

<style lang="scss" scoped>
</style>