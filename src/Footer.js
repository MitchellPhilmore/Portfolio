import React from 'react'


const Footer = ()=>{
    let iconStyle = {fontSize:'50px'}
    return (
        <div>
      <footer className="page-footer black">
  <div className="container">
    <div className="row">
      <div className="col l6 s12">
        
       
      </div>
      <div className="col l4 offset-l2 s12">
        <h5 className="white-text">Contact</h5>
        <ul>
          <li><a className="grey-text text-lighten-3" href="#!"><i style={iconStyle} class="fab fa-github"></i></a></li>
          <li><a className="grey-text text-lighten-3" href="#!"><i style={iconStyle}  class="fab fa-linkedin-in"></i></a></li>
         
          
        </ul>
      </div>
    </div>
  </div>
  <div className="footer-copyright">
    <div className="container">
      © 2019 Copyright 
      <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
    </div>
  </div>
</footer>
</div>

    )
}

export default Footer