import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button'

export default function Deets(props){
  console.log('Deets:', props);
  return (
   <div>
     <p><Button component={Link} to={'/'} size="large" variant="outlined">...Home</Button></p>
     <p>Details!</p>
   </div> 
  )
}