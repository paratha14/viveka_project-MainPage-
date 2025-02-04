<template>
  <div class="container mt-5">
    <!-- Dashboard Header -->
    <h2 class="text-center text-white mb-4">Welcome to Your Dashboard</h2>
    <p class="text-center text-light mb-5">
      Your role determines the features and data displayed here. Keep track of your activities and stats.
    </p>

    <!-- Dashboard Cards (Grid Layout) -->
    <div class="row">
      <!-- Card 1: User Statistics -->
      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card shadow-sm border-0 rounded-lg hover-scale">
          <div class="card-body card-gradient-blue text-white">
            <h5 class="card-title">User Statistics</h5>
            <p class="card-text">View your overall activity and performance metrics. Stay updated with your progress.</p>
            <button class="btn btn-light hover-glow">View Stats</button>
          </div>
        </div>
      </div>

      <!-- Card 2: Notifications -->
      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card shadow-sm border-0 rounded-lg hover-scale">
          <div class="card-body card-gradient-orange text-white">
            <h5 class="card-title">Recent Notifications</h5>
            <p class="card-text">Check important updates and alerts related to your account.</p>
            <button class="btn btn-dark hover-glow">Check Notifications</button>
          </div>
        </div>
      </div>

      <!-- Card 3: Settings -->
      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card shadow-sm border-0 rounded-lg hover-scale">
          <div class="card-body card-gradient-green text-white">
            <h5 class="card-title">Account Settings</h5>
            <p class="card-text">Modify your profile and settings as needed. Make your experience personalized.</p>
            <button class="btn btn-light hover-glow">Edit Settings</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "dashboard",
};
</script>

<style scoped>
/* Dashboard Background */
.container {
  background: linear-gradient(to right, #2B1D84, #E06B85);
  padding: 20px;
  border-radius: 10px;
}

/* Different gradient backgrounds for each card */
.card-gradient-blue {
  background: linear-gradient(135deg, #007bff, #6610f2);
}

.card-gradient-orange {
  background: linear-gradient(135deg, #ff9f43, #ff6b6b);
}

.card-gradient-green {
  background: linear-gradient(135deg, #28a745, #20c997);
}

/* White headings for visibility */
h2, h5 {
  color: white;
}

/* Hover scale animation for the cards */
.hover-scale:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease-in-out;
}

/* Button hover animation */
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

.btn-light {
  background-color: #f8f9fa;
  color: #343a40;
  border: none;
  transition: background-color 0.3s;
}

.btn-light:hover {
  background-color: #e2e6ea;
  color: #212529;
}

.btn-dark {
  background-color: #343a40;
  color: #fff;
  border: none;
  transition: background-color 0.3s;
}

.btn-dark:hover {
  background-color: #23272b;
}
</style>
