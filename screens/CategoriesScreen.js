import { render } from 'react-dom'
import { StyleSheet, View, Text, FlatList, ScrollView, Pressable } from 'react-native'
import CategoryGridTile from '../components/CategoryGridTile'
import { CATEGORIES } from '../data/dummy-data'



//class 함수 외부는 한번만 실행한다.
function CategoriesScreen({navigation}){    

    function renderCategoryItem(itemData){
        function pressHandler(){
            navigation.navigate('MealsOverview', {
                categoryId: itemData.item.id 
            })
        }
    
        return(
         <CategoryGridTile 
            title={itemData.item.title} 
            color={itemData.item.color} 
            onPress={pressHandler}
        />
        )
    }


    return(
        <View>
            <FlatList
                data={CATEGORIES}
                keyExtractor={(item)=>item.id}
                renderItem={renderCategoryItem}
                numColumns={2}
            />
        </View>        
    )
}

const styles = StyleSheet.create({

})

export default CategoriesScreen;