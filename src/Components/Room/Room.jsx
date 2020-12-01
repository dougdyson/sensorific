import React from 'react';

const rooms = ['Living', 'Garage', 'Bedroom', 'Kitchen', 'Hallway', 'Bathroom', 'Dining', 'Outside', 'Office', 'Den']

// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';

export default function Home(props) {
  
  console.log('room props:', props);

  const name = props.name.split(' ');

  let room = getRoom(name);

  if (room === 'Living' || room === 'Dining') { 
    room = room + ' Room';
  }

  // check if in room name list
  function getRoom (sensor) {
    for (const word of name) {
      console.log(word);
      if (rooms.includes(word)){
        console.log('found room:', word);
        return word;
      }
    }
  }

  return (
    <div>
      {room}
    </div>
  );
}
