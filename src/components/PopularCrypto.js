import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {Color} from '../utils/Color';

const PopularCrypto = ({cryptocurrencies}) => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Popular crypto</Text>

      <View style={styles.scrollParent}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalScroll}>
          {cryptocurrencies?.map((crypto, index) => (
            <View key={index} style={styles.cryptoItem}>
              <Text style={styles.cryptoName}>
                {crypto.symbol.toUpperCase()} - {crypto.name}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    padding: 16,
    backgroundColor: Color.black,
  },
  sectionTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: Color.white,
  },
  horizontalScroll: {
    marginBottom: 16,
    flexDirection: 'row',
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 0,
    display: 'flex',
    flexDirection: 'row',
  },
  scrollParent: {
    paddingTop: 9,
    flexDirection: 'row',
  },
  cryptoItem: {
    backgroundColor: Color.btnBG,
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
    marginRight: 8, // For horizontal scroll
  },
  cryptoName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  cryptoType: {
    fontSize: 14,
    color: '#ccc',
  },
});

export default PopularCrypto;
