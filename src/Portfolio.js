import React from 'react'
import image from './project1.png'



const Portfolio =()=>{

    let imgStyle = {width:'100%', height:'200px'}
    let spanStyle = {fontSize:'200%', lineHeight:'30%', textAlign:'center',fontFamily: 'Gochi Hand'}
    
    return(
  <div className="col s12 m4 animated fadeInUp">
    <div className="card small z-depth-5">
      <div className="card-image">
        <img src={image}/>
        <span className="card-title">Hotel Philmore</span>
      </div>
      <div className="card-content">
        <p>Full stack project that utilizes Express,Mongodb, and progressive web technology</p>
      </div>
    </div>
  </div>


    )
   
}

export default Portfolio