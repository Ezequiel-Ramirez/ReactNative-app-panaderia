import { URL_API } from "../../utils/data/database";

export const GET_ORDERS = "GET_ORDERS";

export const getOrders = () => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${URL_API}/orders.json`);
            const data = await response.json();
            const orders = Object.keys(data).map((key) => ({
                ...data[key],
                id: key,
            }));
            dispatch({
                type: GET_ORDERS,
                orders: orders,
            });
        } catch (error) {
            console.warn(error);
        }
    };
};
