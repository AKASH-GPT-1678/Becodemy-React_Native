import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { Redirect, router, Stack } from 'expo-router'
import { TextInput } from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'
//@ts-ignore
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useSelector } from 'react-redux'
import Category from '@/components/Category'
const Index = () => {
 
  return (
    <>
    
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView>
      


        <View style={styles.topHeader}>
          <Text style={{ fontSize: 15, fontWeight: 'bold', marginLeft: 2, marginRight: 2 }}>
            Blinkit in
            


          </Text>
          <View style={styles.subtopHeader}>
            <View style={{ flexDirection: 'column' }}>
              <Text style={{ fontSize: 30, fontWeight: 'bold', marginLeft: 2, marginRight: 2 }}>8 minutes</Text>
              <Text>Panchsheel Nagar , Thane West</Text>

            </View>

            <View style={{ flexDirection: 'row', gap: 5, marginTop: 10 }}>
              <View style={{ flexDirection: 'row', gap: 10   ,backgroundColor:'gray' , padding:10 , borderRadius:50}}>
                <Pressable onPress={() => router.push('/wallet')}>
                <Icon
                  name="wallet"
                  size={30}
                  color="#c9cb33"
                  style={{ rounded: 10 }}

                />
                </Pressable>
                 </View>
                <View style={{ flexDirection: 'row', gap: 5   ,backgroundColor:'gray' , padding:10 , borderRadius:50}}>
                <Icon
                  name="user-alt"
                  size={30}
                  color="black"

                />
                </View>
             


            </View>



          </View>
        </View>
        <View>
          <TextInput placeholder='Search' style={{borderWidth : 2 , margin : 5}} />
          
        </View>

        <Category />


      </SafeAreaView>
   
    </>

  )
}

export default Index

const styles = StyleSheet.create({
  topHeader: {
    flexDirection: 'column',
  },
  subtopHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 2
  }
})