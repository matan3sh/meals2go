import React from 'react';
import { Title, ResturantCard, ResturantCardCover } from './styles';

const ResturantInfoCard = ({ resturant = {} }) => {
  const {
    name = 'Some Restaurant',
    icon,
    photos = [
      'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
    ],
    address = '100 some random street',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = resturant;
  return (
    <ResturantCard elevation={5}>
      <ResturantCardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </ResturantCard>
  );
};

export default ResturantInfoCard;
