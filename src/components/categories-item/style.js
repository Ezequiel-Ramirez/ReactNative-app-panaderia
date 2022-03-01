import { Dimensions, StyleSheet } from "react-native";

const { height } = Dimensions.get("window");
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: height /4,
        justifyContent: "center",
        borderRadius: 6,
        margin:  15,
       
    },
    containerTouchable: {
        flex: 1,
        height: '100%',
        borderRadius: 6,
        shadowColor: "black",
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        justifyContent: "center",
        alignItems: "center",
        
    },
    title: {
        fontFamily: "open-sans-bold",
        fontSize: 35,
        color: "black",
        fontWeight: "bold",
    },
    containerImage: {
        flex: 1,
        width: '100%',
        height: '80%',
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        marginTop: 35,
        borderRadius: 6,
    },
});
export default styles;