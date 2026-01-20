<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  timestamp: {
    type: [Number, String],
    required: true,
  },
});

const formattedDate = ref('');

onMounted(() => {
  const timestamp = typeof props.timestamp === 'string'
    ? parseInt(props.timestamp, 10)
    : props.timestamp;

  formattedDate.value = new Date(timestamp).toLocaleString();
});
</script>

<template>
  <span>{{ formattedDate }}</span>
</template>
