import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Timer = () => {
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTotalSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTotalSeconds(0);
  };

  const calculateCaloriesBurned = () => {
    const caloriesPerSecond = 0.1;
    return Math.round(caloriesPerSecond * totalSeconds);
  };

  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const navigation = useNavigation();

  return (
    <View style={styles.timerContainer}>
      <Text style={styles.timerText}>Timer: {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</Text>
      <Text style={styles.caloriesText}>Calories Burned: {calculateCaloriesBurned()} calories</Text>
      <Button title={isRunning ? 'Stop' : 'Start'} onPress={isRunning ? stopTimer : startTimer} />
      <Button title="Reset" onPress={resetTimer} titleStyle={styles.resetButton} />
      <TouchableOpacity
        onPress={() => navigation.navigate('home')}
        style={styles.backButton}
      >
        <Text style={styles.buttonText}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  timerContainer: {
    marginBottom: 16,
    marginTop: 16,
    margin: 10,
    padding: 12,
    borderRadius: 12,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#ddd',
  },
  timerText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  caloriesText: {
    textAlign: 'center',
  },
  resetButton: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'rgb(153, 0, 0)',
  },
  backButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'teal',
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Timer;
