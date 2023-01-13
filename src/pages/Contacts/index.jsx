import React, {lazy} from 'react';
import {View, Text} from 'react-native';
import Navigation from 'src/components/Navigation';

import ItemContact from 'src/components/Contacts/ItemContact';
import MyCard from 'src/components/Contacts/MyCard';

import {H1} from 'src/components/Heading/Heading';

function Index() {
  return (
    <View style={{flex: 1}}>
      <H1>Contacts</H1>
      <MyCard />
      <ItemContact />
      <ItemContact />
      <ItemContact />
    </View>
  );
}

export default Index;
