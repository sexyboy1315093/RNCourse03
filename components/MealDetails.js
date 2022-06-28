import { StyleSheet, View, Text, Image } from 'react-native'
import { StatusBar } from 'expo-status-bar'

function MealDetails({duration, complexity, affordability, style, textStyle }){
    return(
     <View style={[styles.details, style]}>
        <Text style={[styles.detailItem, textStyle]}>{duration}m</Text>
        <Text style={[styles.detailItem, textStyle]}>{complexity.toUpperCase()}</Text>
        <Text style={[styles.detailItem, textStyle]}>{affordability.toUpperCase()}</Text>
     </View> 
    )
}

const styles = StyleSheet.create({
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12
    }
})

export default MealDetails;