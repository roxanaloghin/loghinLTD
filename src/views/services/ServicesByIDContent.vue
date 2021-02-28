<template>
  <div>
    <ContentById :data="service"/>
  </div>
</template>

<script>
import ContentById from "@/views/templates/ContentById.vue";
import servicesSiteData from "../../data/services";

export default {
  name: "Services",
  computed: {
    service() {
      const id = this.$route.params.id;
      return servicesSiteData.services.services.find(
        service => service.id === +id
      );
    }
  },
  components: {
    ContentById
  }
};
</script>
