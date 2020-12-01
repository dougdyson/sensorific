export function getRoomsData (sensorsData) {
  
  let roomsData = [];

  function getRoomType (names) {
    const roomTypes = ['Living', 'Garage', 'Bedroom', 'Kitchen', 'Hallway', 'Bathroom', 'Dining', 'Outside', 'Office', 'Den']
    for (const word of names) {
      if (roomTypes.includes(word)){
        return word;
      }
    }
  }

  function getRoomName (sensor) {
    // console.log('getRoomName sensor:', sensor);
    const names = sensor.split(' ');
    let room = getRoomType(names);
    if (room === 'Living' || room === 'Dining') { 
      room = room + ' Room';
    }   
    return room;
  }

  // add room name to data array
  for (let i = 0; i < sensorsData.length; i++) {
    const roomName = getRoomName(sensorsData[i].name);
    sensorsData[i].room = roomName;
    sensorsData[i].key = i;
    // console.log('getRoomName sensorsData[i]:', sensorsData[i]);
    roomsData.push(sensorsData[i]);
  }
  // console.log('getRoomsData roomsData:', roomsData);
  return roomsData;
  
}