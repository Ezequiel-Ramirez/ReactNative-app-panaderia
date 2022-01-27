import { Dimensions, StyleSheet } from "react-native";

const { height } = Dimensions.get("window");
const styles = StyleSheet.create({
    containerTouchable: {
        flex: 1,
        height: height /4,
       justifyContent: "center",
        borderRadius: 6,
        margin:  15,
    },
    container: {
        flex: 1,
        borderRadius: 6,
        shadowColor: "black",
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 3,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    name: {
        fontFamily: "open-sans-bold",
        fontSize: 20,
        color: "black",
        fontWeight: "bold",
    },
    detail: {
        fontFamily: "open-sans-regular",
        fontSize: 18,
    },
});
export default styles;