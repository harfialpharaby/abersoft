import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import RootNavigation from "./src/navigations/RootNavigation";

export default function App() {
   return (
      <NavigationContainer>
         <RootNavigation></RootNavigation>
      </NavigationContainer>
   )
}