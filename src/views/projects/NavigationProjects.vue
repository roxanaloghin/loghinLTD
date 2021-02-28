<template>
  <div>
    <Navigation
      :menuName="projects.menuName"
      :subMenuItems="projects.projects"
      :mainPath="projects.path"
      :routerSubMenu="projects.routerSubMenu"
    />
  </div>
</template>
<script>
import Navigation from "@/views/templates/Navigation.vue";
import projectsSiteData from "../../data/projects";

export default {
  name: "ProjectSummary",
  props: {
    msg: String
  },
   components: {
    Navigation
  },
  data() {
    return { projects: projectsSiteData.projects };
  }
};
</script>

<style scoped>
@import "../../assets/css/navigationSubMenu.css";
</style>
