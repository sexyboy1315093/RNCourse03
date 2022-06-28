import { StyleSheet, View, Text, Image, ScrollView, Button } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { MEALS } from '../data/dummy-data'
import MealDetails from '../components/MealDetails'
import Subtitle from '../components/MealDetail/Subtitle'
import List from '../components/MealDetail/List'
import { useEffect, useContext } from 'react'
import IconButton from '../components/IconButton'
import { FavoritesContext } from '../store/context/favorites-context'

function MealDetailScreen({route, navigation}){
    
    const mealId = route.params.mealId
    const selectMeal = MEALS.find((meal) => meal.id === mealId)
    
    const favoriteMealsCtx = useContext(FavoritesContext);
    const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId)

    function changeFavoriteStatusHandler(){
        if(mealIsFavorite){
            favoriteMealsCtx.removeFavorite(mealId)
        }else {
            favoriteMealsCtx.addFavorite(mealId)
        }
    }

    useEffect(()=>{
        navigation.setOptions({
            headerRight: ()=> {
                return (
                    <IconButton onPress={changeFavoriteStatusHandler} icon={mealIsFavorite ? 'star' : 'star-outline'} color='yellow'/>
                )
            }
        })
    },[navigation, changeFavoriteStatusHandler])

    return(
        <ScrollView style={styles.rootContainer}>
            <Image style={styles.image} source={{uri: selectMeal.imageUrl }}/>
            <Text style={styles.title}>{selectMeal.title}</Text>
            <MealDetails 
                duration={selectMeal.duration} 
                complexity={selectMeal.complexity} 
                affordability={selectMeal.affordability}
                textStyle={styles.detailText}/>
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={selectMeal.ingredients}/>

                    <Subtitle>Steps</Subtitle>
                    <List data={selectMeal.steps}/>  
                    {/* {selectMeal.steps.map((step) => (
                        <Text key={step} >{step}</Text>  //selectMeal.steps~~부터 세줄이 <List data~~/> 로 바뀐 것이다
                    ))} */}
                </View>                
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32
    },
    image: {
        width: '100%',
        height: 350
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white'
    },
    detailText: {
        color: 'white'
    },
    listContainer: {
        maxWidth: '80%'
    },
    listOuterContainer: {
        alignItems: 'center'
    }
})

export default MealDetailScreen;