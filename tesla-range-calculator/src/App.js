import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import TeslaCarContainer from './containers/TeslaCarContainer';
import TeslaStatsContainer from './containers/TeslaStatsContainer';
import TeslaSpeedCounterContainer from './containers/TeslaSpeedCounterContainer';
import TeslaTempCounterContainer from './containers/TeslaTempCounterContainer';
import TeslaClimateContainer from './containers/TeslaClimateContainer';
import TeslaWheelsContainer from './containers/TeslaWheelsContainer';
import './App.css';
import Header from './components/Header/Header';
import TeslaNotice from './components/TeslaNotice/TeslaNotice';
import TeslaBattery from './containers/TeslaBattery';
import appReducer from './reducers/teslaRangeApp';

const store = createStore(appReducer);

const counterDefaultVal = {
  speed: {
    title: "Speed",
    unit: "mph",
    step: 5,
    min: 45,
    max: 70
  },
  temperature: {
    title: "Outside Temperature",
    unit: "°",
    step: 10,
    min: -10,
    max: 40
  }
};

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <TeslaBattery counterDefaultVal={counterDefaultVal} />
        </div>
      </Provider>
    );
  }
}

export default App;