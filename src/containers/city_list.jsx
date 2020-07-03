import React, { Component } from 'react';
import City from './city';

class CityList extends Component {
  render() {
    const cities = this.props.cities.map(el => <City city={el} />)
    return (
      <ul className="cities">
        {cities}
      </ul>
    );
  }
}

export default CityList;
