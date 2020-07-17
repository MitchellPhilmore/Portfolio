import React, { Component } from "react";

class Portfolio extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let imgStyle = { width: "100%", height: "200px" };
    let spanStyle = {
      fontSize: "200%",
      lineHeight: "30%",
      textAlign: "center",
      fontFamily: "Gochi Hand",
    };

    return (
      <div
        id="portfolio"
        className="col s12 m3 animated fadeInUp section scrollspy"
      >
        <div className="card small z-depth-5">
          <div className="card-image">
            <img src={this.props.imgSrc} />
          </div>
          <div className="card-content">
            <a
              href={
                this.props.title === "Hotel Philmore"
                  ? "https://hotel-app-prod.herokuapp.com/"
                  : this.props.title === "Speciality Pharmacy Database"
                  ? "https://speciality-pharmacy.herokuapp.com/"
                  : this.props.title === "Weather App"
                  ? "https://weather-app-pwa.herokuapp.com/"
                  : this.props.title === "sas"
                  ? "http://starsandstripesdrivingschool.com/"
                  : null
              }
              target="_blank"
            >
              {" "}
              <span className="card-title">{this.props.title}</span>
            </a>
            <p>{this.props.content}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
