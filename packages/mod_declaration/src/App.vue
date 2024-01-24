<template>
  <div class="container">
    <div>Name: mod_declarations</div>
    <div>Framework: vue3, ts</div>
    <div>ref:{{ name }}</div>
    <input v-model="name" type="text" placeholder="name"></input>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const name = ref('hello world')

</script>
