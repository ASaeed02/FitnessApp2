import React from 'react';
import { View, Modal, Text, FlatList, Image, TouchableOpacity, StyleSheet, ScrollView, ImageBackground  } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { useRouter } from 'expo-router';

const exercises = [
  { id: '1', name: 'Push-ups', image: require('../assets/images/pushups.png'), description: 'Build upper body strength', sets: 3, reps: 15, calBurned: 150, muscle: 'Chest, Shoulders, Triceps'},
  { id: '2', name: 'Squats', image: require('../assets/images/squats.webp'), description: 'Strengthen your lower body', sets: 4, reps: 12, calBurned: 120, muscle: 'Quadriceps, Hamstrings, Glutes'},
  { id: '3', name: 'Plank', image: require('../assets/images/plank.png'), description: 'Engage core muscles and improve stability', sets: 3, reps: '60 seconds', calBurned: 90, muscle: 'Core'},
  { id: '4', name: 'Mountain Climbers', image: require('../assets/images/mountain-climbers.jpg'), description: 'Cardiovascular, full-body workout', sets: 3, reps: 30, calBurned: 180, muscle: 'Core, Shoulders, Legs'},
  { id: '5', name: 'Lunges', image: require('../assets/images/lunges.png'), description: 'Target leg muscles and enhance balance', sets: 3, reps: 12, calBurned: 130, muscle: 'Quadriceps, Hamstrings, Glutes'},
  { id: '6', name: 'Burpees', image: require('../assets/images/burpees.jpeg'), description: 'Full-body exercise for strength and cardio', sets: 3, reps: 10, calBurned: 200, muscle: 'Chest, Shoulders, Legs, Core'},

];

export default function Home() {
  const router = useRouter();
  const [selectedExercise, setSelectedExercise] = useState(null);



  const renderExerciseItem = ({ item }) => (
    <TouchableOpacity
      style={styles.exerciseItem}
      onPress={() => setSelectedExercise(item)} >
      <Image source={item.image} style={styles.exerciseImage} />
      <Text style={styles.exerciseName}>{item.name}</Text>
      <Text style={styles.exerciseDescription}>{item.description}</Text>
    </TouchableOpacity>
  );


  return (

    <ImageBackground
      source={require('../assets/images/home-background3.png')}
      style={styles.backgroundImage} >

    <ScrollView>
        <View style={styles.container}>
        
        <StatusBar style="dark" />
        <LinearGradient
            colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.5)']} 
            style={styles.gradientContainer} >

            <Animated.View style={styles.introContainer} entering={FadeInDown.delay(100).springify()}>
                <Text style={styles.introText}>
                    Welcome to GymGenius! Get ready to embark on a fitness journey that transforms your body and boosts your energy. 🚀
                </Text>
            </Animated.View>
    
            <Text style={styles.instructionsText}>
                Explore our curated exercises designed to challenge and elevate your fitness level. <Text style={styles.accentText}>Let's make every workout count!</Text>
            </Text>

            <TouchableOpacity
                onPress={() => router.push('timer')}
                style={styles.getStartedButton} >
                    <Text style={styles.buttonText}> Timer </Text>
            </TouchableOpacity>

            <FlatList
            data={exercises}
            keyExtractor={(item) => item.id}
            renderItem={renderExerciseItem}
            numColumns={2} />

            {/* displaying exercise information such as sets, reps... */}
          <Modal
            visible={selectedExercise !== null}
            animationType="slide"
            transparent={true}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>{selectedExercise?.name}</Text>
                <Text style={styles.modalDescription}>{selectedExercise?.description}</Text>
                <Text style={styles.additionalInfoText}>Sets: {selectedExercise?.sets}</Text>
                <Text style={styles.additionalInfoText}>Reps: {selectedExercise?.reps}</Text>
                <Text style={styles.additionalInfoText}>Calories Burned: {selectedExercise?.calBurned}</Text>
                <Text style={styles.additionalInfoText}>Target Muscle: {selectedExercise?.muscle}</Text>
    
                <TouchableOpacity
                  onPress={() => setSelectedExercise(null)}
                  style={styles.closeButton}
                >
                  <Text style={styles.closeButtonText}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

        </LinearGradient>
        </View> 
    </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', 
  },
  gradientContainer: {
    flex: 1,
    padding: 16,
  },
  introContainer: {
    marginBottom: 16,
    padding: 12,
    borderRadius: 12,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#ddd',
  },
  introText: {
    fontSize: hp(2.5),
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'teal', 
    padding: 12, 
    marginVertical: 3,
  },
  instructionsText: {
    fontSize: hp(2.3),
    color: 'rgb(96, 96, 96)',
    marginTop: 2,
    marginBottom: 4,
  },  
  accentText: {
    color: 'rgb(153, 0, 0)',
    fontWeight: 'bold',
  },
  exerciseItem: {
    flex: 1,
    margin: 8,
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    alignItems: 'center',
  },
  exerciseImage: {
    width: 100,
    height: 100,
    marginBottom: 8,
  },
  exerciseName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  exerciseDescription: {
    fontSize: 12,
    color: '#666',
  },
  buttonContainer: {
    alignItems: 'center',
},
getStartedButton: {
    height: hp(7),
    width: wp(40),
    backgroundColor: 'teal',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: hp(3.5),
    borderWidth: 2,
    borderColor: 'white',
    margin: 15,
    marginLeft: 180,
},
buttonText: {
    fontSize: hp(3),
    color: 'white',
    fontWeight: 'bold',
    letterSpacing: 1,
},
modalContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(169, 169, 169, 0.7)',
},
modalContent: {
  backgroundColor: 'white',
  padding: 20,
  borderRadius: 10,
  elevation: 5,
},
modalTitle: {
  fontSize: 20,
  fontWeight: 'bold',
  marginBottom: 10,
},
modalDescription: {
  fontSize: 18,
  color: '#666',
  marginBottom: 20,
},
closeButton: {
  backgroundColor: 'teal',
  padding: 10,
  borderRadius: 5,
  alignSelf: 'flex-end',
  marginTop: 15,

},
closeButtonText: {
  color: 'white',
  fontWeight: 'bold',
},

additionalInfoContainer: {
  marginTop: 10,
  marginBottom: 10,
},
additionalInfoText: {
  fontSize: 18,
  color: '#262626',
  fontWeight: '500',
},

});
