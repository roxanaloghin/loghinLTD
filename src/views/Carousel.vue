<template>
  <div class="inner">
    <header>
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="3000"
        controls
        indicators
        background="#ccc"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #000;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- Text slides with image && carouselItem.comment=='chosen'-->
        <div
          v-for="(carouselItem,index) in infoSiteData.carouselItems.filter(carouselItem=>carouselItem.theme=='minimalist' )"
          :key="index"
        >
          <b-carousel-slide :img-src="carouselItem.image" :caption="carouselItem.description">
            <h1 v-html="infoSiteData.companyInfo.name"></h1>
            <p v-html="infoSiteData.companyInfo.description"></p>
          </b-carousel-slide>
        </div>
      </b-carousel>
    </header>
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


<style>
.carousel .carousel-item {
  height: 500px;
}

.carousel-item img {
  position: absolute;
  object-fit: cover;
  top: 0;
  left: 0;
  max-height: 500px;
}

#banner p {
  color: white;
  font-size: 1.2em;
  /* background-color: #525262; */
}
</style>
