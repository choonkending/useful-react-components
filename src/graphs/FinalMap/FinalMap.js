import React, { Component } from 'react';
import AddButton from '../components/AddButton';

class FinalMap extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <svg className="final">
        <AddButton className="map__button" />
      </svg>
    );
  }

}

export default FinalMap;

