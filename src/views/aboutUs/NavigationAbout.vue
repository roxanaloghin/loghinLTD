<template>
  <div>
    <Navigation
      :menuName="aboutUs.menuName"
      :subMenuItems="aboutUs.aboutUs"
      :mainPath="aboutUs.path"
      :routerSubMenu="aboutUs.routerSubMenu"
    />
  </div>
</template>

<script>
import Navigation from "@/views/templates/Navigation.vue";
import aboutUsSiteData from "../../data/aboutUs";

export default {
  name: "AboutSummary",
  props: {
    msg: String
  },
  components: {
    Navigation
  },
  data() {
    return { aboutUs: aboutUsSiteData.aboutUs };
  }
};
</script>

