import React, {Component} from 'react';
import fetch from 'isomorphic-unfetch';
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%',
};

class MapContainer extends Component {
  state = {
    ballLocation: {
      lat: 0,
      lng: 0,
    },
    goalLocation: {
      lat: 0,
      lng: 0,
    },
    loading: true,
  };

  componentDidMount () {
    navigator.geolocation.getCurrentPosition (position => {
      const {latitude, longitude} = position.coords;
      this.setState (
        {
          ballLocation: {
            lat: 33.02499278880199,
            lng: 35.28442144393921,
          },
        },
        () => {
          console.log (this.state);
        }
      );
    });
  }
  componentDidUpdate () {
    const {loading, ballLocation} = this.state;
    const url = `http://localhost:3000/api/v1/googleMap/getGoalLocationService?latitude=${ballLocation.lat}&longitude=${ballLocation.lng}`;
    if (loading) {
      fetch (url)
        .then (resopnse => resopnse.json ())
        .then (data => {
          this.setState ({
            goalLocation: {
              lat: data.data.lat,
              lng: data.data.lng,
            },
            loading: false,
          });
        })
        .catch (err => console.log (err));
    }
  }

  onMarkerDragEnd = coord => {
    const {latLng} = coord;
    const lat = latLng.lat ();
    const lng = latLng.lng ();
    this.setState (
      {
        ballLocation: {lat: lat, lng: lng},
        loading: false,
      },
      () => {
        let {ballLocation, goalLocation} = this.state;
        ballLocation = JSON.stringify (ballLocation);
        goalLocation = JSON.stringify (goalLocation);
        return fetch (
          `http://localhost:3000/api/v1/googleMap/getDistance?ballLocation=${ballLocation}&goalLocation=${goalLocation}`
        )
          .then (resopnse => resopnse.json ())
          .then (data => {
            console.log (data);
            this.setState ({
              ballLocation: {lat: lat, lng: lng},
              loading: false,
            });
            if (data && data['data'] < 0.01) {
              console.log ('GOAL!!!!!!!!!');
              alert ('GOAL!!!!!!');
            }
          })
          .catch (err => console.log (err));
      }
    );
  };

  render () {
    const {loading, ballLocation, goalLocation} = this.state;
    const {google} = this.props;

    if (loading) {
      return null;
    }
    return (
      <Map
        google={google}
        zoom={20}
        style={mapStyles}
        initialCenter={ballLocation}
      >
        <Marker
          name={'Ball position'}
          position={ballLocation}
          icon={{
            url: 'static/ball.png',
            anchor: new google.maps.Point (32, 32),
            scaledSize: new google.maps.Size (34, 34),
          }}
          draggable={true}
          onDragend={(t, map, coord) => this.onMarkerDragEnd (coord)}
        />

        <Marker
          name={'Goal position'}
          position={{lat: goalLocation.lat, lng: goalLocation.lng}}
          icon={{
            url: 'static/goal.png',
            anchor: new google.maps.Point (40, 40),
            scaledSize: new google.maps.Size (64, 64),
          }}
        />

      </Map>
    );
  }
}

export default GoogleApiWrapper ({
  apiKey: 'AIzaSyDUb9IkmIUP3Wlzir40A0jn3bR4FbBpl1k',
}) (MapContainer);
