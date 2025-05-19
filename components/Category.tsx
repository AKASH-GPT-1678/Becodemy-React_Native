import { StyleSheet, Text, View, Pressable, TouchableOpacity, ScrollViewBase } from 'react-native'
import React from 'react'
import { useAppDispatch } from '@/app/redux/slice'
//@ts-ignore
import Icon from 'react-native-vector-icons/Entypo';
//@ts-ignore
import Icon1 from 'react-native-vector-icons/Ionicons';
//@ts-ignore
import Icon2 from 'react-native-vector-icons/MaterialIcons';
//@ts-ignore
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
//@ts-ignore
import Icon4 from 'react-native-vector-icons/FontAwesome';
//@ts-ignore
import Icon5 from 'react-native-vector-icons/AntDesign';

export default function Category() {
    //Entypo
    return (
        <View>

            <View>
                <Text>Category</Text>
                <Text>Category</Text>
            </View>

            <View style={{ flexDirection: 'row' , alignItems:'center',justifyContent : 'center' , gap : 30 , overflowX: 'scroll'}}>
          

                <TouchableOpacity style={{padding : 5 , justifyContent : 'center'}}>
                    <Icon name="shopping-basket" size={40} color="black" />
                    <Text>All</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon1 name="partly-sunny" size={40} color="black" />
                    <Text>Summer</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon2 name="electric-bolt" size={40} color="black" />
                    <Text>Electric</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon name="sweden" size={40} color="black" />
                    <Text>Beauty</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon3 name="lamp" size={40} color="black" />
                    <Text>Decor</Text>
                </TouchableOpacity>
                 <TouchableOpacity>
                    <Icon2 name="child-care" size={40} color="black" />
                    <Text>Kids</Text>
                </TouchableOpacity>
                    <TouchableOpacity>
                    <Icon5 name="gift" size={40} color="black" />
                    <Text>Gift</Text>
                </TouchableOpacity>
                    <TouchableOpacity>
                    <Icon4 name="diamond" size={40} color="black" />
                    <Text>Premium</Text>
                </TouchableOpacity>
              
              

            </View>






        </View>
    )
}

const styles = StyleSheet.create({})