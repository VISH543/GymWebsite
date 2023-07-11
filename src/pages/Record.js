import React, { useEffect, useState } from 'react';
import { fetchData,exerciseOptions } from '../Utils/fetchData';
import {Box} from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from "@material-ui/core/TextField";

const Record = () => {
    const [exercise,setExercise] = useState();
    const [open,setOpen] = useState(false)
    const [option,setOption] = useState([]);
  
    useEffect(()=>{
        const fetchExercise = async()=>{
       let exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
       console.log(exercisesData);
       setExercise( exercisesData);
       setOption(Object.keys(exercisesData).map(key => exercisesData[key].item[0]));

       if(!open) {
        setOption([]);
       }

        }
        fetchExercise();
        
    },[open])

  return (
        <Box>
           <Autocomplete options={exercise} 
           open={open} 
           onOpen={()=> {
            setOpen(true);
           }} 
           onClose={() => {
          setOpen(false);
           }} 
           getOptionSelected={(option, value) => option.name === value.name}
           getOptionLabel={option => option.name}
           option ={option}
       renderInput={(params)=><TextField {...params} label={exercise}/>}/>
        </Box>
  )
}

export default Record