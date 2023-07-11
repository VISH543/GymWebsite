import React, { useEffect, useState } from 'react'
import Detail from '../components/Detail'
import {Box} from '@mui/material'
import { useParams } from 'react-router-dom';
import { exerciseOptions, fetchData ,youtubeOptions} from '../Utils/fetchData';
import ExerciseVideos from '../components/ExerciseVideos';

const ExerciseDetails = () => {
  const [exerciseDetail,setExerciseDetail] = useState({});
  const [youtubeDetail,setYoutubeDetail] = useState([]);

  const {id}= useParams();
  useEffect(()=>{
    const fetchExercisesData = async() => {
      const exerciseUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearch = 'https://youtube-search-and-download.p.rapidapi.com';
      const exerciseData = await fetchData(`${exerciseUrl}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetail(exerciseData);

      const exerciseVideosData= await fetchData(`${youtubeSearch}/search?query=${exerciseData.name}`,youtubeOptions);
      setYoutubeDetail(exerciseVideosData.contents);
    }
    fetchExercisesData();
  },[id]);
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail}/>
      <ExerciseVideos youtubeDetail={youtubeDetail} name={exerciseDetail.name}/>
 </Box>
  )
}

export default ExerciseDetails;