import styled from 'styled-components/native';
import { Text } from 'react-native';
import { Card } from 'react-native-paper';

export const Title = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.body};
  padding: ${({ theme }) => theme.space[3]};
  color: ${({ theme }) => theme.colors.ui.primary};
`;

export const ResturantCard = styled(Card)`
  background-color: ${({ theme }) => theme.colors.bg.primary};
`;

export const ResturantCardCover = styled(Card.Cover)`
  padding: ${({ theme }) => theme.space[3]};
`;
