import React from 'react'

const Navbar = ()=>{

 let imgStyles = {
     width:"110px",
     height:"110px"
 }
let iframe = {width:"100%",height:"1500px"}
    return(
        
 <div class="nav-bar-fixed">
  <nav  className="nav-extended black z-depth-5 section scrollspy animated fadeInDown">
    <div className="nav-wrapper">
      <a href="#" className="brand-logo"><img style={imgStyles} src={"https://cdn.dribbble.com/users/207265/screenshots/1000873/mp_black.png"}/></a>
      <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="mailto:mitchellphilmore@gmail.com"><i class="far fa-envelope"></i></a></li>
        <li><a href="https://github.com/MitchellPhilmore" target='_blank'><i class="fab fa-github"></i></a></li>
        <li><a href="https://www.linkedin.com/in/mitchellphilmore/" target='_blank'><i class="fab fa-linkedin-in"></i></a></li>
        <li><a href="https://www.twitter.com" target='_blank'><i class="fab fa-twitter"></i></a></li>
      </ul>
    </div>
    <br/>
    <div className="nav-content">
      <ul className="tabs tabs-transparent">
        <li className="tab"><a  className="active"  href="#about">About</a></li>
        <li className="tab"><a href="#portfolio">Portfolio</a></li>
        <li className="tab"><a href="#contact">Contact</a></li>
        <li className="tab"><a className="modal-trigger" href="#modal1">Resume</a></li>
      </ul>
    </div>
  </nav>
  <ul className="sidenav" id="mobile-demo">
    <li><a href="sass.html"></a></li>
    <li><a href="badges.html">About</a></li>
    <li><a href="collapsible.html">Portfolio</a></li>
  </ul>

  

<div  id="modal1" class="modal">
  <div class="modal-content">
    <iframe style={iframe} src="/resume.pdf"></iframe>
  </div>
  <div class="modal-footer">
    <a href="#!" class="modal-close waves-effect waves-green btn-flat">Close</a>
  </div>
</div>





</div>

    )
}

export default Navbar