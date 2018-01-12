import React, { Component } from 'react';

import WeatherList from '../containers/weather_list';
import SearchBar from '../containers/searchbar';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
