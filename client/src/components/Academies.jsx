import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import img1 from '../assets/Academies/img1.jpg';
import img2 from '../assets/Academies/2.jpg'
import img3 from '../assets/Academies/3.jpg'
import img4 from '../assets/Academies/4.jpg'
import img5 from '../assets/Academies/5.jpg'
import img6 from '../assets/Academies/6.jpg'

export default function Academies() {
  return (
    <ImageList sx={{  height: 500 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader sx={{
            alignItems:'auto',
            }} component="div">Academies</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: img1,
    title: 'Boxing',
    author: '@bkristastucchio',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: img2,
    title: 'Badminton',
    author: '@rollelflex_graphy726',
  },
  {
    img: img3,
    title: 'Archery',
    author: '@helloimnik',
  },
  {
    img: img4,
    title: 'Football',
    author: '@nolanissac',
    cols: 2,
  },
  {
    img: img5,
    title: 'Cricket',
    author: '@hjrc33',
    cols: 2,
  },
  {
    img: img6,
    title: 'cricket',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
    featured: true,
  },
  
];
