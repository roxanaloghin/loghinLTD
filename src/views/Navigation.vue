<template>
  <div class="inner">
    <router-link to="/" class="logo">
      <strong>{{infoSiteData.companyInfo.name}}</strong>
    </router-link>
    <nav id="nav">
      <router-link active-class="white" to="/serviceSummary" exact>{{infoSiteData.menu[0].name}}</router-link>
      <router-link active-class="white" to="/projectSummary" exact>{{infoSiteData.menu[1].name}}</router-link>
      <router-link active-class="white" to="/aboutSummary" exact>{{infoSiteData.menu[2].name}}</router-link>
    </nav>
    <a href="#navPanel" class="navPanelToggle">
      <span class="fa fa-bars"></span>
    </a>
  </div>
</template>

<script>
import infoSiteData from "../data/info";

export default {
  name: "HomePage",
  props: {
    msg: String
  },
  data() {
    return { infoSiteData };
  }
};
</script>
