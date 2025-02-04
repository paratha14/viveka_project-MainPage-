<template>
  <div class="app-container">
    <Navbar />

    <main>
      <Dashboard />
      <EventsSlider />
      <ClubsCollection />
    </main>

    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import Dashboard from './components/Dashboard.vue';
import EventsSlider from './components/EventsSlider.vue';
import ClubsCollection from './components/ClubsCollection.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    Dashboard,
    EventsSlider,
    ClubsCollection
  }
};
</script>

<style>
/* Ensure footer sticks to the bottom */
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
  padding: 20px;
  /*background: linear-gradient(to right,#2B1D84,#E06B85);*/
  background: linear-gradient(to right,#2B1D84,#E06B85);
}
</style>
