import { StyleSheet, View, Text, FlatList } from 'react-native'
import MealItem from './MealItem'

function MealsList({items}){
    function renderMealItem(itemData){
        const mealItemProps = {
            id: itemData.item.id,
            title: itemData.item.title,
            imageUrl: itemData.item.imageUrl,
            duration: itemData.item.duration, 
            complexity: itemData.item.complexity,
            affordability: itemData.item.affordability
        }
        return(
           <MealItem {...mealItemProps}/>
        )
    }

    return(
        <View style={styles.container}>
            <FlatList 
                data={items}
                keyExtractor={(item)=>item.id}
                renderItem={renderMealItem}   
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})

export default MealsList;