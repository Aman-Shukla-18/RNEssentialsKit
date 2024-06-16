import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type Props = {};

const App = (props: Props) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.headingText}>React Native Essentials Kit</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingText: {
    fontSize: 22,
    fontWeight: '700',
    letterSpacing: 1,
  },
});
