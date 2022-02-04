import {URL_API} from '../../utils/data/database';

export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const CONFIRM_ITEM = 'CONFIRM_ITEM';

export const addItem = (item) => {
    return {
        type: ADD_ITEM,
        item: item,
    }
}

export const removeItem = (itemId) => {
    return {
        type: REMOVE_ITEM,
        itemId: itemId,
    }
}

export const confirmCart = (payload, total) => {
    return async dispatch => {
        try {
            const response = await fetch(`${URL_API}/orders.json`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    date: Date.now(),
                    items: payload,
                    total: total,
                })
            });
            const data = await response.json();
            console.warn(data);
                dispatch({
                    type: CONFIRM_ITEM,
                    confirm: true,
                })
           
        } catch (error) {
            console.warn(error);
        }
    }
}