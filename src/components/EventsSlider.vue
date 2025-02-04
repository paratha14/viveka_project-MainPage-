<template>
  <div class="container mt-5">
    <!-- Section Heading -->
    <h2 class="text-center text-white mb-4">🔥 Hot Events</h2>
    <p class="text-center text-light mb-4">Stay updated with the latest college events and recommendations.</p>

    <!-- Bootstrap Carousel -->
    <div id="eventCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <!-- Slide 1 -->
        <div class="carousel-item active">
          <div class="event-card card-gradient-purple">
            <img src="./src/assets/techfest.jpg" class="event-image" />
            <div class="event-info">
              <h5 class="text-white">Annual Tech Fest</h5>
              <p class="text-light">Experience the best of innovation and technology!</p>
              <button class="btn btn-light hover-glow">View Details</button>
            </div>
          </div>
        </div>

        <!-- Slide 2 -->
        <div class="carousel-item">
          <div class="event-card card-gradient-orange">
            <img src="./src/assets/techfest.jpeg" alt="Cultural Night" class="event-image" />
            <div class="event-info">
              <h5 class="text-white">Cultural Night</h5>
              <p class="text-light">Join us for a night of dance, music, and performances.</p>
              <button class="btn btn-dark hover-glow">Explore More</button>
            </div>
          </div>
        </div>

        <!-- Slide 3 -->
        <div class="carousel-item">
          <div class="event-card card-gradient-teal">
            <img src="./src/assets/techfest.jpg" alt="Hackathon 2025" class="event-image" />
            <div class="event-info">
              <h5 class="text-white">Hackathon 2025</h5>
              <p class="text-light">Compete with the best minds and win exciting prizes!</p>
              <button class="btn btn-light hover-glow">Join Now</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Carousel Controls -->
      <button class="carousel-control-prev" type="button" data-bs-target="#eventCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#eventCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventsSlider",
};
</script>

<style scoped>
/* Background color for the container */
.container {
  background: linear-gradient(to right, #2B1D84, #E06B85);
  padding: 20px;
  border-radius: 10px;
}

/* Different gradient backgrounds for each event card */
.card-gradient-purple {
  background: linear-gradient(135deg,#420516, #8E0E00);
}

.card-gradient-orange {
  background: linear-gradient(135deg, #ff9f43, #ff6b6b);
}

.card-gradient-teal {
  background: linear-gradient(135deg, #20c997, #009688);
}

/* Event card styling */
.event-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-radius: 10px;
  min-height: 200px;
}

/* Event image */
.event-image {
  width: 120px;
  height: 120px;
  object-fit: contain;
  border-radius: 10px;
}

/* Event info */
.event-info {
  flex: 1;
  padding-left: 20px;
}

/* White headings for better visibility */
h2, h5 {
  color: white;
}

/* Button animations */
.hover-glow {
  position: relative;
  overflow: hidden;
}

.hover-glow:before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300%;
  height: 300%;
  background: rgba(255, 255, 255, 0.3);
  transition: width 0.4s ease, height 0.4s ease, top 0.4s ease, left 0.4s ease;
  border-radius: 50%;
  transform: translate(-50%, -50%);
}

.hover-glow:hover:before {
  width: 0;
  height: 0;
  top: 50%;
  left: 50%;
}

/* Carousel controls */
.carousel-control-prev-icon, 
.carousel-control-next-icon {
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 50%;
}
</style>
