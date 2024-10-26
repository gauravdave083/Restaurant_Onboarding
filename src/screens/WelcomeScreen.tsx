import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { NavigationProps } from '../types';
import CustomButton from '../components/CustomButton';
import ProgressBar from '../components/ProgressBar';

const WelcomeScreen: React.FC<NavigationProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ProgressBar currentStep={1} totalSteps={5} />
      <Image 
        source={require('../assets/welcome-icon.png')} 
        style={styles.image}
      />
      <Text style={styles.title}>Welcome to FoodApp</Text>
      <Text style={styles.subtitle}>Let's get your restaurant set up</Text>
      <CustomButton 
        title="Get Started"
        onPress={() => navigation.navigate('BasicInfo')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
});

export default WelcomeScreen;