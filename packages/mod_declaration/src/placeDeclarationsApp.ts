import { createApp } from "vue"

import "./index.css"

import App from "./App.vue"

export default function placeDeclarationsApp(el) {
  createApp(App).mount(el)
}
