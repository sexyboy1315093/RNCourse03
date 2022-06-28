import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import FavoritesContextProvider from './store/context/favorites-context';

import { Ionicons } from '@expo/vector-icons'

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

function DrawerNavigator(){
  return(
    <Drawer.Navigator screenOptions={{
      headerStyle: { backgroundColor: '#ccc'},
      headerTintColor: 'white',
      sceneContainerStyle: { backgroundColor: '#cec'},
      drawerContentStyle: {backgroundColor: '#cec'},
      drawerInactiveTintColor: 'black',
      drawerActiveTintColor: 'tomato',
      drawerActiveBackgroundColor: '#cecece'
    }}>
      <Drawer.Screen name='Categories' component={CategoriesScreen} 
      options={{
        title: 'All Categories',
        drawerIcon: ({color, size}) => (
          <Ionicons name='list' color={color} size={size}/>
        )
      }}/>

      <Drawer.Screen name='Favorites' component={FavoritesScreen}
      options={{
        drawerIcon: ({color, size}) => (
          <Ionicons name='star' color={color} size={size}/>
        )
      }}/>
    </Drawer.Navigator>
  )
}

export default function App() {

  return (
    <>
    <StatusBar style='light'/>
    <FavoritesContextProvider>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: { backgroundColor: '#ccc'},
        headerTintColor: 'white',
        contentStyle: { backgroundColor: '#cec'}
      }}>

        <Stack.Screen name='Drawer' component={DrawerNavigator} 
        options={{
          title: 'All Categories',
          headerShown: false  //Header 숨기기
        }}/>
        
        <Stack.Screen name='MealsOverview' component={MealsOverviewScreen} 
        // options={({route, navigation})=>{
        //   const catId = route.params.categoryId
        //   return{
        //     title: catId
        //   }
        // }}
        />
        <Stack.Screen name='MealDetail' component={MealDetailScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    </FavoritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({

});
