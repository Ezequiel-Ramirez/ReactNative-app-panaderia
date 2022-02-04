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

export const confirmCart = () => {
    return {
        type: CONFIRM_ITEM,
        payload
    }
}