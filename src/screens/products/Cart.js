import { StyleSheet, Text, TouchableOpacity, View,FlatList, Image } from 'react-native'
import React from 'react';
import {useSelector} from 'react-redux'

const Cart = () => {
    const cartItem = useSelector(state => state.cart);
    console.log(cartItem);
  return (
    <View style={{flex:1}}>
     <View style={styles.contentContainer}>
        <Text style={styles.text}>Cart</Text>
      </View>
      <FlatList
        data={cartItem}
        renderItem={({item, index}) => (
          <View
            style={{
              width: '94%',
              alignSelf: 'center',
              height: 120,
              backgroundColor: '#fff',
              marginTop: 10,
              borderRadius: 10,
              elevation: 1,
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 10,
            }}>
            <Image
              source={{uri: item.image}}
              style={{width: 100, height: 100, borderRadius: 10}}
            />
            <View style={{padding: 10}}>
              <Text style={{fontSize: 16, color: '#000', fontWeight: '600'}}>
                {item.name.substring(0, 20) + '..'}
              </Text>
              <Text style={{fontWeight: '600'}}>{item.brand}</Text>
              <Text style={{color: 'green', fontWeight: '600', fontSize: 16}}>
                {'Rs. ' + item.price}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 5,
                }}>
                {item.qty !== 0 ? null : (
                  <TouchableOpacity
                    style={{
                      backgroundColor: 'green',
                      borderRadius: 5,
                      height: 27,
                      justifyContent: 'center',
                      alignItems: 'center',
                      paddingHorizontal: 10,
                      marginLeft: 10,
                    }}>
                    <Text style={{color: '#fff'}}>-</Text>
                  </TouchableOpacity>
                )}
                {item.qty !== 0 ? null : (
                  <Text
                    style={{marginLeft: 10, fontSize: 16, fontWeight: '600'}}>
                    {item.qty}
                  </Text>
                )}
                {item.qty !== 0 ? null : (
                  <TouchableOpacity
                    style={{
                      backgroundColor: 'green',
                      borderRadius: 5,
                      height: 27,
                      justifyContent: 'center',
                      alignItems: 'center',
                      paddingHorizontal: 10,
                      marginLeft: 10,
                    }}>
                    <Text style={{color: '#fff'}}>+</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </View>
        )}
      />
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
    mainContainer: {flex: 1},
    contentContainer: {
      width: '100%',
      height: 60,
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: 20,
      backgroundColor: '#ffffff',
      elevation: 1,
    },
    text: {
      color: '#000000',
      fontSize: 16,
      fontWeight: '700',
    },
  });