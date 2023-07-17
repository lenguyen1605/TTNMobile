import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import DrawerItems from './DrawerItems';

// const Home = ({ navigation }) => {
//   return (
//   <View>
//     <Text>Home</Text>
//     <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
//       <Icon name="bars" style={styles.bar}></Icon>
//     </TouchableOpacity>
//   </View>)
// }

// const Drawer = createDrawerNavigator();
export default function App() { 
  return (
    <View>
      <Text>Hello World</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bar: {
    position: 'absolute',
    top: 45,
    left: 10,
    padding: 10,
    zIndex: 1,
    fontSize: 27
  },
  header: {
    position: 'absolute',
    top: 35, 
    padding: 20,
    fontSize: 23,
    fontWeight: 'bold'  
  },
  line: {
    height: 1,
    backgroundColor: 'black',
    width: 500,
    position: 'absolute',
    top: 100
  }
});
