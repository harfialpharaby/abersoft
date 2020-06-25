import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Alert,
  ActivityIndicator
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons'
import { ScrollView } from 'react-native-gesture-handler'
import { colors, screenSize } from '../constants'

export default function Register({ navigation }) {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [isLoading, setIsLoading] = useState(false)

   const register = async () => {
      setIsLoading(true)
      try {
         const response = await fetch(`https://morning-sierra-01005.herokuapp.com/user/register`, {
            method: 'POST',
            headers: {
               Accept: 'application/json',
               'Content-Type': 'application/json'
            },
            body: JSON.stringify({
               email: email,
               password: password
            })
         })
         const data = await response.json()
         if (data.errors) {
            Alert.alert('Alert', data.errors[0].message)
         } else if (data.id) {
            setEmail('')
            setPassword('')
            navigation.navigate('OnBoarding')
         } else {
            Alert.alert('Alert', 'Something went wrong!')
         }
      } catch (error) {
         Alert.alert('Error', error)
      }
      setIsLoading(false)
   }
   
   return (
      <View style={styles.container}>
         <StatusBar barStyle={'light-content'} backgroundColor="#3549FB" />
         <LinearGradient
            colors={[colors.gradient1, colors.gradient2]}
            style={styles.gradient}
         />
         <TouchableOpacity
            style={styles.backToWindow}
            onPress={() => navigation.navigate('Home')}
         >
            <Ionicons name="md-arrow-back" size={24} color="white" />
         </TouchableOpacity>
         <ScrollView style={styles.scrollView}>
            <KeyboardAvoidingView>
               <View style={styles.registerContainer}>
                  <Text style={styles.title}>Register new account</Text>
                  <TextInput
                     placeholder="Email"
                     value={email}
                     placeholderTextColor="#000"
                     textContentType="emailAddress"
                     style={styles.textInput}
                     onChangeText={text => setEmail(text)}
                  />
                  <TextInput
                     placeholder="Password"
                     value={password}
                     secureTextEntry={true}
                     placeholderTextColor="#000"
                     textContentType="password"
                     style={styles.textInput}
                     onChangeText={text => setPassword(text)}
                  />
                  {
                     isLoading
                     ? <ActivityIndicator size="large" style={{marginTop: 50}}/>
                     : (
                        <TouchableOpacity style={styles.buttonRegister} onPress={register}>
                           <Text style={styles.btnText}>Create account</Text>
                        </TouchableOpacity>
                     )
                  }
               </View>
            </KeyboardAvoidingView>
         </ScrollView>
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
  backToWindow: {
     alignSelf: 'flex-start',
     paddingStart: 20,
     paddingTop: 10,
     height: screenSize.height * 0.1
  },
  scrollView: {
     width: screenSize.width
  },
  registerContainer: {
     marginTop: screenSize.height * 0.38,
     height: screenSize.height * 0.5,
     flex: 1,
     alignContent: 'center',
     padding: 50,
     width: '100%',
     backgroundColor: colors.white,
     borderTopStartRadius: 50,
     borderTopEndRadius: 50
  },
  title: {
     fontFamily: 'Roboto',
     fontSize: 23,
     marginBottom: 20
  },
  textInput: {
     padding: 2,
     borderBottomColor: colors.text,
     borderBottomWidth: 0.8,
     width: '100%',
     fontSize: 14,
     marginTop: 10
  },
  buttonRegister: {
     backgroundColor: colors.gradient1,
     width: '100%',
     padding: 10,
     alignItems: 'center',
     borderRadius: 50,
     marginTop: 50
  },
  btnText: { color: colors.white }
})