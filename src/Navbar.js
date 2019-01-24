import React from 'react'

const Navbar = ()=>{

 let imgStyles = {
     width:"110px",
     height:"110px"
 }
    return(
        
 <div class="nav-bar-fixed">
  <nav  className="nav-extended black z-depth-5 section scrollspy animated fadeInDown">
    <div className="nav-wrapper">
      <a href="#" className="brand-logo"><img style={imgStyles} src={"https://cdn.dribbble.com/users/207265/screenshots/1000873/mp_black.png"}/></a>
      <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="www.google.com"><i class="far fa-envelope"></i></a></li>
        <li><a href="www.facebook.com"><i class="fab fa-facebook-square"></i></a></li>
        <li><a href="badges.html"><i class="fab fa-linkedin-in"></i></a></li>
        <li><a href="collapsible.html"><i class="fab fa-twitter"></i></a></li>
      </ul>
    </div>
    <br/>
    <div className="nav-content">
      <ul className="tabs tabs-transparent">
        <li className="tab"><a  className="active"  href="#about">About</a></li>
        <li className="tab"><a href="#portfolio">Portfolio</a></li>
        <li className="tab"><a href="#contact">Contact</a></li>
        <li className="tab"><a href="#">Resume</a></li>
      </ul>
    </div>
  </nav>
  <ul className="sidenav" id="mobile-demo">
    <li><a href="sass.html"></a></li>
    <li><a href="badges.html">Components</a></li>
    <li><a href="collapsible.html">JavaScript</a></li>
  </ul>
</div>

    )
}

export default Navbar