import { Stack, Typography } from '@mui/material'
import React from 'react'
import Icon from '../Images/gym.png'

const BodyPart = ({item,setBodyPart, bodyPart}) => {
  return (
<Stack type='button'
alignItems='center'
justifyContent='center'
className='bodyPart-card'
sx={{
   borderTop: bodyPart === item ? '4px solid #ff2625' : '',
   background:'#fff',
   borderBottomLeftRadius:'20px',
   width:'270px',
   height:'280px',
   cursor:'pointer',
   gap:'47px'
}}
onClick ={() => {
  setBodyPart(item);
  window.scrollTo({top:1800,left:100,behavior:'smooth'})
}}>
    <img src={Icon} alt='dumbell' style ={{width:'40px', height:'40px'}}/>
    <Typography fontSize='24px' fontWeight='bold' color='#3A1212'>{item}</Typography>
</Stack>
  )
}

export default BodyPart