// import { fromCodePoint } from "core-js/fn/string";
import React, { Component } from "react";
import {Map, GoogleApiWrapper, InfoWindow, Marker} from 'google-maps-react';



const mapStyles = {
  width: '10%',
  height: '10%'
};

class ZipInfo extends Component {
  state = {
    showingInfoWindow: false,  // Hides or shows the InfoWindow
    activeMarker: {},          // Shows the active marker upon click
    selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };
  
  
  render() {
    return (
      <div className="Info">
        <header className="head">
          <h1>
            {this.props.dropoff_sitename}, {this.props.zipcode}
          </h1>
        </header>
        <ul>
          <li>
            {" "}
            <h2>Address: {this.props.address}</h2>{" "}
            <Map
              google={this.props.google}
              zoom={15}
              style={mapStyles}
              initialCenter={
                {
                  lat: this.props.latitude,
                  lng: this.props.longitude
                }
              }
            >
              <Marker
                onClick={this.onMarkerClick}
                name={this.props.dropoff_sitename}
              />
              <InfoWindow
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}
                onClose={this.onClose}
              >
                <div>
                  <h4>{this.state.selectedPlace.name}</h4>
                </div>
              </InfoWindow>
            </Map>


              <br></br>
              <br></br>
          </li>
        </ul>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyBUeZg5hbGAsMMEX-3UCAjZP91oooJoGkI'
})(ZipInfo);