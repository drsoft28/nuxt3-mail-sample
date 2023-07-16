<template>
    <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 19 20" fill="none">
        <path d="M14.25 4.75L4.75 14.25M4.75 4.75L14.25 14.25" stroke="#88909B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
</template>
<script setup>
const props = defineProps({
  size:{
      type:Number,
      default:19
  }
})
</script>