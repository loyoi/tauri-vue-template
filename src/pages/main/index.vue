<template>
  <div class="bg-1 p-3">
    <a-button type="primary" @click="a">Primary</a-button>
  </div>
</template>

<script setup lang="ts">
  const a = () => {
    alert("123")
  }
</script>
