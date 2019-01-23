import React from 'react'
import Typing from 'react-typing-animation';
import image from "./image.png"

const About = () => {
let h1Style = {fontFamily: 'Gochi Hand', borderLeft:'5px'}
let rowStyle = {marginTop:'50px'}

let imgStyle = { 
    borderRadius:'50%',
    height:'200px;',
    border:'5px solid #424242 ',
    
}




    return ( 
        <div style={rowStyle} className="row">
        <div className="col m2" />
        <div className="col m4">
        <img style={imgStyle} src={image}/>
        </div>
        <div className="col m5">
        <Typing>
        <h1 style={h1Style} > ABOUT ME </h1> 
        <h5 style={h1Style} className = "typewriter h3" > Hello, my name is Mitchell Philmore. I 'm a full stack developer based out of Philadelphia,PA. Feel free to take a look at my latest projects on the 
        portfolio page
        . </h5> 
        </Typing>

        
        </div>
        
        </div>
        



    )


}




export default About