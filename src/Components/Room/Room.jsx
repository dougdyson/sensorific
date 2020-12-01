import React from 'react';

export default function Home(props) {
  
  const room = props.roomData.room;

  return (
    <div>
      {room}
    </div>
  );
}
