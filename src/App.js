import React from 'react'; 
import Navbar from './Navbar';
import About from './About'
import Portfolio from './Portfolio'
import Skills from './Skills'
import Footer from './Footer'
import image from './project1.png' 
import comingSoon from './coming-soon.png'
import image2 from './findmybarber.PNG'
import speciality from './speciality.PNG'



const App = ()=>{
 let  divider = {width:'100%'}
 let h1Style = {textAlign:'center', position:'relative',top:'20px;'}
 let hStyle = {fontSize:'400%', lineHeight:'30%', textAlign:'center',fontFamily: 'Gochi Hand'}
    
    return(
  
    <div>
    <Navbar/>
    <About/>
    <br/>
    <div className="row">
    <div className="col m4"><hr/></div>
    <div  style={h1Style} className="col m4">
    <h1 className="animated pulse" style={hStyle}>Projects</h1>
    </div>
    <div className="col m4">
    <hr/>
    </div>
    </div>
    <div className="row" style={divider}>
    <Portfolio imgSrc={image} content='Full stack project that utilizes Express, Mongodb, and progressive web technology' title='Hotel Philmore'/>
    <Portfolio imgSrc={image2} content=' Single page full stack project that utlizes Express,MongoDB,React, and Redux' title="Find My Barber"/>
    <Portfolio imgSrc={speciality} content='Freelance Single page React project' title="Speciality Pharmacy Database"/>/>
</div>
<div className="col m12">
 <Skills/>
</div>
<Footer/>
    </div>
  

    )
}

export default App