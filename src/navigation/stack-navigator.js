import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Products from '../screens/products/Products'
import Cart from '../screens/products/Cart'

const Stack=createStackNavigator()
const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='products' component={Products} />
        <Stack.Screen name='cart' component={Cart} />
    </Stack.Navigator>
  )
}

export default StackNavigator
