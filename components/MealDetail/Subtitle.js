import { StyleSheet, View, Text } from 'react-native'

function Subtitle({children}){
    return(
        <View style={styles.subTitleContainer}>
            <Text style={styles.subTitle}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    subTitleContainer:{
        borderBottomColor: 'white',
        borderBottomWidth: 2,   
        padding: 6,
        marginVertical: 4,
        marginHorizontal: 12
    },
    subTitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default Subtitle;