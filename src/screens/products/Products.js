import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addProductToCart} from '../../components/redux/slices/CartSlice';
import {useNavigation} from '@react-navigation/native';

const Products = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const products = useSelector(state => state.product);
  const cartItem = useSelector(state => state.cart);
  const total = cartItem.reduce((acc, item) => acc + item.price * item.qty, 0);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.contentContainer}>
        <Text style={styles.text}>Products Page</Text>
      </View>
      <FlatList
        data={products}
        renderItem={({item, index}) => (
          <View style={styles.flatList}>
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
                {item.qty == 0 && (
                  <TouchableOpacity
                    style={styles.addToCartButton}
                    onPress={() => dispatch(addProductToCart(item))}>
                    <Text style={{color: '#fff'}}>Add To Cart</Text>
                  </TouchableOpacity>
                )}
                {item.qty !== 0 ? null : (
                  <TouchableOpacity style={styles.decrementButton}>
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
                    style={styles.decrementButton}>
                    <Text style={{color: '#fff'}}>+</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </View>
        )}
      />
      {cartItem.length>0 && (
        <View
        style={{
          width: '100%',
          height: 60,
          backgroundColor: '#fff',
          position: 'absolute',
          bottom: 0,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
        <View
          style={{
            width: '50%',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}>
          <Text style={{fontSize: 16, fontWeight: '700', color: 'black'}}>
            Added Items {`( ${cartItem.length} )`}
          </Text>
          <Text>Total: {total} </Text>
        </View>
        <View
          style={{
            width: '50%',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: 'green',
              width: '70%',
              height: 30,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
            }}
            onPress={() => {
              navigation.navigate('cart');
            }}>
            <Text style={{color: '#fff'}}>View Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
      )}
      
    </View>
  );
};

export default Products;

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
  flatList: {
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
  },
  addToCartButton: {
    backgroundColor: 'green',
    borderRadius: 5,
    height: 27,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  decrementButton: {
    backgroundColor: 'green',
    borderRadius: 5,
    height: 27,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginLeft: 10,
  },
});
