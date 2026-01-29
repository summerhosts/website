<script setup>
import { ref, onMounted } from 'vue';
import { formatDistanceToNow } from "date-fns";

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

  formattedDate.value = formatDistanceToNow(new Date(timestamp));
});
</script>

<template>
  <span>{{ formattedDate }}</span>
</template>
