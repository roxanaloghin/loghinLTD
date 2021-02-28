<template>
  <div>
    <Content :subMenuItems="services.services" :routerSubMenu="services.routerSubMenu"/>
  </div>
</template>

<script>
import Content from "@/views/templates/Content.vue";
import servicesSiteData from "../../data/services";

export default {
  name: "ServiceSummary",
  props: {
    msg: String
  },
  data() {
    return { services: servicesSiteData.services };
  },
  components: {
    Content
  }
};
</script>
