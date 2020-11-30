import React from 'react';
import SensorsList from './SensorsList';

import sensorsData from '../../data/sensors.json';

const name = sensorsData[0].name;
const type = sensorsData[0].type;

export default {
  title: 'Sensor'
}

export const Sensors = () => <SensorsList name={name} type={type} />
