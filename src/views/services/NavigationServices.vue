<template>
  <div>
    <Navigation
      :menuName="services.menuName"
      :subMenuItems="services.services"
      :mainPath="services.path"
      :routerSubMenu="services.routerSubMenu"
    />
  </div>
</template>

<script>
import Navigation from "@/views/templates/Navigation.vue";
import servicesSiteData from "../../data/services";

export default {
  name: "ServiceSummary",
  props: {
    msg: String
  },
  components: {
    Navigation
  },
  data() {
    return { services: servicesSiteData.services };
  }
};
</script>

<style scoped>
@import "../../assets/css/navigationSubMenu.css";
</style>
