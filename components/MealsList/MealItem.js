import { StyleSheet, View, Text, Pressable, Image } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import MealDetails from '../MealDetails'

function MealItem({ id, title, imageUrl, duration, complexity, affordability }){
    
    const navigation = useNavigation()

    function selectMealItemHandler(){
        navigation.navigate('MealDetail', {
            mealId: id,
            mealImageUrl: imageUrl
        })
    }

    return(
        <View style={styles.mealItem}>
          <Pressable android_ripple={{color: '#ccc'}} onPress={selectMealItemHandler}>
              <View style={styles.innerContainer}>
                <View>
                   <Image source={{uri: imageUrl}} style={styles.image}/>  
                   <Text style={styles.title}>{title}</Text>
                </View>
                <MealDetails duration={duration} complexity={complexity} affordability={affordability}/>
              </View>
          </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    mealItem:{
        margin: 16,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: 'white',
        elevation: 4
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    }
})

export default MealItem;