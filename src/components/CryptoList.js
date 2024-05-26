import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {Color} from '../utils/Color';

const groupAndSortCryptocurrencies = cryptocurrencies => {
  // Group and sort cryptocurrencies by their name's first letter
  const groupedCryptos = cryptocurrencies.reduce((acc, crypto) => {
    const firstLetter = crypto.name[0].toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(crypto);
    return acc;
  }, {});

  // Convert object to sorted array
  const sortedGroups = Object.keys(groupedCryptos)
    .sort()
    .map(letter => ({
      letter,
      cryptos: groupedCryptos[letter].sort((a, b) =>
        a.name.localeCompare(b.name),
      ),
    }));

  return sortedGroups;
};

const CryptoList = ({cryptocurrencies}) => {
  const sortedGroups = groupAndSortCryptocurrencies(cryptocurrencies);

  return (
    <ScrollView style={styles.scrollView}>
      {sortedGroups.map((group, index) => (
        <View key={index} style={{backgroundColor: Color.black}}>
          <Text style={styles.groupHeader}>{group.letter}</Text>
          {group.cryptos.map((crypto, cryptoIndex) => (
            <View key={cryptoIndex} style={styles.cryptoItem}>
              <Image style={styles.logo} source={{uri: crypto.image}} />
              <View style={styles.nameContainer}>
                <Text style={styles.cryptoName}>{crypto.name}</Text>
                <Text style={styles.cryptoType}>
                  {crypto.symbol.toUpperCase()}
                </Text>
              </View>
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    paddingHorizontal: 16,
  },
  groupHeader: {
    fontSize: 20,
    color: '#fff',
    paddingVertical: 8,
    backgroundColor: Color.black,
    paddingHorizontal: 8,
  },
  cryptoItem: {
    backgroundColor: Color.black,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    borderRadius: 8,
  },
  logo: {
    width: 45,
    height: 45,
  },
  cryptoName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textTransform: 'uppercase',
  },
  cryptoType: {
    fontSize: 14,
    color: '#ccc',
  },
  nameContainer: {
    flex: 1,
    marginLeft: 15,
  },
});

export default CryptoList;
