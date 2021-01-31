import React, { Component } from "react";
import axios from "axios";
import CompostInfo from "./CompostInfo";
import './CompostSearch.css';

class CompostSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      zip: [],
      code: "",
      match: false,
      type: "electronics",

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
   
      axios
        .get(
          `https://data.cityofnewyork.us/resource/if26-z6xq.json?zip_code=${this.state.code}`)
          
        .then((result) => {
          if (result.data.length > 0) {
              console.log(result.data);
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
            <h1> Food Recycling Drop Offs </h1>
        {/* Say what the search is for Big title letters*/}
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
              <CompostInfo
                key={index}
                location={item.location}
                food_scrap_drop_off_site={
                  item.food_scrap_drop_off_site
                }
                zip_code={item.zip_code}
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
export default CompostSearch;

