import React from 'react'
import { connect } from 'react-redux'
import '../styles/Explore.css'
import CityInfo from '../containers/CityInfo'
import MapContainer from '../components/MapContainer'
import TwitterFeed from '../containers/TwitterFeed'
import Weather from '../containers/Weather'
import GooglePlaces from '../containers/GooglePlaces'
import CountryInfo from '../containers/CountryInfo'
import cityData from '../cityData.json'
import {IoAndroidGlobe} from 'react-icons/lib/io'


class Explore extends React.Component {
    state = {
        randomCity: this.randomCity(cityData, 7323)
      }

      randomCity(citiesArr, arrLength){
          let city = citiesArr[Math.floor(Math.random() * arrLength)]
          return city
      }

      handleClick(){
          window.location.reload()
      }

    render(){
        const { randomCity } = this.state
        return (
            <div className='Explore container'>
               <h3><IoAndroidGlobe onClick={this.handleClick.bind(this)} size={60}/>
                    Click the globe to explore a new city!
                </h3>
                <div className="row">
                    <div className="column">
                        <div id='MapContainer'>
                            <MapContainer randomCity={randomCity} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <CityInfo randomCity={randomCity} />
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <TwitterFeed randomCity={randomCity}/>
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <div>
                            <CountryInfo randomCity={randomCity} />
                        </div>
                    </div>
                </div>

           
                <div className="row">
                    <div className="column column-20 weatherDiv">
                        <Weather randomCity={randomCity} />
                    </div>
                    <div className="column placesCol">
                        <div className="placesDiv column column-80">
                            <GooglePlaces randomCity={randomCity} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Explore