import styled from 'styled-components';
import { SafeAreaView, View } from 'react-native';

import { StatusBar } from 'react-native';

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top:${StatusBar.currentHeight}px`};
`;

export const SearchContainer = styled(View)`
  padding: ${({ theme }) => theme.space[3]};
`;

export const ResturantListContainer = styled(View)`
  flex: 1;
  padding: ${({ theme }) => theme.space[3]};
`;
