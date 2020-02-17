<template>
  <div>
    <app-textlockup />
    <app-sales-boxes />
    <app-textlockup>
      <template v-slot:img>
        <img src="https://images-na.ssl-images-amazon.com/images/I/71Sowz0FgwL._AC_SL1500_.jpg" alt="bag" />
      </template>
      <template v-slot:new>50%</template>
      <template v-slot:sale>Blablabla</template>
      <template v-slot:collection>Why you</template>
      <template v-slot:details>Electrónica</template>
    </app-textlockup>
    <app-featured-products />
  </div>
</template>

<script>
import AppTextlockup from "~/components/AppTextlockup.vue";
import AppSalesBoxes from "~/components/AppSalesBoxes.vue";
import AppFeaturedProducts from "~/components/AppFeaturedProducts.vue";

export default {
  components: {
    AppTextlockup,
    AppSalesBoxes,
    AppFeaturedProducts
  }
};
</script>

<style>
.test {
  margin: 3vh;
}

main {
  width: 75vw;
}
</style>
