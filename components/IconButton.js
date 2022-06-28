import { StyleSheet, View, Text, Pressable } from 'react-native'
import { Ionicons} from '@expo/vector-icons'

function IconButton({onPress, icon, color}){
    return(
        <Pressable onPress={onPress} android_ripple>
            <Ionicons name={icon} size={24} color={color}/>
        </Pressable>
    )
}

const styles = StyleSheet.create({
  
})

export default IconButton;