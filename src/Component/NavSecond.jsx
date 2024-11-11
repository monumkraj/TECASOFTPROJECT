import React from 'react'

function NavSecond() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
    <img src="https://www.techasoft.com/debug/img/TS-Logo-LArge-1.png" class="techasoft-logo" alt="techasoft-logo" style={{height:75, marginLeft:120}}/>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse d-flex justify-content-center ms-5" id="navbarNav">
      <ul class="navbar-nav" style={{fontWeight:700}}>
        <li class="nav-item ">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item" >
          <a class="nav-link" href="#">ABOUT US</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">NEWS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">PRODUCTS</a>
        </li><li class="nav-item">
          <a class="nav-link" href="#">CLIENTS</a>
        </li><li class="nav-item">
          <a class="nav-link" href="#">TECHNOLOGY</a>
        </li><li class="nav-item">
          <a class="nav-link" href="#">SERVICES</a>
        </li><li class="nav-item">
          <a class="nav-link" href="#">CAREERS</a>
        </li><li class="nav-item">
          <a class="nav-link" href="#">CONTACT US</a>
        </li><li class="nav-item"/>
          <a class="nav-link" href="#">BLOGS</a>       
        <li class="nav-item">
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavSecond
