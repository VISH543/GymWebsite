import { Button, Typography } from '@mui/material'
import { Box} from '@mui/system'
import React from 'react'


import homeImages from '../Images/home.png'
const HeroBanner = () => {
  return (
    <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
        <Typography color="#FF2625" fontWeight='600' fontSize='26px'> Fitness trekker</Typography>
        <Typography fontWeight='700' sx={{fontSize: {lg:'44px',xs: '40px'}}}>
            Sweat , Smile <br/> and Repeat
        </Typography>
        <Typography fontSize='22px' lineHeight='35px' mb='20px'>
            Check out the most effective exercises
        </Typography>
        <Button variant='contained' color='error' href='#exercises'>
    Explore Exercises
        </Button>
        <Typography fontWeight={600} color='#ff2625' fontSize='200px' sx={{opacity:'0.1', display: {lg:'block' , xs:'none'}}
    }>Exercises</Typography>
        <img src={homeImages} sx={{display:{xs:'none', sm:'none', lg:'none'}}}alt='banner' className='homeImages' style={{width:"700px", top: "-237px", right: "40px",height:"900px",position: "absolute",}}/>

    </Box>
  )
}

export default HeroBanner