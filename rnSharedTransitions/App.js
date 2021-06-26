import React from 'react'
import { StyleSheet, View } from 'react-native'

import { enableScreens } from 'react-native-screens'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element'
import { NavigationContainer } from '@react-navigation/native'
import List from './screen/List'
import Detail from './screen/Detail'


enableScreens()

const Stack = createSharedElementStackNavigator()

export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName='List' headerMode='none'>
      <Stack.Screen name='List' component={List} />
      <Stack.Screen name='Detail' component={Detail} options={() => ({
        gestureEnabled: false,
        transitionSpec: {
          open: {animation: 'timing', config: {duration: 1000}},
          close: {animation: 'timing', config: {duration: 1000}}
        },
        cardStyleInterpolator: ({current: { progress }}) => {
          return {
            cardStyle: {
              opacity: progress
            }
          }
        }

      })} />
    </Stack.Navigator>

  </NavigationContainer>)
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#666',
    alignItems: 'center',
    justifyContent: 'center'
  }
})