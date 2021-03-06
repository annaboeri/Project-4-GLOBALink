import React from 'react'
import { connect } from 'react-redux'
import {Map, GoogleApiWrapper} from 'google-maps-react';

class MapContainer extends React.Component{

  render(){
    if(this.props.randomCity){
      if (!this.props.google) {
        return <div>Loading Map...</div>;
      }
      const style = {
        width: '100%',
        height: '500px'
      }
    return(
      <Map 
        google={this.props.google}
        style={style}
        initialCenter={{
          lat: this.props.randomCity.lat, 
          lng: this.props.randomCity.lng
        }}
        center={{
          lat: this.props.randomCity.lat, 
          lng: this.props.randomCity.lng
        }}
        zoom={14}
        id="map"
        mapTypeControl={true} 
        mapType="satellite"
      >
      </Map>
    )
  }
  else return null
  }
}

const WrappedContainer = GoogleApiWrapper({
  apiKey: "AIzaSyAB9C4pOhc3eeBEdyPpvYzXrg0aDjPgzC0"
})(MapContainer)

function mapStateToProps(state) {
  return {
    randomCity: state.randomCity
  }
}

export default connect(mapStateToProps)(WrappedContainer)