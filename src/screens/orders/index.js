import { FlatList, View } from "react-native";

import OrderItem from "../../components/order-item";
import React, { useEffect } from "react";
import styles from "./styles";
import { getOrders, deleteOrder } from "../../store/action/order.action";
import { useSelector, useDispatch } from "react-redux";

const Orders = () => {
    const dispatch = useDispatch();
    const orders = useSelector((state) => state.orders.orders);
    const handleDeleteOrder = (orderId) => {
        dispatch(deleteOrder(orderId));
    };
    const renderItems = (data) => (
        <OrderItem item={data.item} onDelete={handleDeleteOrder}  />
    )

    useEffect(() => {
        dispatch(getOrders());
    }, []);
    return (
        <View style={styles.container}>
            <View style={styles.list}>
                <FlatList
                    data={orders}
                    renderItem={renderItems}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </View>
    )
}
export default Orders;