import React ,{useState, useEffect} from 'react'
import { Box } from '@mui/system'
import { Pagination, Stack, Typography } from '@mui/material'
import ExerciseCard from './ExerciseCard';
import { fetchData, exerciseOptions } from '../Utils/fetchData'


const Exercises = ({exercises,setExercises,bodyPart}) => {
  console.log(exercises);
  const[currentPage,setCurrentPage] = useState(1);
  const exercisesPerPage = 9;
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);


  const paginate = (e,value) => {
      setCurrentPage(value) ;
      window.scrollTo({top:1800, behaviour:'smooth'})
  }
  return (
    <Box id='exercises'
    sx={{mt: {lg:'110px'}}}
    mt='50px'
    p='20px'
    >
      <Typography variant = 'h4' mb='46px'>
        Showing Results
      </Typography>
      <Stack direction='row' sx={{gap: {lg:'110px', xs:'50px'}}}
      flexWrap='wrap' justifyContent='center'>{ currentExercises.map((exercise, index) => (<ExerciseCard key={index} exercise={exercise}/>))}
     </Stack>
      <Stack mt='100px' alignItems='center'>
        {exercises.length > 9 && (
          <Pagination
          color='standard' shape='rounded' defaultPage={1} count={Math.ceil(exercises.length/exercisesPerPage)}
          page={currentPage} 
          onChange={paginate} 
          size='large' />
        )}
      </Stack>
    </Box>
  )
}

export default Exercises