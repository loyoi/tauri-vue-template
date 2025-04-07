<template>
  <i :class="['el-icon', spin && 'svg-icon-spin']" :style="getStyle">
    <svg aria-hidden="true"> 
      <use :xlink:href="symbolId" rel="external nofollow" />
    </svg>
  </i>
</template>
<script setup lang="ts" name="SvgIcon">
  import { computed } from "vue"
  import type { CSSProperties } from "vue"
  const props = defineProps({
    prefix: {
      type: String,
      default: "icon",
    },
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: "#c7c7c7",
    },
    size: {
      type: [Number, String],
      default: 20,
    },
    spin: {
      type: Boolean,
      default: false,
    },
  })
  
  const symbolId = computed(() => `#${props.prefix}-${props.name}`)
  const getStyle = computed((): CSSProperties => {
    const { size } = props
    const s = `${size}`
    return {
      fontSize: `${s.replace("px", "")}px`,
      "--color": color.value,
    }
  })
  const color = computed(() => props.color)
</script>

<style scoped lang="less">
  .el-icon {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 1em;
    height: 1em;
    font-size: inherit;
    line-height: 1em;
    color: var(--color);
    fill: currentColor;
    svg {
      width: 1em;
      height: 1em;
    }

    &:hover {
      color: var(--hover);
    }
    // &:active {
    //   color: var(--active);
    // }
  }
  .svg-icon-spin {
    animation: circle 1.5s infinite linear;
  }
  /* 旋转动画 */
  @keyframes circle {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>: string: number: string: number: string: number
