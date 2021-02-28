<template>
  <div>
    <ContentById :data="project"/>
  </div>
</template>


<script>
import ContentById from "@/views/templates/ContentById.vue";
import projectsSiteData from "../../data/projects";

export default {
  name: "Project",
  computed: {
    project() {
      const id = this.$route.params.id;
      return projectsSiteData.projects.projects.find(
        project => project.id === +id
      );
    }
  },
   components: {
    ContentById
  },
};
</script>
