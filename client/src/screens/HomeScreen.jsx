import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { colors, screenSize } from "../constants";

export default function HomeScreen({ navigation }) {
   return (
      <View style={styles.container}>
         <StatusBar barStyle={'light-content'} backgroundColor="#3549FB" />
         <LinearGradient
            colors={[colors.gradient1, colors.gradient2]}
            style={styles.gradient}
         />
         <View style={styles.buttonContainer}>
            <TouchableOpacity
               style={styles.button}
               onPress={() => navigation.navigate('Register')}
            >
               <Text style={styles.buttonText}>Register Account</Text>
            </TouchableOpacity>
            <TouchableOpacity
               style={styles.button}
               onPress={() => navigation.navigate('Login')}
            >
               <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
  container: {
     flex: 1,
     alignItems: 'center',
     backgroundColor: colors.gradient2
  },
  gradient: {
     position: 'absolute',
     left: 0,
     right: 0,
     top: 0,
     height: screenSize.height * 0.77
  },
  buttonContainer: {
     marginTop: screenSize.height * 0.5,
     flex: 1,
     alignContent: 'center',
     justifyContent: 'center'
  },
  button: {
     backgroundColor: colors.button,
     width: screenSize.width * 0.7,
     paddingVertical: 10,
     alignItems: 'center',
     borderRadius: 100,
     marginVertical: screenSize.height * 0.027
  },
  buttonText: { color: colors.text, fontFamily: 'Roboto', fontSize: 16.2 }
})