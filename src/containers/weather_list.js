import React, { Component } from "react";
import { connect } from "react-redux";

import Chart from "../components/chart";
import GoogleMap from "../components/google_map";

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;

    // very nice piece of syntax
    const temps = cityData.list.map(weather => {
      return weather.main.temp;
    });
    const pressures = cityData.list.map(weather => {
      return weather.main.pressure;
    });
    const humidities = cityData.list.map(weather => {
      return weather.main.humidity;
    });
    const { lon, lat } = cityData.city.coord;
    console.log("lat long", lat, lon);
    return (
      <tr key={name}>
        <td>
          <GoogleMap lng={lon} lat={lat} />
        </td>
        <td>
          <Chart data={temps} color="orange" units="K" />
        </td>
        <td>
          <Chart data={pressures} color="green" units="hPa" />
        </td>
        <td>
          <Chart data={humidities} color="blue" units="%" />
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    );
  }
}

function mapStateToProps(state) {
  // console.log(state);
  return { weather: state.weather };
}

export default connect(mapStateToProps)(WeatherList);