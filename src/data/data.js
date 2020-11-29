// this file provides mock api data
import fs from 'fs';

function getSensors () {
  const sensorsData = fs.readFileSync('./sensors.json', 'utf8');
  return JSON.parse(sensorsData);
}

function getReadings () {
  const readingsData = fs.readFileSync('./readings.json', 'utf-8');
  return JSON.parse(readingsData);
}

function getSensorReadingsById (readings, sensorId) { 
  return readings.filter(reading => reading.sensorId === sensorId )
}

function getLatestSensorReadingById (readings, sensorId) {
  // To-Do: check for sorting
  const sensorReadings = getSensorReadingsById(readings, sensorId);
  return sensorReadings.pop();
}




