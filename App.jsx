import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import Header from './src/components/Header';
import SearchBar from './src/components/SearchBar';
import PopularCrypto from './src/components/PopularCrypto';
import CryptoList from './src/components/CryptoList';
import {Color} from './src/utils/Color';

const App = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const isDarkMode = useColorScheme() === 'dark';
  // Fetch crypto data from an API
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=100',
      );
      const jsonData = await response.json();
      setCryptoData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  // Filter crypto data based on search term
  const filterData = searchTerm => {
    const filteredData = cryptoData.filter(crypto =>
      crypto.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setCryptoData(filteredData);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Header />
      <SearchBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <PopularCrypto cryptocurrencies={cryptoData} />
        <CryptoList cryptocurrencies={cryptoData} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
});

export default App;
