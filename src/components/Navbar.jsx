import React from 'react'


import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg">
  <div class="container">
    <a class="navbar-brand" href="#">
        <img src="/images/navbar/logo.svg" alt="" className='' />
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <FaBars />
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">What we do</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Career</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">Blog</a>
        </li>

  
    
       
      </ul>
  
    </div>
  </div>
</nav>
  )
}

export default Navbar