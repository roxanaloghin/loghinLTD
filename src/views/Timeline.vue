<template>
  <VueTimeline :timeline-items="timelineItems"/>
</template>


<script>
import VueTimeline from "bs-vue-timeline";
import timelineSiteData from "../data/timeline";

export default {
  components: {
    VueTimeline
  },

  data() {
    return { timelineItems: timelineSiteData.timelineItems };
  }
};
</script>

<style scoped>
:root {
  --bvt-primary-color: #0288d1;
  --bvt-bg-secondary: #ddd;
  --bvt-timeline-color: #aaa;
  --bvt-timeline-text-color: #333;
  --bvt-border-color: var(--bvt-timeline-color);
  --bvt-duration-color: var(--bvt-primary-color);
  --bvt-box-shadow1: 0 1px 6px rgba(0, 0, 0, 0.12),
    0 1px 4px rgba(0, 0, 0, 0.24);
}

.timeline h3 {
    font-weight: lighter;
    background: #4b5053;
}
</style> 