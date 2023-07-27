<template>
  <a v-if="link" :href="link" :style="tagStyle" class="tag">
    {{ text }}
  </a>
  <span v-else :style="tagStyle" class="tag">
    {{ text }}
  </span>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps(['text', 'size', 'link', 'color']);

const tagStyle = computed(() => {
  const baseColor = props.color || getRandomColor();
  const backgroundColor = props.plain ? `${baseColor}, 0.7)` : baseColor;

  return {
    fontSize: props.size ? `${props.size}px` : '16px',
    backgroundColor,
    padding: '3px 10px',
    borderRadius: '10px',
    color: '#fff',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
    marginRight: '10px',
    transition: 'background-color 0.3s ease',
  };
});

// Generate a random color with a fixed opacity value
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return colorToRGBA(color, 1); // Set alpha to 1 for fully opaque color
}

// Convert HEX color to RGBA with specified opacity
function colorToRGBA(hex, opacity) {
  const hexValue = hex.slice(1);
  const r = parseInt(hexValue.slice(0, 2), 16);
  const g = parseInt(hexValue.slice(2, 4), 16);
  const b = parseInt(hexValue.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}
</script>

<style>
.tag {
  margin-bottom: 10px;
}
.tag:hover {
    opacity: 0.7;
}
</style>
