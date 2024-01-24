import { createApp } from "vue"

import "./index.css"

import OrganizationApp from "./OrganizationApp.vue"

export default function placeOrganizationApp(el) {
  createApp(OrganizationApp).mount(el)
}
