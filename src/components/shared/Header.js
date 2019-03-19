// Import necessary libs
import React from 'react';
import { Text, View } from 'react-native';

// Create the component
const Header = ({ headerText }) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 22,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: '#222',
    shadowOpacity: 0.3,
    // we need to elevate component element in order to make box-shadow appear
    elevation: 3,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};

// Make the component available to other parts of the app
export default Header;
