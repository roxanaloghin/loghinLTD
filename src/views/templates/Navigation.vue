<template>
  <div>
    <b-card>
      <b-card-header header-tag="nav">
        <b-nav card-header tabs align="center">
          <b-nav-item :to="mainPath" exact exact-active-class="active">{{menuName}}</b-nav-item>
          <div v-for="(aboutUs,index) in subMenuItems" :key="index">
            <b-nav-item
              :to="{
                name:routerSubMenu,
                params:{
                  id:aboutUs.id
                }}"
              exact
              exact-active-class="active"
            >{{aboutUs.title}}</b-nav-item>
          </div>
        </b-nav>
      </b-card-header>
      <b-card-body>
        <router-view></router-view>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  props: {
    menuName: String,
    subMenuItems: Array,
    mainPath: String,
    routerSubMenu: String,
  }
};
</script>

<style scoped>
.card-body {
  flex: 0 0;
  min-height: 0;
  padding: 0;
}
a {
  color: #6cc091;
  text-decoration: none;
  background-color: transparent;
}
.card-header {
  border-bottom: 0px none rgba(0, 0, 0, 0);
}
</style>
