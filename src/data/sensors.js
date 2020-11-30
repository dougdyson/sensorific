import sensorData from './sensors.json'

export default sensorData;

// function getSensorReadingsById (readings, sensorId) { 
//   return readings.filter(reading => reading.sensorId === sensorId);
// }

// function getLatestSensorReadingById (readings, sensorId) {
//   // assumes data is sorted chronologically
//   const sensorReadings = getSensorReadingsById(readings, sensorId);
//   return sensorReadings.pop();
// }