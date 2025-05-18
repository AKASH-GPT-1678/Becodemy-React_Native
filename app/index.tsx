import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Redirect, router } from 'expo-router'

const index = () => {
  return (
    <View>
      <Text onPress={()=>router.push('/dinkar')}>
        index
        
        </Text>
    </View>
  )
}

export default index

const styles = StyleSheet.create({})