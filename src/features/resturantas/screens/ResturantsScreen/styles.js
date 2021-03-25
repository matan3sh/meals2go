import styled from 'styled-components';
import { SafeAreaView, View } from 'react-native';

import { StatusBar } from 'react-native';

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top:${StatusBar.currentHeight}px`};
`;

export const SearchContainer = styled(View)`
  padding: 16px;
`;

export const ResturantListContainer = styled(View)`
  flex: 1;
  padding: 16px;
`;
