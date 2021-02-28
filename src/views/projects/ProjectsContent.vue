<template>
  <div>
    <Content :subMenuItems="projects.projects" :routerSubMenu="projects.routerSubMenu"/>
  </div>
</template>

<script>
import Content from "@/views/templates/Content.vue";
import projectsSiteData from "../../data/projects";

export default {
  name: "Projects1",
  props: {
    msg: String
  },
  data() {
    return { projects: projectsSiteData.projects };
  },
  components: {
    Content
  }
};
</script>
