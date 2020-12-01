export function getRoomsData (sensorsData) {
  
  let roomsData = [];
  let roomNames = [];
  let roomsList = [];

  function getRoomType (names) {
    const roomTypes = ['Living', 'Garage', 'Bedroom', 'Kitchen', 'Hallway', 'Bathroom', 'Dining', 'Outside', 'Office', 'Den']
    for (const word of names) {
      if (roomTypes.includes(word)){
        return word;
      }
    }
  }

  function getRoomName (sensor) {
    const names = sensor.split(' ');
    let room = getRoomType(names);
    if (room === 'Living' || room === 'Dining') { 
      room = room + ' Room';
    }   
    return room;
  }

  // add room name and key to rooms data array
  for (let i = 0; i < sensorsData.length; i++) {
    const roomName = getRoomName(sensorsData[i].name);
    if (!roomNames.includes(roomName)){
      roomNames.push(roomName);
    }
    sensorsData[i].room = roomName;
    sensorsData[i].key = i;
    roomsData.push(sensorsData[i]);
  }

  // make a new array which groups sensors by room name
  for (let i = 0; i < roomNames.length; i++) {
    const sensorList = [];
    const room = roomNames[i];
    for (const sensor of roomsData) {
      if (roomNames[i] === sensor.room) {
        sensorList.push(sensor);
      }
    }
    const roomObj = {'room' : room, sensorList};
    roomsList.push(roomObj);
  }

  console.log('roomsList:', roomsList);

  return roomsList;
}