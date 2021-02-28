<template>
  <div class="banner">
      <Banner :menuName="projects.menuName" :description="projects.description"/>
  </div>
</template>

<script>
import Banner from '@/views/templates/Banner.vue';
import projectsSiteData from "../../data/projects";

export default {
  name: "ProjectSummary",
  props: {
    msg: String
  },
   components: {
    Banner,
  },
  data() {
    return { projects: projectsSiteData.projects };
  }
};
</script>
