import React from 'react'
import {
  View,
  Text,
  Image,
  StatusBar,
  StyleSheet 
} from 'react-native'
import { colors, screenSize } from '../constants'

export default function Home() {
   return (
      <View style={styles.container}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <Image
          style={styles.image}
          source={require('../../assets/image.png')}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Welcome to the app</Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            porta aliquet lacinia. Vivamus ultrices, sem quis varius laoreet,
            erat tellus porttitor tortor, non pharetra turpis tellus ac
            tellus. Maecenas at massa porta nulla vehicula rhoncus. Praesent
            lobortis ac justo nec consectetur. Nullam quis ipsum id purus
            dictum condimentum vitae at neque. In hac habitasse platea
            dictumst. In eget lorem quis mauris ornare ultricies in et
            ligula.
          </Text>
        </View>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      width: screenSize.width,
      height: screenSize.height,
      backgroundColor: colors.white
   },
   image: {
    width: screenSize.width,
    height: 230,
    marginTop: 100
  },
   textContainer: {
      flex: 1,
      alignItems: 'center'
   },
   title: {
      fontSize: 25,
      color: colors.text,
      fontWeight: 'bold',
      fontFamily: 'Roboto'
   },
   description: {
      marginTop: screenSize.height * 0.05,
      fontSize: 15,
      textAlign: 'center',
      marginHorizontal: 12,
      fontFamily: 'Roboto'
   }
})