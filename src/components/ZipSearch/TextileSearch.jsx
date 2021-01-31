import React, { Component } from "react";
import axios from "axios";
import ZipInfo from "./ZipInfo";
import './TextileSearch.css';

class TextileSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      zipDataT: [],
      match: true,
    };


    this.fetchZipCode = this.fetchZipCode.bind(this);
    this.getType = this.getType.bind(this);
    this.doStuff = this.doStuff.bind(this);
  }


  setZip = (event) => {
    this.setState({
      code: event.target.value,
    });
  };



  fetchZipCode() {
      axios.get(`https://data.cityofnewyork.us/resource/qnjm-wvu5.json?zipcode=${this.state.code}`)
        .then((result) => {
          if (result.data.length > 0) {
            this.setState({
              zipDataT: result.data,
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
        {<h1> Clothing Drop Off Sites</h1>}
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
            {this.state.zipDataT.map((item, index) => (
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
export default TextileSearch;

