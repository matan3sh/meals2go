import React from 'react';
import { SvgXml } from 'react-native-svg';

import {
  Title,
  ResturantCard,
  ResturantCardCover,
  Info,
  Address,
  Rating,
} from './styles';
import star from '../../../../../assets/star';

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
  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <ResturantCard elevation={5}>
      <ResturantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Rating>
          {ratingArray.map((key) => (
            <SvgXml xml={star} width={20} height={20} key={key} />
          ))}
        </Rating>
        <Address>{name}</Address>
      </Info>
    </ResturantCard>
  );
};

export default ResturantInfoCard;
