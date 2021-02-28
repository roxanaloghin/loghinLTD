<template>
  <div>
    <ContentById :data="about"/>
  </div>
</template>

<script>
import ContentById from "@/views/templates/ContentById.vue";
import aboutUsSiteData from "../../data/aboutUs";

export default {
  name: "About",
  components: {
    ContentById
  },
  computed: {
    about() {
      const id = this.$route.params.id;
      return aboutUsSiteData.aboutUs.aboutUs.find(about => about.id === +id);
    }
  }
};
</script>
