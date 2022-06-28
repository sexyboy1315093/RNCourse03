import { StyleSheet, View, FlatList, Text } from 'react-native'
import { MEALS, CATEGORIES } from '../data/dummy-data'
import MealItem from '../components/MealsList/MealItem'
import {useState} from 'react'
import {useEffect} from 'react'
import MealsList from '../components/MealsList/MealsList'

function MealsOverviewScreen({route, navigation}){
    const catId = route.params.categoryId
    const displayedMeals = MEALS.filter((mealItem)=>{
        return mealItem.categoryIds.indexOf(catId) >= 0
    })

    useEffect(()=>{
        const categoryTitle = CATEGORIES.find((category) => category.id === catId).title

        navigation.setOptions({
         title: categoryTitle
        })
    },[catId, navigation])

    // function renderMealItem(itemData){
    //     const mealItemProps = {
    //         id: itemData.item.id,
    //         title: itemData.item.title,
    //         imageUrl: itemData.item.imageUrl,
    //         duration: itemData.item.duration, 
    //         complexity: itemData.item.complexity,
    //         affordability: itemData.item.affordability
    //     }
    //     return(
    //        <MealItem {...mealItemProps}/>
    //     )
    // }

    // return(
    //     <View style={styles.container}>
    //         <FlatList 
    //             data={displayedMeals}
    //             keyExtractor={(item)=>item.id}
    //             renderItem={renderMealItem}   
    //         />
    //     </View>
    // )

    return <MealsList items={displayedMeals}/>
}

const styles = StyleSheet.create({
  
})

export default MealsOverviewScreen;