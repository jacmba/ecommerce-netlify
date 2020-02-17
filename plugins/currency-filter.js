import Vue from "vue"

Vue.filter("euro", function(value) {
  // Using a template literal here, that's why there are two dollar signs.
  // The first is an actual euro.
  return `€${parseFloat(value).toFixed(2)}`
})
