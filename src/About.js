import React, {Component} from 'react'
import Typing from 'react-typing-animation';
import image from "./profile-pic.jpg"

class About extends Component {
    constructor(props){
        super(props)

        this.state = {
            h1Style: {fontFamily: 'Gochi Hand', borderLeft:'5px'},
            rowStyle:{marginTop:'50px'},
            imgStyle:{
                borderRadius:'50%',
                height:'200px;',
                border:'5px solid #424242 '}
      

        }
}

componentDidMount(){
   
let i = 0,
   speed = 100;
   
let aboutTxt = `Hello, my name is Mitchell Philmore. I 'am a full stack developer based out of Philadelphia,PA. My current toolset includes MongoDB, Express, React, and  Node.js. Feel free to contact me or check out my latest projects.`



let typeWriter = ()=> {
  if (i < aboutTxt.length) {
    document.querySelector("#aboutInfo").innerHTML += aboutTxt[i];
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter()

}


    render(){
        return(
        <div style={this.state.rowStyle} className="row">
        <div className="col m2" />
        <div className="col m4">
        <img style={this.state.imgStyle} src={image}/>
        </div>
        <div className="col m5">
      
        <h1 id="about" style={this.state.h1Style} > ABOUT ME </h1> 
        <h5 id="aboutInfo" style={this.state.h1Style} className = "typewriter h3 section scrollspy" ></h5> 
      
   
       

        
        </div>
        
        </div>
        )

    }
}





export default About