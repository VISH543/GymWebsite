import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { fetchData, exerciseOptions } from '../Utils/fetchData'
import HorizontalScroll from './HorizontalScroll'
const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
    const [search, setSearch] = useState('')
    const [bodyParts, setBodyParts] = useState([]);

    useEffect(() => {
        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
            setBodyParts(['all', ...bodyPartsData])
        }
        fetchExercisesData();
    }, [])
    
    const handleSearch = async () => {
        if (search) {
            const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)
            const searchExercises = exerciseData.filter(
                (exercise) => exercise.name.toLowerCase().includes(search)
                    || exercise.target.toLowerCase().includes(search)
                    || exercise.equipment.toLowerCase().includes(search)
                    || exercise.bodyPart.toLowerCase().includes(search)
            );
            setSearch('')
            setExercises(searchExercises);
        }
    }
    return (
        <Stack alignItems='center' mt={15} justifyContent='center' p='20px'>
            <Typography fontWeight='700' sx={{
                fontSize: { lg: '44px', xs: '30px' }
            }}>Awesome Exercises <br /> You Should Know</Typography>
            <Box position='relative' mb='72px' mt='30px'>
                <TextField sx={{
                    input: {
                        fontWeight: '700',
                        border: 'none',
                        borderRadius: '4px',
                    },
                    width: {
                        lg: '800px', xs: '350px'
                    },
                    backgroundColor: '#fff',
                    borderRadius: '40px'
                }}
                    height='76px'
                    value={search}
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                    placeholder='Search Exercises'
                    type='text' />
                <Button className='search-btn'
                    onClick={handleSearch}
                    sx={{
                        backgroundColor: '#FF2625',
                        color: '#fff',
                        textTransform: 'none',
                        width: { lg: '175px', xs: '100px' },
                        height: '56px', position: 'absolute',
                        right: '0',
                    }}>Search</Button>
            </Box>
            <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
                <HorizontalScroll data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />
            </Box>
        </Stack>
    )
}

export default SearchExercises