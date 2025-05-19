import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {GestureHandlerRootView} from 'react-native-gesture-handler'
import Slider from '@/components/slider'
import Slide from '@/components/slide'
import { Gesture } from 'react-native-gesture-handler'
export default function OnboardingScreen() {
  const [value, setValue] = React.useState(0);

  const mygetsure = Gesture.Pan()
  .onStart((e) => {
    console.log('start')
  })
  .onUpdate((e) => {
    console.log('update')
  })
  .onEnd((e) => {
    console.log('end')
  })

  return (
    <View>
     <GestureHandlerRootView>
      <Slider
     
      />

     </GestureHandlerRootView>
    </View>
  )
}

const styles = StyleSheet.create({})