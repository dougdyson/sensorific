import React from 'react';
import Sensor from './Sensor';

import sensorsData from './../../data/sensors.json';

const name = sensorsData[0].name;
const type = sensorsData[0].type;

export default {
  title: 'Sensor'
}

export const Sensors = () => <Sensor name={name} type={type} />
