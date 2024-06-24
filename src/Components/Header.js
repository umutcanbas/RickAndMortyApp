import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import Back from '../assets/svg/back.svg';

import {useNavigation} from '@react-navigation/native';

const Header = ({title, back}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>{title}</Text>

      {back && (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Back width={30} height={30} fill={'#000000'} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 30,
  },
});
