<template>
  <div class="banner">
      <Banner :menuName="aboutUs.menuName" :description="aboutUs.description"/>
  </div>
</template>

<script>
import Banner from '@/views/templates/Banner.vue';
import aboutUsSiteData from "../../data/aboutUs";

export default {
  name: "AboutSummary",
  props: {
    msg: String
  },
 components: {
    Banner,
  },
  data() {
    return { aboutUs: aboutUsSiteData.aboutUs };
  }
};
</script>
