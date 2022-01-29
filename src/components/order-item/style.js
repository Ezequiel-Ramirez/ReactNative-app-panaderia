import { Dimensions, StyleSheet } from "react-native";

const { height } = Dimensions.get("window");
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: height / 4,
        justifyContent: "center",
        borderRadius: 6,
        margin: 15,
    },
    header: {
        flex: 1,
    },
    date: {
        fontFamily: "open-sans-bold",
        fontSize: 20,
        color: "black",
        fontWeight: "bold",
        backgroundColor: "grey",
    },
    detail: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",

    },
});
export default styles;