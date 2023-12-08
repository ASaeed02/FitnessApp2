/*  Alrabab Saeed
    ITN 263-401 Mobile App Development
    Final Project - Fitness App


Resources: 
   https://www.npmjs.com/package/react-native-responsive-screen
   https://www.nativewind.dev/quick-starts/expo
   https://www.youtube.com/watch?v=_MttMnZ3CeI&t=486s
   https://reactnavigation.org/docs/tab-based-navigation/ 
   https://www.4waytechnologies.com/blog/building-a-timer-app-with-react-native-a-beginner-s-tutorial  */

import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { useRouter } from 'expo-router';

const Tab = createBottomTabNavigator();



export default function Index() {
    const router = useRouter();
   // const navigation = useNavigation();
  
    return (
        
        <View style={styles.container}>
            <StatusBar style="light" />
            <Image source={require('../assets/images/welcome.png')} style={styles.backgroundImage} />

            <LinearGradient
                colors={['transparent', '#18181b']}
                style={styles.gradientContainer}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 0.8 }} >

                <Animated.View style={styles.logoContainer} entering={FadeInDown.delay(100).springify()}>
                    <Text style={styles.logoText}>
                        Gym<Text style={styles.logoAccentText}>Genius</Text>
                    </Text>
                    <Text style={styles.taglineText}>
                        Elevate Your Fitness Journey!
                    </Text>
                </Animated.View>

                <Animated.View style={styles.buttonContainer} entering={FadeInDown.delay(200).springify()}>
                    <TouchableOpacity
                        onPress={() => router.push('home')}
                        style={styles.getStartedButton} >

                        <Text style={styles.buttonText}>
                            Get Started
                        </Text>
                    </TouchableOpacity>
                </Animated.View>
            </LinearGradient>
        </View>
    );  
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    backgroundImage: {
        height: hp('100%'),
        width: wp('100%'),
        position: 'absolute',
    },
    gradientContainer: {
        width: wp(100),
        height: hp(70),
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: hp(12),
        paddingHorizontal: wp(5),
    },
    logoContainer: {
        alignItems: 'center',
    },
    logoText: {
        fontSize: hp(5),
        color: 'white',
        fontWeight: 'bold',
        letterSpacing: 1,
        marginBottom: hp(1),
    },
    logoAccentText: {
        color: 'rgb(0, 204, 204)',
    },
    
    taglineText: {
        fontSize: hp(3),
        color: 'white',
        fontWeight: 'bold',
        letterSpacing: 1,
        marginBottom: hp(5),
    },
    buttonContainer: {
        alignItems: 'center',
    },
    getStartedButton: {
        height: hp(7),
        width: wp(80),
        backgroundColor: 'teal',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: hp(3.5),
        borderWidth: 2,
        borderColor: 'white',
    },
    buttonText: {
        fontSize: hp(3),
        color: 'white',
        fontWeight: 'bold',
        letterSpacing: 1,
    },
});
