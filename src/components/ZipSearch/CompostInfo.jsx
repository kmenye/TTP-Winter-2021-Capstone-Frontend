// import { fromCodePoint } from "core-js/fn/string";
import React, { Component } from "react";
import {Map, GoogleApiWrapper, InfoWindow, Marker} from 'google-maps-react';
import './ZipInfo.css';


const mapStyles = {
  width: '100%',
  height: '500%'
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
          <hr></hr>
          <h5>
            {this.props.food_scrap_drop_off_site}
          </h5>
        </header>
        
        <div className="container">
            {" "}<h5>Address: {this.props.location}</h5>{" "}
            <hr></hr>
            
            <Map
              google={this.props.google}
              zoom={17}
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
           
            </div>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyBUeZg5hbGAsMMEX-3UCAjZP91oooJoGkI'
})(ZipInfo);