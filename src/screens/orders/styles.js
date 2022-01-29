import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    list: {
        flex: 1,
        color: "#212121",
    },
    footer: {
        padding: 12,
        bottomTopColor: "#ccc",
        borderTopWidth: 1,
    },
    confirm: {
        backgroundColor: "#00a680",
        padding: 12,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        fontWeight: "bold",
        
    },
    total: {
        flexDirection: "row",
        
    },
    text: {
        color: "#212121",
        fontSize: 18,
        fontFamily: "Roboto-Bold",

    },
});
export default styles;