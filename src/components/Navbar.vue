<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-gradient-custom">
    <div class="container-fluid">
      
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link text-white active" aria-current="page" href="#">Home</a>
          </li>
         
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          
        </ul>
        <form class="d-flex" role="search">
          <div>
            <a class="Login" aria-current="page" href="#">Login</a>
          </div>
          <div>
            <a class="Signup" aria-current="page" href="#">Sign Up</a>
        
          </div>
        </form>

          
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
/* Custom Gradient Background for Navbar */
.bg-gradient-custom {
  background: linear-gradient(to right,#2B1D84,#E06B85);
  transition: background 0.5s ease-in-out;
}

/* Navbar Links Hover Effects */
.navbar-nav .nav-link {
  transition: color 0.3s ease, transform 0.3s ease;
}

.navbar-nav .nav-link:hover {
  color: #ffd700; /* Gold */
  transform: scale(1.1);
}

/* Dropdown Hover Effects */
.nav-item.dropdown:hover .dropdown-menu {
  display: block;
  animation: slideDown 0.5s ease-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Active Link Effect */
.navbar-nav .nav-link.active {
  color: #ffd700 !important;
  font-weight: bold;
  text-transform: uppercase;
}

/* Search Button Hover Effect */
.btn-outline-light:hover {
  background-color: #ffd700;
  color: #000;
  border-color: #ffd700;
}

/* Mobile Navigation */
@media (max-width: 991px) {
  .navbar-toggler {
    background-color: #2575fc;
  }
}

.Login{
  padding-right:12px;
  color:white;
  font-weight:bold;
  text-decoration: none;
  transition: color 0.3s ease, transform 0.3s ease
}
.Login:hover {
  color: #ffd700; /* Gold */
  transform:scale(1.1);
  
  
}

.Signup{
  padding-right:7px;
color:white;
font-weight:bold;
text-decoration: none;

}
.Signup:hover{
  color: #ffd700; /* Gold */
  transition: color 0.7s ease, transform 1s ease;
  
}

</style>
