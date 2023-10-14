import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const style = StyleSheet.create({
    storyContainer: {
        marginRight: 20,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    name: {
        fontFamily: 'Inter',
        fontSize: 14,
        fontWeight: '500',
        color: 'black',
    },
    userImageContainer: {
        borderWidth: 1,
        borderColor: 'purple',
        padding: 3,
        borderRadius: 50,
    }
})
export default style;