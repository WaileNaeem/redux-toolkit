import React, { useEffect } from 'react'
import AppNavigator from './src/navigation/app-navigator';
import {useDispatch} from 'react-redux'
import data from './src/data/data';
import { addProducts } from './src/components/redux/slices/ProductSlice';

const App = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
    data.map(item=>(
      dispatch(addProducts(item))
    ))
  },[data])
  return (
    <AppNavigator/>
  )
}

export default App
