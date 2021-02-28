<template>
  <div class="banner">
      <Banner :menuName="services.menuName" :description="services.description"/>
  </div>
</template>

<script>
import Banner from '@/views/templates/Banner.vue';
import servicesSiteData from "../../data/services";

export default {
  name: "ServiceSummary",
  props: {
    msg: String
  },
   components: {
    Banner,
  },
  data() {
    return { services: servicesSiteData.services };
  }
};
</script>
