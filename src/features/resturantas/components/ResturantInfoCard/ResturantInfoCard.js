import React from 'react';
import { Text, Image, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

import {
  Title,
  ResturantCard,
  ResturantCardCover,
  Info,
  Address,
  Rating,
  Section,
  SectionEnd,
} from './styles';
import star from '../../../../../assets/star';
import open from '../../../../../assets/open';

const ResturantInfoCard = ({ resturant = {} }) => {
  const {
    name = 'Some Restaurant',
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos = [
      'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
    ],
    address = '100 some random street',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = resturant;
  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <ResturantCard elevation={5}>
      <ResturantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Section>
          <Rating>
            {ratingArray.map((_, key) => (
              <SvgXml xml={star} width={20} height={20} key={key} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant='label' style={{ color: 'red' }}>
                CLOSED TEMPORARILY
              </Text>
            )}
            <View style={{ paddingLeft: 16 }} />
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            <View style={{ paddingLeft: 16 }} />
            <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </ResturantCard>
  );
};

export default ResturantInfoCard;
