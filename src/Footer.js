import React from 'react'


const Footer = ()=>{
    let iconStyle = {fontSize:'50px'}
    return (
        <div>
      <footer id="contact" className="page-footer black section scrollspy">
  <div className="container">
    <div className="row">
      <div className="col l6 s12">
      <a className="grey-text text-lighten-4 right" href="#top"><i className="material-icons">navigation</i></a>
       
      </div>
      <div className="col l4 offset-l2 s12">
        <h4 className="white-text">Contact</h4>
        <div className="col m3">
        <a className="grey-text text-lighten-3" href="#!"><i style={iconStyle} class="fab fa-github"></i></a>
        </div>
        <div className="col m3">
        <a className="grey-text text-lighten-3" href="#!"><i style={iconStyle}  class="fab fa-linkedin-in"></i></a>
        </div>
        <div className="col m3">
        <a className="grey-text text-lighten-3" href="#!"><i style={iconStyle}  class="far fa-envelope"></i></a>
        </div>
        
          
         
         
          
      
      </div>
    </div>
  </div>
  <div className="footer-copyright">
    <div className="container">
      © 2019 Mitchell Philmore
     
    </div>
  </div>
</footer>
</div>

    )
}

export default Footer