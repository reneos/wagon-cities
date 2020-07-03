import React, { Component } from 'react';

class City extends Component {
  render() {
    return (
      <li className="list-group-item">
        { this.props.city.name }
      </li>
    );
  }
}

export default City;
