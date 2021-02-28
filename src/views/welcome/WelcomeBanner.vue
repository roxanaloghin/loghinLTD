<template>
  <div class="banner">
      <Banner :menuName="companyInfo.name" :description="companyInfo.description"/>
  </div>
</template>


<script>
import Banner from '@/views/templates/Banner.vue';
import infoSiteData from "../../data/info";

export default {
  name: "WelcomeSummary",
  props: {
    msg: String
  },
   components: {
    Banner,
  },
  data() {
    return { companyInfo: infoSiteData.companyInfo };
  }
};
</script>