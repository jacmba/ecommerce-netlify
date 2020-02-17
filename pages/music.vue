<template>
  <div>
    <app-store-grid :data="music" />
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
    ...mapGetters(["music"])
  }
};
</script>

<style lang="scss" scoped>
</style>