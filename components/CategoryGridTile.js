import { StyleSheet, View, Text, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native';

function CategoryGridTile({title, color, onPress}){
    return(
        <View style={[styles.gridItem, {backgroundColor:color}]}>
            <Pressable 
                style={styles.button}
                android_ripple={{color:'#cccc'}}
                onPress={onPress}    
            >
                <View style={styles.innerContainer}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        backgroundColor: 'white',
        elevation: 4,
        overflow: 'hidden'
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        flex: 1
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    }
})

export default CategoryGridTile;