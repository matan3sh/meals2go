import React, { useState } from 'react';

import { Searchbar } from 'react-native-paper';

import { ResturantInfoCard } from '../../components';
import { SafeArea, SearchContainer, ResturantListContainer } from './styles';

const ResturantScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar
          placeholder='Search'
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchContainer>
      <ResturantListContainer>
        <ResturantInfoCard />
      </ResturantListContainer>
    </SafeArea>
  );
};

export default ResturantScreen;
