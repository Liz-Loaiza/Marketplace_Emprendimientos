<template>
    <div>
            <!-- ======= Header ======= -->
        <header id="header" class="fixed-top ">
            <div class="container d-flex align-items-center justify-content-between">

            <h1 class="logo"><a href="index.html">Emprende Colombia</a></h1>
            <!-- Uncomment below if you prefer to use an image logo -->
            <!-- <a href="index.html" class="logo"><img src="@/assets/img/logo.png" alt="" class="img-fluid"></a>-->

            <nav id="navbar" class="navbar">
                <ul>
                <li><a class="nav-link scrollto active" href="#hero">Inicio</a></li>
                <li><a class="nav-link scrollto" href="#about">Categorias</a></li>
                <!-- <li><a class="nav-link scrollto" href="#services">Inicio d</a></li> -->
                <!-- <li><a class="nav-link scrollto " href="#portfolio">Portfolio</a></li> -->
                <li><a class="nav-link scrollto" href="#team">Nosotros</a></li>
                <!-- <li><a href="blog.html">Blog</a></li> -->
                <li class="dropdown"><a href="#"><span>Mi cuenta</span> <i class="bi bi-chevron-down"></i></a>
                    <ul>
                    <li><a href="#">Registrese</a></li>
                    <!-- <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-right"></i></a>
                        <ul>
                        <li><a href="#">Deep Drop Down 1</a></li>
                        <li><a href="#">Deep Drop Down 2</a></li>
                        <li><a href="#">Deep Drop Down 3</a></li>
                        <li><a href="#">Deep Drop Down 4</a></li>
                        <li><a href="#">Deep Drop Down 5</a></li>
                        </ul>
                    </li> -->
                    <li><a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">Inicie Sesion</a></li>
                    <!-- <li><a href="#">Drop Down 3</a></li>
                    <li><a href="#">Drop Down 4</a></li> -->
                    </ul>
                </li>
                <li><a class="nav-link scrollto" href="#contact">Contactenos</a></li>
                </ul>
                <i class="bi bi-list mobile-nav-toggle"></i>
            </nav><!-- .navbar -->

            </div>
        </header><!-- End Header -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Login</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="card mt-4">
            <div class="card-body">
                <form action="">
                    <label  class="form-label" for="usuario">Nombre de usuario</label>
                    <input class ="form-control" type="text" id="email"> 
                    <label  class="form-label" for="pass">Contraseña</label>
                    <input class ="form-control" type="password" id="pass"> 
                    <input class = "btn btn-primary" type="button" @click="login" value="ingresar"/>
                </form>
            </div>
        </div>   
      </div>
    </div>
  </div>
</div>
    </div>
</template>