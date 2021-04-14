import styled from 'styled-components/native';
import { Text, View } from 'react-native';
import { Card } from 'react-native-paper';

export const Title = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.body};
  color: ${({ theme }) => theme.colors.ui.primary};
`;

export const ResturantCard = styled(Card)`
  background-color: ${({ theme }) => theme.colors.bg.primary};
`;

export const ResturantCardCover = styled(Card.Cover)`
  padding: ${({ theme }) => theme.space[3]};
  background-color: ${({ theme }) => theme.colors.bg.primary};
`;

export const Info = styled(View)`
  padding: ${({ theme }) => theme.space[3]};
`;

export const Address = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.caption};
`;

export const Rating = styled(View)`
  flex-direction: row;
  padding-top: ${({ theme }) => theme.space[2]};
  padding-bottom: ${({ theme }) => theme.space[2]};
`;
