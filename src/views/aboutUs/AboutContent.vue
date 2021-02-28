<template>
  <div>
    <Content :subMenuItems="aboutUs.aboutUs" :routerSubMenu="aboutUs.routerSubMenu"/>
  </div>
</template>

<script>
import Content from '@/views/templates/Content.vue';
import aboutUsSiteData from "../../data/aboutUs";

export default {
  name: "AboutSummary",
  props: {
    msg: String
  },
  data() {
    return { aboutUs: aboutUsSiteData.aboutUs };
  },
   components: {
    Content
  },
};
</script>
