import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Navigation from '../views/Navigation.vue';
import ContactForm from '../views/ContactForm.vue';

import Welcome from '../views/welcome/Welcome.vue';
import WelcomeBanner from '../views/welcome/WelcomeBanner.vue';

import AboutByIDContent from '../views/aboutUs/AboutByIDContent.vue';
import AboutBanner from '../views/aboutUs/AboutBanner.vue';
import AboutContent from '../views/aboutUs/AboutContent.vue';
import NavigationAbout from '../views/aboutUs/NavigationAbout.vue';


import ServicesByIDContent from '../views/services/ServicesByIDContent.vue';
import ServicesBanner from '../views/services/ServicesBanner.vue';
import ServicesContent from '../views/services/ServicesContent.vue';
import NavigationServices from '../views/services/NavigationServices.vue';



import ProjectsByIDContent from '../views/projects/ProjectsByIDContent.vue';
import ProjectsBanner from '../views/projects/ProjectsBanner.vue';
import ProjectsContent from '../views/projects/ProjectsContent.vue';
import NavigationProjects from '../views/projects/NavigationProjects.vue';

import Carousel from '../views/Carousel.vue';
import Timeline from '../views/Timeline.vue';


Vue.use(VueRouter);

const routes = [{
    path: '/',
    name: 'Home',
    component: Home,
    children: [{
      path: '/',
      name: 'WelcomeSummary',
      components: {
        navigation: Navigation,
        banner: Carousel,
        content: Timeline,
        contactForm: ContactForm,
      },
    }],
  },
  {
    path: '/projectSummary',
    name: 'ProjectSummary',
    component: Home,
    children: [{
        path: '/projectSummary',
        name: 'ProjectSummary',
        components: {
          navigation: Navigation,
          banner: ProjectsBanner,
          navigationItem: NavigationProjects,
          content: ProjectsContent,
          contactForm: ContactForm,
        },
      },
      {
        path: '/projectSummary/:id',
        name: 'ProjectInfo',
        components: {
          navigation: Navigation,
          banner: ProjectsBanner,
          navigationItem: NavigationProjects,
          content: ProjectsByIDContent,
          contactForm: ContactForm,
        },
      }
    ]
  },
  {
    path: '/serviceSummary',
    name: 'ServiceSummary',
    component: Home,
    children: [{
        path: '/serviceSummary',
        name: 'ServiceSummary',
        components: {
          navigation: Navigation,
          banner: ServicesBanner,
          navigationItem: NavigationServices,
          content: ServicesContent,
          contactForm: ContactForm,
        }
      },
      {
        path: '/serviceSummary/:id',
        name: 'ServiceInfo',
        components: {
          navigation: Navigation,
          banner: ServicesBanner,
          navigationItem: NavigationServices,
          content: ServicesByIDContent,
          contactForm: ContactForm,
        },
      }
    ]
  },
  {
    path: '/aboutSummary',
    name: 'AboutSummary',
    component: Home,
    children: [{
        path: '/aboutSummary',
        name: 'AboutSummary',
        components: {
          navigation: Navigation,
          banner: AboutBanner,
          navigationItem: NavigationAbout,
          content: AboutContent,
          contactForm: ContactForm,
        },
      },
      {
        path: '/aboutSummary/:id',
        name: 'AboutInfo',
        components: {
          navigation: Navigation,
          banner: AboutBanner,
          navigationItem: NavigationAbout,
          content: AboutByIDContent,
          contactForm: ContactForm,
        },
      }
    ]
  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
