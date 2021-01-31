import React, { Component } from "react";
import axios from "axios";
import ZipInfo from "./ZipInfo";
import './ElectronicSearch.css';

class ElectronicSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      zip: [],
      code: "",
      match: false,
      type: "electronics",

    };

    // changed initial type to electronics as it is the first item on the list
    // this stops a bug where if you hit submit right away it
    // does nothing
    // maybe also make for zip?
    // having a value would remove the place holder though

    // change the name of the api call

    // jsx is only for the return statement

    //this.componentDidMount = this.componentDidMount.bind(this);
    this.fetchZipCode = this.fetchZipCode.bind(this);
    this.getType = this.getType.bind(this);
    this.doStuff = this.doStuff.bind(this);
  }

  //GOOGLE MAPS API
  //AIzaSyBUeZg5hbGAsMMEX-3UCAjZP91oooJoGkI
    

  // maybe do not need to bind do stuff?

  setZip = (event) => {
    this.setState({
      code: event.target.value,
    });
  };

  // componentDidMount(){
  //     this.fetchZipCode();
  // }

  // need an if statement for which api account

  // can use if else

  fetchZipCode() {
   
      axios.get(`https://data.cityofnewyork.us/resource/wshr-5vic.json?zipcode=${this.state.code}`)
        .then((result) => {
          if (result.data.length > 0) {
            this.setState({
              zip: result.data,
              match: true,
            });
          } else {
            this.setState({
              match: false,
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } 
  

  getType(event) {
    event.preventDefault();
    this.setState({ type: event.target.value });
  }

  doStuff() {
    {
      this.setState({ match: false });
    }
  }



  render() {
    return (
      <div className="zipsearch">
        <center>
        <h1>Electronic Recycling</h1>
        {}
        <br></br>
        
        <input
          name="code"
          type="text"
          onChange={(e) => {
            this.setZip(e);
          }}
          value={this.state.code}
          placeholder="Please enter a zip code"
        />
        <button onClick={this.fetchZipCode}>Search</button>

        {this.state.match ? (
          <div>
            {this.state.zip.map((item, index) => (
              <ZipInfo
                key={index}
                address={item.address}
                dropoff_sitename={
                  item.dropoff_sitename ||
                  item.vendor_name ||
                  item.drop_off_site_name
                }
                zipcode={item.zipcode}
                latitude={item.latitude}
                longitude={item.longitude}
              />

            ))}
          </div>
        ) : (
          <p>No Result</p>
        )}
        </center>
      </div>
    );
  }
}
export default ElectronicSearch;
