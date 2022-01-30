export const SELECT_BREAD = 'SELECT_BREAD';
export const FILTER_BREADS = 'FILTERED_BREADS';

export const selectBread = (id) => {
    return {
        type: SELECT_BREAD,
        breadID: id,
    }
}

export const filterBreads = (id) => {
    return {
        type: FILTER_BREADS,
        categoryID: id
    }
}