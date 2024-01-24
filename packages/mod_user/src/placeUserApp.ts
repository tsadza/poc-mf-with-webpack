import Vue from "vue"

import "./index.css"

import App from "./App.vue"

export default function placeUserApp(el) {
  new Vue({
    el,
    template: "<App/>",
    components: { App }
  })
}
