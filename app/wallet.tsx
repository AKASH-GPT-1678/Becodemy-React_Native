import { StyleSheet, Text, View , Button , TouchableOpacity, SafeAreaView, Pressable } from 'react-native'
import { useSharedValue } from 'react-native-reanimated'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { router } from 'expo-router';
import data from '@/components/wallet.data';
import WalletRender from '@/components/walletrender';
import { setUserData } from './redux/slice';
import { FlatList } from 'react-native';
//@ts-ignore
import Icon from 'react-native-vector-icons/Ionicons'
//@ts-expect-error
import Icon2 from 'react-native-vector-icons/AntDesign'
import { Stack } from 'expo-router';
import { Provider } from 'react-redux';
import store from './redux/store';
import { useAppDispatch , useAppSelector, UserState } from './redux/slice';
const Wallet = () => {
 
    const arrowSize = useSharedValue(30);
    const dispatch = useAppDispatch();
    const name = useAppSelector((state) => state.usersave.name);
    const settingSize = 35;
    return (
        <>
        <Provider store={store}>
       <Stack.Screen options={{ headerShown: false }} />
        <SafeAreaView>
        <View>

            <View style={{ backgroundColor: 'none', height: 100 }}>
               <View style={styles.mapping}>
              
                    <Icon name="arrow-back" size={35} color="black" style={styles.iconStyle} onPress={() => router.back()} />
                    <Icon2 name="setting" size={settingSize} color="black" style={styles.iconStyle} />
              
                    
                    </View>
                 
                   
               
            </View>
                <View style={{ alignItems: 'center'  , backgroundColor : '#f9e79f' , marginHorizontal: 15}}>

                       <View style={{ alignItems: 'center'  , flexDirection:'column'}}>
                        <Icon name="wallet" size={90} color="black" />
                        <Text  style={{ fontSize: 35, fontWeight: 'bold' }}>blinkit</Text>
                        <Text style={{ fontSize: 50, fontWeight: 'bold' }}>MONEY</Text>
                    
                       </View>
                    </View>
             








                    {/* </View> */}
                    <FlatList
                    data={data}
                    renderItem={({ item }) => React.createElement(WalletRender, { item })}
                    keyExtractor={(item) => item.id}

                  
                    
                    > 

                     </FlatList>


                     <TouchableOpacity  style={{ alignItems: 'center' , margin:10 , backgroundColor : '#0cb364' , height:50, justifyContent :'center' }}>
                          <Button
                     title='Add Money'
                     color={'#0cb364'}
                   

                     
                     >

                     </Button>

                     </TouchableOpacity>


                   
                  

        </View>
        <Pressable onPress={() => dispatch(setUserData("Rajehs"))}>
            <Text>Helleo Set rahesh</Text>

        </Pressable>
        {name}
        </SafeAreaView>
        </Provider>
         </>
    )
}

export default Wallet

const styles = StyleSheet.create({
    mapping: {
        flex: 1,
        // position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
        backgroundColor: '#f9e79f',

        // position : 'absolute'
    },
    iconStyle: {
        width: 50,
        height: 50,
        backgroundColor: '#eaeae5',
        borderRadius: 50,
        padding: 8
    }

})