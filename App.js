/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import React, { Component } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { Rating, AirbnbRating } from 'react-native-ratings';
import Swiper from 'react-native-swiper'

import {
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput,
  Image,
} from 'react-native';
import { yellow } from 'chalk';


export default function App() {
  const ratingCompleted = (val) => {
    val = 2
  }
  return (
    <View style={styles.container}>
      <View style={styles.up}>
        <View style={styles.logocontainer}>
          <Ionicons name="reorder-three" size={30} color="gray" />
          <Text style={styles.logo}>FOREVER 21</Text>
        </View>
        <View style={styles.searchcontainer}>
          <TextInput style={styles.tiSearch} placeholder="Search" placeholderTextColor="black">
          </TextInput>
          <Text style={styles.specialoffers}>All Special Offers(0)</Text>
        </View>
      </View>
      <View style={styles.down}>
        <ScrollView>
          <View style={styles.listitems}>
            <Swiper height={400} style={styles.wrapper} showsButtons={true}>
              <View style={styles.slide1}>
                <Image style={styles.images}
                  source={require('./images/prd1.png')}
                />
              </View>
              <View style={styles.slide2}>
                <Image style={styles.images}
                  source={require('./images/prd2.png')}
                />
              </View>
              <View style={styles.slide3}>
                <Image style={styles.images}
                  source={require('./images/prd3.png')}
                />
              </View>
            </Swiper>
          </View>
          <View style={styles.listitems}>
            <Image style={styles.imgitem}
              source={require('./images/img3.png')}
            />
          </View>
          <View style={styles.listitems}>
            <Image style={styles.images}
              source={require('./images/img4.png')}
            />
          </View>
          <View style={styles.listitems}>
            <Image style={styles.imgitem}
              source={require('./images/img1.png')}
            />
          </View>
          <View style={styles.listitems}>
            <Image style={styles.imgitem}
              source={require('./images/img2.png')}
            />
          </View>
          <TouchableOpacity style={{
            alignItems: "center",
            justifyContent: "center",
            marginLeft: 30,
            width: 300,
            backgroundColor: "#DDDDDD",
            padding: 10, height: 50, backgroundColor: 'yellow',
            bottom: 10,
            borderWidth: 1,
            borderColor: 'black',
          }}>
            <Text>
              Cum back to Top
            </Text>
          </TouchableOpacity>
          <Rating
            showRating
            onFinishRating={ratingCompleted}
            style={{ paddingVertical: 10 }}
          />
        </ScrollView>
        <View style={styles.menubottom}>
          <View style={styles.menubottomitems}>
            <SimpleLineIcons name="home" size={30} color="gray" />
            <Text style={styles.menubottomitemsname}>
              Home
            </Text>
          </View>
          <View style={styles.menubottomitems}>
            <Ionicons name="heart-outline" size={30} color="gray" />
            <Text style={styles.menubottomitemsname}>
              Wishlist
            </Text>
          </View>
          <View style={styles.menubottomitems}>
            <SimpleLineIcons name="bag" size={30} color="gray" />
            <Text style={styles.menubottomitemsname}>
              Cart
            </Text>
          </View>
          <View style={styles.menubottomitems}>
            <Ionicons name="person-outline" size={30} color="gray" />
            <Text style={styles.menubottomitemsname}>
              Me
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'white',
  },
  up: {
    flex: 2,
    flexDirection: 'column',
    backgroundColor: 'white',
    alignItems: 'stretch',

  },
  logocontainer: {
    flexDirection: 'row',
    padding: 10,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Mishafi',
    alignItems: 'stretch',
    marginLeft: 100,
  },
  searchcontainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 5,
  },
  tiSearch: {
    width: 340,
    height: 40,
    backgroundColor: '#EEEEEE',
    color: 'black',
  },
  specialoffers: {
    paddingTop: 10,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  down: {
    flex: 8,
    flexDirection: 'column',
    backgroundColor: 'pink',
  },
  listitems: {
    flexDirection: 'column',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  imgitem: {
    width: '100%',
    height: 280,
    resizeMode: 'stretch',
  },
  menubottom: {
    backgroundColor: 'white',
    flexDirection: 'row',
    borderTopColor: 'gray',
    borderTopWidth: 2,
    paddingTop: 5,
  },
  menubottomitems: {
    width: 100,
    paddingLeft: 10,
  },
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
});