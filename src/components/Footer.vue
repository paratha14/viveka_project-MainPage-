<template>
  <footer class="footer bg-dark text-white py-4">
    <div class="container text-center">
      <div class="row">
        <!-- Contact Info -->
        <div class="col-md-4">
          <h5 class="text-uppercase">📞 Contact Us</h5>
          <p>Email: <a href="mailto:xyz@gmail.com" class="text-white">xyz@gmail.com</a></p>
          <p>Phone: +1 234 567 890</p>
        </div>

        <!-- Social Links -->
        <div class="col-md-4">
          <h5 class="text-uppercase">🌍 Connect with Us</h5>
          <div class="social-icons">
            <a href="mailto:xyz@gmail.com" class="social-icon"><i class="fas fa-envelope"></i> xyz@gmail.com</a>
            <a href="#" class="social-icon"><i class="fab fa-twitter"></i> ps.X</a>
            <a href="#" class="social-icon"><i class="fab fa-instagram"></i> hello.ig</a>
          </div>
        </div>

        <!-- Developer Credit -->
        <div class="col-md-4">
          <h5 class="text-uppercase">Designed and Developed By</h5>
          <p class="developer">Pratham Mohan & Abhay Singh</p>
        </div>
      </div>

      <hr class="my-3 border-light" />

      <!-- Copyright -->
      <p class="mb-0">&copy; 2025 College Events. All Rights Reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
/* Make footer stick to the bottom */
.footer {
  background: linear-gradient(135deg, #1f1f1f, #3a3a3a);
  position: relative;
  width: 100%;
  bottom: 0;
  margin-top: auto;
}

/* Social Media Icons */
.social-icons {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
}

.social-icon {
  color: #fff;
  font-size: 16px;
  text-decoration: none;
  transition: transform 0.3s ease, color 0.3s ease;
}

.social-icon i {
  margin-right: 8px;
}

.social-icon:hover {
  color: #17a2b8;
  transform: translateY(-3px);
}

/* Developer Credit */
.developer {
  font-size: 18px;
  font-weight: bold;
  color: #f9bc14;
}
</style>
