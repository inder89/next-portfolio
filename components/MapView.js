import React, { Component } from 'react';
import { node, number, oneOfType, string, object } from 'prop-types';
import GoogleMapReact from 'google-map-react';
import Icon from './Icon';
/* global google, window */

class MapView extends Component {
  static defaultProps = {
    height: 700,
    flexBasis: 500,
    zoom: 18,
  };

  static propTypes = {
    height: oneOfType([string, number]),
    width: oneOfType([string, number]),
    children: node,
    zoom: number,
    config: object,
  };

  render() {
    const { height, flexBasis, zoom, config } = this.props;

    return (
      <div className="map">
        <div style={{ height: height, flexBasis: flexBasis }}>
          <GoogleMapReact
            yesIWantToUseGoogleMapApiInternals
            bootstrapURLKeys={{
              key: 'AIzaSyC5HjeRqeoqbxHEQWieE0g9hLaN6snjorA',
            }}
            defaultCenter={{ lat: -30.3542805, lng: 153.0898535 }}
            defaultZoom={zoom}
          />
        </div>
      </div>
    );
  }
}

export default MapView;
