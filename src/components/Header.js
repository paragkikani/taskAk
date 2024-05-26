import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Color} from '../utils/Color';

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.backbg}>
        <Icon
          style={styles.backIcon}
          name="chevron-back"
          size={30}
          color="#ffffff"></Icon>
      </View>
      <Text style={styles.headerTitle}>BUY</Text>
      <View style={styles.currencySelector}>
        <Text style={styles.currency}>INR</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: Color.headBG,
  },
  backbg: {
    backgroundColor: Color.btnBG,
    borderRadius: 20,
  },
  backIcon: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 20,
    color: Color.white,
    fontWeight: 'bold',
  },
  currencySelector: {
    backgroundColor: Color.btnBG,
    borderRadius: 20,
    paddingHorizontal: 25,
    paddingVertical: 9,
  },
  currency: {
    color: Color.white,
    fontSize: 16,
  },
});

export default Header;
