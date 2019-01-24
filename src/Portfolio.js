import React,  {Component}  from 'react'


class Portfolio extends Component{
  constructor(props){
    super(props)



    }

    render(){
      let imgStyle = {width:'100%', height:'200px'}
      let spanStyle = {fontSize:'200%', lineHeight:'30%', textAlign:'center',fontFamily: 'Gochi Hand'}

      return(

        
  <div id="portfolio" className="col s12 m4 animated fadeInUp section scrollspy">
  <div className="card small z-depth-5">
    <div className="card-image">
      <img src={this.props.imgSrc}/>
      <a href="https://hotel-app-prod.herokuapp.com/" target="_blank"> <span className="card-title">{this.props.title}</span></a>
    </div>
    <div className="card-content">
      <p>{this.props.content}</p>
    </div>
  </div>
</div>


      )
    }

  
}

export default Portfolio