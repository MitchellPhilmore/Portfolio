import React from 'react'

const Skills = ()=>{
    let center = {textAlign:'center', fontFamily: 'Gochi Hand'}
    let icon = {height:'150px',width:'150px'}
    let styles = {"WebkitClipPath":"polygon(0 100%, 100% 100%, 100% 1%)","clipPath":"polygon(0 100%, 100% 100%, 100% 1%)",background:'#424242 ', marginTop:'100px'}
    return(
        <div className="row">
        <div style={styles}>
         <h1>Works</h1>
        </div>
        <h1 style={center}>Skills</h1>
        
  <div className="row">
  <div className="col s12 m12">
    <div className="card large">
      <div className="card-image col m2 s6 hoverable">
        <img style={icon} src="http://icons.iconarchive.com/icons/igh0zt/ios7-style-metro-ui/512/MetroUI-Apps-HTML-5-icon.png" />
      </div>
      <div className="card-image col m2 s6 hoverable">
        <img style={icon} src="https://www.sportsengineers.com/wp-content/uploads/2015/05/js-logo-badge-512.png" />
     
      </div>
      <div className="card-image col m2 s6 hoverable">
        <img style={icon} src="https://image.flaticon.com/icons/png/512/1183/1183672.png" />
      </div>
      <div className="card-image col m2 s6 hoverable">
        <img style={icon} src="https://data.appus.software/resources/img/site_section_images/d8dbae64f62cffa8b9747090cae3c49b" />
      </div>
      <div className="card-image col m2 s6 hoverable">
        <img style={icon} src="https://www.servernoobs.com/wp-content/uploads/2016/01/mongodb-logo-1.png" />
      </div>


    </div>
  </div>
</div>

            
        </div>
      
    )
}

export default Skills