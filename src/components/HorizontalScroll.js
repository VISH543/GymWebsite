import { Box} from '@mui/system'
import React , {useContext} from 'react'
import BodyPart from './BodyPart';
import {ScrollMenu , VisibilityContext} from 'react-horizontal-scrolling-menu'
import RightArrowIcon from '../Images/right-arrow.png'
import LeftArrowIcon from '../Images/left-arrow.png'
import { Typography } from '@mui/material';


const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const HorizontalScroll = ({data,bodyPart,setBodyPart}) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
         {data && data.map(item => (
            <Box 
            key={item.id || item}
            itemId={item.id || item}
            title={item.id || item}
            m='0 40px'
            ><BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}/></Box>
         ) )}
        </ScrollMenu>
  )
}

export default HorizontalScroll;