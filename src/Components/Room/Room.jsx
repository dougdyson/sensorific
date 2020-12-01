import React from 'react';

// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';

export default function Home(props) {
  
  // check if in room name list
  function getRoom (sensor) {
    const rooms = ['Living', 'Garage', 'Bedroom', 'Kitchen', 'Hallway', 'Bathroom', 'Dining', 'Outside', 'Office', 'Den']
    for (const word of name) {
      if (rooms.includes(word)){
        return word;
      }
    }
  }

  const name = props.name.split(' ');
  let room = getRoom(name);

  if (room === 'Living' || room === 'Dining') { 
    room = room + ' Room';
  }

  return (
    <div>
      {room}
    </div>
  );
}
