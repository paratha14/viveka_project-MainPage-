import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../components/Dashboard.vue';
import EventsSlider from '../components/EventsSlider.vue';
import ClubsCollection from '../components/ClubsCollection.vue';

const routes = [
  { path: '/', component: Dashboard },
  { path: '/events', component: EventsSlider },
  { path: '/clubs', component: ClubsCollection }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
