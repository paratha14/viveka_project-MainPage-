<template>
  <div class="container my-5">
    <h2 class="text-center mb-4 text-uppercase fw-bold">🎭 Explore Clubs</h2>
    <div class="row">
      <div
        v-for="club in clubs"
        :key="club.id"
        class="col-lg-3 col-md-4 col-sm-6 mb-4"
      >
        <div class="club-card shadow-sm" @click="joinClub(club.id)">
          <!-- Club Image -->
          <img
            :src="club.image"
            :alt="club.name"
            class="club-image img-fluid"
          />
          <div class="club-info p-3">
            <h5 class="club-title">{{ club.name }}</h5>
            <p class="club-description">
              {{ club.description }}
            </p>
            <button class="btn btn-primary w-100 join-btn">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ClubsCollection",
  data() {
    return {
      clubs: [
        { id: 1, name: "Razzmatazz", image: "./src/assets/Razzmatazz-27102311264840.jpg", description: "Explore music & instruments." },
        { id: 2, name: "Expressions", image: "./src/assets/Expressions-27102311144566.jpg", description: "Act, direct, and write plays." },
        { id: 3, name: "Golden-Pen", image: "./src/assets/Golden-Pen-27102311540454.jpg", description: "he Golden Pen Club is your poetic heaven" },
        { id: 4, name: "Manch", image: "./src/assets/Manch-27102311283786.jpg", description: "This Club empowers you to find your voice." },
        { id: 5, name: "Tech-Fusion", image: "./src/assets/Tech-Fusion-27102311165074.jpg", description: "Boosts your technical knowledge." },
        { id: 6, name: "Ozone", image: "./src/assets/Ozone-27102311322269.jpg", description: "Work for a greener planet." },
        { id: 7, name: "Positive-Psychology", image: "./src/assets/Positive-Psychology-27102311350122.jpg", description: "Explores the essence of a fulfilling life." },
        { id: 8, name: "Power-Angels-Power-Heroes", image: "./src/assets/Power-Angels-Power-Heroes-(1090)-27102311293999.jpg", description: "connects you to your civic duties." },
        { id: 9, name: "Beat-The-Beats", image: "./src/assets/Beat-The-Beats-27102311275077.jpg", description: "dance is the most meaningful mode of expressing this rhythm" },
        { id: 10, name: "Snapshot", image: "./src/assets/Snapshot-27102311503974.jpg", description: "Snapshot is all about capturing moments and cherishing memories through the lens. " },
        { id: 11, name: "Srijan", image: "./src/assets/Srijan-27102311354548.jpg", description: "we bring together artists and art enthusiasts to explore,celebrate visual arts." },
        { id: 12, name: "Sur-Jhankar", image: "./src/assets/Sur-Jhankar-27102311340739.jpg", description: "Discover the rhythm of your soul Whether you're an experienced musician." }
        
      ],
    };
  },
  methods: {
    joinClub(id) {
      alert(`Applying for ${this.clubs.find(club => club.id === id).name}`);
    },
  },
};
</script>

<style scoped>
/* Club Card Design */
.club-card {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  position: relative;
}

.club-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

/* Club Image */
.club-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-bottom: 3px solid #007bff;
}

/* Club Info */
.club-info {
  text-align: center;
}

.club-title {
  font-weight: bold;
  font-size: 1.2rem;
  color: #333;
}

.club-description {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 10px;
}

/* Join Button */
.join-btn {
  font-weight: bold;
  background: linear-gradient(to right, #007bff, #0056b3);
  border: none;
  transition: background 0.3s ease-in-out, transform 0.2s ease;
}

.join-btn:hover {
  background: linear-gradient(to right, #0056b3, #004494);
  transform: scale(1.05);
}
</style>

