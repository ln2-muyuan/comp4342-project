import React from 'react';
import { View, ImageBackground, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    
    <ImageBackground
      source={require('../assets/profile.jpg')}
      style={styles.headerBackground}
      resizeMode="cover"
    >
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
    headerBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 100
      },
});

export default Header;