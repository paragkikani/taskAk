import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import {Color} from '../utils/Color';

const SearchBar = () => {
  return (
    <View style={styles.searchBarContainer}>
      <View style={styles.searchBG}>
        <View
          style={{
            alignContent: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
            marginLeft: 10,
          }}>
          <Icon
            style={styles.Icon}
            name="search"
            size={30}
            color={Color.lightGray}></Icon>
        </View>
        <TextInput
          style={styles.searchBar}
          placeholder="Search crypto"
          placeholderTextColor={Color.lightGray}></TextInput>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    paddingHorizontal: 15,
    paddingVertical: 16,
    backgroundColor: Color.black,
  },
  searchBG: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Color.lightGray,
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 5,
    display: 'flex',
  },
  Icon: {
    alignContent: 'center',
    justifyContent: 'center',
  },
  searchBar: {
    backgroundColor: Color.black,
    paddingVertical: 8,
    paddingHorizontal: 16,
    flex: 1,
    fontSize: 20,
  },
});

export default SearchBar;
