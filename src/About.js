import React, {Component} from 'react'
import Typing from 'react-typing-animation';
import image from "./image.png"

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
   
    console.log(this.state.about)
}


    render(){
        return(
        <div style={this.state.rowStyle} className="row">
        <div className="col m2" />
        <div className="col m4">
        <img style={this.state.imgStyle} src={image}/>
        </div>
        <div className="col m5">
        <Typing>
        <h1 id="about" style={this.state.h1Style} > ABOUT ME </h1> 
        <h5 style={this.state.h1Style} className = "typewriter h3 section scrollspy" > Hello, my name is Mitchell Philmore. I 'm a full stack developer based out of Philadelphia,PA. Feel free to take a look at my latest projects on the 
        portfolio page
        . </h5> 
        </Typing>

        
        </div>
        
        </div>
        )

    }
}





export default About