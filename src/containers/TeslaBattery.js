import React, { Component } from 'react';
import TeslaCar from '../components/TeslaCar/TeslaCar';
import TeslaNotice from '../components/TeslaNotice/TeslaNotice';
import './TeslaBattery.css';
class TeslaBattery extends Component {
  render() {
    return (
      <form className='tesla-battery'>
        <h1>Range Per Charge</h1>
        <TeslaCar wheelsize={19} />
        <TeslaNotice />
      </form>
    );
  }
}
export default TeslaBattery;
