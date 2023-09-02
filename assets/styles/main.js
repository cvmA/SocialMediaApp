import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    header: {
        padding: 25,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    messageNumberContainer: {
        width: 19,
        height: 19,
        backgroundColor: 'red',
        borderRadius: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: -7,
        top: -6,
    },
    messageNumber: {
        color: 'white',
        fontSize: 13,
        fontWeight: '700'
    }
})

export default style 