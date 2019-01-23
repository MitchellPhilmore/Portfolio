import React from 'react'; 
import Navbar from './Navbar';
import About from './About'
import Portfolio from './Portfolio'
import Skills from './Skills'
import Footer from './Footer'

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
    <Portfolio/>
    <Portfolio/>
    <Portfolio/>
</div>
<div className="col m12">
 <Skills/>
</div>
<Footer/>
    </div>
  

    )
}

export default App