<template>
  <RouterView></RouterView>
</template>

<script setup lang="ts">
  // 设置为暗黑主题
  document.body.setAttribute("arco-theme", "dark")

  // 恢复亮色主题
  // document.body.removeAttribute('arco-theme');
</script>
